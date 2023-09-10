import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <SignIn redirectUrl={"/"} signUpUrl="/signup" />;
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link href="/" className="text-blue-500 underline">
          Return to homepage
        </Link>
      </div>
    </>
  );
}
