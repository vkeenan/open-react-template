"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

export default function LoginButton() {
  const { data: session } = useSession();
  const userImage = session?.user?.image;
  let userIcon;
  if (!userImage) {
    {
      session?.user?.email && (userIcon = createUserIcon(session?.user?.email));
    }
  }

  return (
    <div className="mr-2">
      <div className="flex items-center justify-between">
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex text-sm no-underline text-azure_radiance-200 hover:text-azure_radiance-800">
              <span className="sr-only">Open user menu</span>
              {session ? (
                userImage ? (
                  <Image
                    src={userImage}
                    width={36}
                    height={36}
                    alt="User Image"
                    className="rounded-full w-9 h-9"
                  />
                ) : (
                  createUserIcon(session.user?.email || "")
                )
              ) : (
                <FaRegUser size={33} />
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
                  <div className="block w-full px-4 py-2 text-sm text-left text-outer_space-700">
                    Signed in as {session.user?.email}
                  </div>
                  <Menu.Item
                    as="button"
                    onClick={() => signOut()}
                    className="block w-full px-4 py-2 text-sm text-left text-outer_space-700 bg-outer_space-100 hover:text-outer_space-100 hover:bg-outer_space-700"
                  >
                    Sign out
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item
                    as="button"
                    onClick={() => signIn()}
                    className="block w-full px-4 py-2 text-sm text-left text-outer_space-700 bg-outer_space-100 hover:text-outer_space-100 hover:bg-outer_space-700"
                  >
                    Sign In
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    href="/sign-up"
                    className="block w-full px-4 py-2 text-sm text-left text-outer_space-700 bg-outer_space-100 hover:text-outer_space-100 hover:bg-outer_space-700"
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

function createUserIcon(email: string, color: string = "#888888"): JSX.Element {
  const firstLetter = email.charAt(0).toUpperCase();

  return (
    <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg">
      {" "}
      {/* size increased from 24 to 36 */}
      <circle cx="18" cy="18" r="17" fill={color} />{" "}
      {/* coordinates and radius changed to fit the new size */}
      <text
        x="18"
        y="27" // adjusted y position for better alignment
        fontFamily="Oswald"
        fontSize="24" // font size increased from 16 to 24
        textAnchor="middle"
        fill="#FFFFFF"
      >
        {firstLetter}
      </text>
    </svg>
  );
}
