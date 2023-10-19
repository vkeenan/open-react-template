import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorkDiffLogo from "@/public/images/workdiff-logo.png";
import WorkDiffLogoHoriz from "@/public/images/workdiff-logo-horiz.png";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16 bg-cocoa_brown-800">
        <div className="max-w-6xl px-4 mx-auto sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid gap-8 mb-8 md:grid-cols-4 lg:gap-20 md:mb-12">
            {/* Logo block */}
            <div className="text-center ali md:text-left">
              <Link href="/" className="inline-block" aria-label="Cruip">
                <Image
                  src={WorkDiffLogoHoriz}
                  alt="WorkDiff Logo"
                  width={300}
                  height={200}
                />
              </Link>
            </div>

            {/* Description block */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                Work Different With AI is a community of like-minded people who
                want to Work Different With AI!
              </p>
              <p className="mt-5 text-gray-400">
                Come join us as we explore together how to Work Different With
                AI.
              </p>
            </div>

            {/* 2nd block */}
            <div className="text-sm text-center md:text-left">
              <h6 className="mb-1 font-medium text-gray-200">Workshops</h6>
              <ul>
                <li className="mb-1">
                  <Link
                    href="/workshops/ceo-ai-workshop"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    For Corporate Leaders
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/workshops/isv-ai-workshop"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    For Independent Software Vendors
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/workshops/consultant-ai-workshop"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    For Enterprise Consultancies
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="text-sm text-center md:text-left">
              <h6 className="mb-1 font-medium text-gray-200">
                Conference Tracks
              </h6>
              <ul>
                <li className="mb-1">
                  <Link
                    href="/tracks/unlocking-value-with-peps"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Prompt Engineering Platforms
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/tracks/the-power-of-etps"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Executive Thinking Partners
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/tracks/ai-data-safety"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    AI Data Safety
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/tracks/ethical-ai"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Ethical AI
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/tracks/compassionate-ai"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Compassionate AI
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/tracks/ai-risk-management"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    AI Risk Management
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/tracks/scaling-ai"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Scaling AI
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/tracks/industry-specific-ai"
                    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    AI for Industry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center transition duration-150 ease-in-out bg-gray-800 rounded-full text-bourbon-600 hover:text-gray-100 hover:bg-bourbon-600"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex items-center justify-center transition duration-150 ease-in-out bg-gray-800 rounded-full text-bourbon-600 hover:text-gray-100 hover:bg-bourbon-600"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex items-center justify-center transition duration-150 ease-in-out bg-gray-800 rounded-full text-bourbon-600 hover:text-gray-100 hover:bg-bourbon-600"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex items-center justify-center transition duration-150 ease-in-out bg-gray-800 rounded-full text-bourbon-600 hover:text-gray-100 hover:bg-bourbon-600"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex items-center justify-center transition duration-150 ease-in-out bg-gray-800 rounded-full text-bourbon-600 hover:text-gray-100 hover:bg-bourbon-600"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="mr-4 text-sm text-gray-400">
              &copy; 2023 by Vernon Keenan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
