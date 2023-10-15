"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import {
  FaRegUser,
  FaRegUserCircle,
  FaTools,
  FaLightbulb,
  FaLock,
  FaBalanceScale,
  FaHandsHelping,
  FaExclamationTriangle,
  FaChartLine,
  FaIndustry,
} from "react-icons/fa";

export default function LoginButton() {
  const { data: session } = useSession();

  const userImage = session?.user?.image;

  return (
    <div className="mr-2">
      <div className="flex items-center justify-between">
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex text-sm no-underline text-cocoa_brown-200 hover:text-cocoa_brown-800">
              <span className="sr-only">Open user menu</span>
              {session ? (
                <Image
                  src={userImage || "/images/blank-100x100.png"}
                  width={24}
                  height={24}
                  alt="User Image"
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <FaRegUser size={22} />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {session ? (
                <>
                  <div className="block w-full px-4 py-2 text-sm text-left text-gray-700">
                    Signed in as {session.user?.email}
                  </div>
                  <Menu.Item
                    as="button"
                    onClick={() => signOut()}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 bg-gray-100 hover:text-gray-100 hover:bg-gray-700"
                  >
                    Sign out
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item
                    as="button"
                    onClick={() => signIn()}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 bg-gray-100 hover:text-gray-100 hover:bg-gray-700"
                  >
                    Sign In
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    href="/sign-up"
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 bg-gray-100 hover:text-gray-100 hover:bg-gray-700"
                  >
                    Sign Up
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
