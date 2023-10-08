"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/ui/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const providers = {
  github: {
    id: "github",
    name: "GitHub",
    type: "oauth",
    signinUrl: "http://localhost:3000/api/auth/signin/github",
    callbackUrl: "http://localhost:3000/api/auth/callback/github",
  },
  google: {
    id: "google",
    name: "Google",
    type: "oauth",
    signinUrl: "http://localhost:3000/api/auth/signin/google",
    callbackUrl: "http://localhost:3000/api/auth/callback/google",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    type: "oauth",
    signinUrl: "http://localhost:3000/api/auth/signin/linkedin",
    callbackUrl: "http://localhost:3000/api/auth/callback/linkedin",
  },
  credentials: {
    id: "credentials",
    name: "Credentials",
    type: "credentials",
    signinUrl: "http://localhost:3000/api/auth/signin/credentials",
    callbackUrl: "http://localhost:3000/api/auth/callback/credentials",
  },
};

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-50">
      <div className="flex flex-row items-center justify-center mt-5">
        <button
          className="flex items-center px-4 py-2 mx-1 text-white rounded bg-cocoa_brown-800"
          onClick={() =>
            signIn(providers.linkedin.id, {
              redirect: true,
              callbackUrl: "http://localhost:3000/home",
            })
          }
        >
          <FaLinkedin className="mr-2" />{" "}
          {/* Add some margin to the right of the icon */}
          LinkedIn
        </button>
        <button
          className="flex items-center px-4 py-2 mx-1 text-white rounded bg-cocoa_brown-800"
          onClick={() =>
            signIn(providers.google.id, {
              redirect: true,
              callbackUrl: "http://localhost:3000/home",
            })
          }
        >
          <FaGoogle className="mr-2" />{" "}
          {/* Add some margin to the right of the icon */}
          Google
        </button>
        <button
          className="flex items-center px-4 py-2 mx-1 text-white rounded bg-cocoa_brown-800"
          onClick={() =>
            signIn(providers.github.id, {
              redirect: true,
              callbackUrl: "http://localhost:3000/home",
            })
          }
        >
          <FaGithub className="mr-2" />{" "}
          {/* Add some margin to the right of the icon */}
          GitHub
        </button>
      </div>
      <div className="flex items-center justify-center mt-5">
        <p className="mx-3 text-sm text-gray-600 uppercase">or</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          if (type === "login") {
            signIn("credentials", {
              redirect: false,
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
              // @ts-ignore
            }).then(({ error }) => {
              if (error) {
                setLoading(false);
                toast.error(error);
              } else {
                router.refresh();
                router.push("/home");
              }
            });
          } else {
            fetch("/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
              }),
            }).then(async (res) => {
              setLoading(false);
              if (res.status === 200) {
                toast.success(
                  "Account created! Redirecting to sign in page..."
                );
                setTimeout(() => {
                  router.push("/sign-in");
                }, 2000);
              } else {
                const { error } = await res.json();
                toast.error(error);
              }
            });
          }
        }}
        className="flex flex-col px-4 py-4 space-y-4 bg-gray-50 sm:px-16"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-xs text-gray-600 uppercase"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="panic@thedis.co"
            autoComplete="email"
            required
            className="block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        {type !== "login" ? (
          <div>
            <label
              htmlFor="phone"
              className="block text-xs text-gray-600 uppercase"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="+1 (555) 555-5555"
              className="block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
        ) : null}
        <div>
          <label
            htmlFor="password"
            className="block text-xs text-gray-600 uppercase"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <button
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border-black bg-cocoa_brown-800 text-white hover:bg-cocoa_brown-50 hover:text-cocoa_brown-800"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? (
            <LoadingDots color="#808080" />
          ) : (
            <p>{type === "login" ? "Sign In" : "Sign Up"}</p>
          )}
        </button>
        {type === "login" ? (
          <p className="text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-semibold text-gray-800">
              Sign up
            </Link>{" "}
            for free.
          </p>
        ) : (
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-semibold text-gray-800">
              Sign in
            </Link>{" "}
            instead.
          </p>
        )}
      </form>
    </div>
  );
}
