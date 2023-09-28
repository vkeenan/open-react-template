import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <SignUp redirectUrl={"/home/account"} signInUrl={"/sign-in"} />
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link href="/" className="text-blue-500 underline">
          Return to homepage
        </Link>
      </div>
    </>
  );
}
