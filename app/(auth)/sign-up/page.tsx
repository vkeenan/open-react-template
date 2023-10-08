import Image from "next/image";
import Form from "@/components/ui/form";
import Link from "next/link";
import Logo from "@/public/images/workdiff-logo-black.png";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-cocoa_brown-300">
      <div className="z-10 w-full max-w-md overflow-hidden border border-gray-100 shadow-xl rounded-2xl">
        <div className="flex flex-col items-center justify-center px-4 py-6 pt-8 space-y-3 text-center bg-white border-b border-gray-200 sm:px-16">
          <Link href="/">
            <Image
              src={Logo}
              priority
              alt="Logo"
              className="w-10 h-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h2 className="text-2xl font-display">Work Different With AI</h2>
          <h3 className="text-xl font-semibold">Sign Up</h3>
        </div>
        <Form type="register" />
      </div>
    </div>
  );
}
