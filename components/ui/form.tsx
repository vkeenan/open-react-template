"use client";
import { getSession } from "next-auth/react";
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
  // linkedin: {
  //   id: "linkedin",
  //   name: "LinkedIn",
  //   type: "oauth",
  //   signinUrl: "http://localhost:3000/api/auth/signin/linkedin",
  //   callbackUrl: "http://localhost:3000/api/auth/callback/linkedin",
  // },
  credentials: {
    id: "credentials",
    name: "Credentials",
    type: "credentials",
    signinUrl: "http://localhost:3000/api/auth/signin/credentials",
    callbackUrl: "http://localhost:3000/api/auth/callback/credentials",
  },
};
interface FormParams {
  type: "login" | "register"; // 'type' is required
  email?: string; // 'email' is optional
  phone?: string; // 'phone' is optional
}

export default function Form({ type, email, phone }: FormParams) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOAuthClick = (providerId: string) => {
    signIn(providerId, {
      redirect: true,
      callbackUrl: "http://localhost:3000/home",
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;

    if (type === "login") {
      await handleSignIn(email, password);
    } else {
      await handleRegister(email, password, phone);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setLoading(false);
      toast.error(result.error);
    } else {
      router.refresh();
      router.push("/home");
    }
  };

  const handleRegister = async (
    email: string,
    password: string,
    phone: string
  ) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        phone,
      }),
    });

    setLoading(false);

    if (res.status === 200) {
      toast.success("Account created! Redirecting to sign in page...");
      setTimeout(() => {
        router.push("/api/auth/signin");
      }, 2000);
    } else {
      const { error } = await res.json();
      toast.error(error);
    }
  };

  // Extracting the OAuth buttons to a separate function for better readability
  const renderOAuthButtons = () => (
    <div className="flex flex-row items-center justify-center mt-5">
      <button
        className="flex items-center px-4 py-2 mx-1 text-white rounded bg-cocoa_brown-800"
        onClick={() => handleOAuthClick("google")}
      >
        <FaGoogle className="mr-2" />
        Google
      </button>
      <button
        className="flex items-center px-4 py-2 mx-1 text-white rounded bg-cocoa_brown-800"
        onClick={() => handleOAuthClick("github")}
      >
        <FaGithub className="mr-2" />
        GitHub
      </button>
    </div>
  );

  return (
    <div className="flex flex-col bg-gray-50">
      {renderOAuthButtons()}
      <div className="flex items-center justify-center mt-5">
        <p className="mx-3 text-sm text-gray-600 uppercase">or</p>
      </div>
      <form
        onSubmit={handleFormSubmit}
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
              type="tel"
              autoComplete="tel"
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
          <>
            <p className="text-sm text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-semibold text-gray-800">
                Sign up
              </Link>{" "}
              for free.
            </p>
            <p className="text-sm text-center text-gray-600">
              <Link href="/" className="font-semibold text-gray-800">
                {" "}
                Back to home
              </Link>{" "}
            </p>
          </>
        ) : (
          <>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-semibold text-gray-800">
                Sign in
              </Link>{" "}
              instead.
            </p>
            <p className="text-sm text-center text-gray-600">
              <Link href="/" className="font-semibold text-gray-800">
                {" "}
                Back to home
              </Link>{" "}
            </p>
          </>
        )}
      </form>
    </div>
  );
}
