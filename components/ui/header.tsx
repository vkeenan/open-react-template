import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import WorkDiffLogo from "@/public/images/workdiff-logo.png";

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={WorkDiffLogo} alt="WorkDiff Logo" width={50} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              <li>
                <Link
                  href="/signin"
                  className="flex items-center px-4 py-3 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="ml-3 text-white bg-purple-600 btn-sm hover:bg-purple-700"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
