"use client";
import Form from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/workdiff-logo-black.png";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-cocoa_brown-300">
      <div className="z-10 w-full max-w-md mx-3 overflow-hidden border border-gray-100 shadow-xl rounded-2xl">
        <div className="flex flex-col items-center justify-center px-4 py-6 pt-8 space-y-3 text-center bg-white border-b border-gray-200 sm:px-16">
          <Link href="/">
            <Image
              src={Logo}
              priority
              alt="Logo"
              className="rounded-full"
              width={40}
              height={40}
            />
          </Link>
          <h2 className="text-2xl font-display">Work Different With AI</h2>
          <h3 className="text-xl font-semibold">Sign In</h3>
        </div>
        <Form type="login" />
      </div>
    </div>
  );
}
