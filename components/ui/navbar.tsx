"use client";
import { useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { FaChevronDown, FaRegUser, FaSearch } from "react-icons/fa";
import { navItems } from "@/data/nav";
import LoginButton from "@/components/ui/login-button";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="sticky top-0 z-50 bg-cocoa_brown-600">
      <MenuBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </div>
  );
}

function MobileMenu({ toggleMenu }: any) {
  const { data: session } = useSession();
  const userId = session?.user?.email;

  const filteredNavItems = useMemo(() => {
    return navItems.filter(
      (item) =>
        (!item.guestonly || (item.guestonly && !userId)) &&
        (!item.protected || (item.protected && userId))
    );
  }, [userId]);

  return (
    <div
      className="flex flex-col p-4 space-y-3 text-sm text-slate-200 hover:text-slate-800 md:hidden "
      onClick={toggleMenu}
    >
      {filteredNavItems.map((item) => (
        <div key={item.id}>
          <button
            key={item.id}
            className="font-semibold text-left no-underline"
          >
            <Link href={item.href}>{item.name}</Link>
          </button>
          {item.sub && (
            <div key={item.id + 100} className="flex flex-col px-1 py-1 ">
              {item.sub.map((sub) => {
                return (
                  <a key={sub.id + 1000} href={sub.href}>
                    {sub.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MenuBar({ menuOpen, toggleMenu }: any) {
  const { data: session, status } = useSession();
  const isLoaded = status;
  const userId = session?.user?.email;

  const navLinks = useMemo(() => {
    return navItems
      .filter(
        (item) =>
          (!item.guestonly || (item.guestonly && !userId)) &&
          (!item.protected || (item.protected && isLoaded && userId))
      )
      .map((item) => (
        <Menu
          key={item.id}
          as="div"
          className="relative inline-block p-1 m-1 text-left"
        >
          <Menu.Button
            key={item.id}
            className="no-underline text-cocoa_brown-50"
          >
            <div className="flex hover:bg-slate-600">
              {item.sub && (
                <>
                  <span>{item.name}</span>
                  <FaChevronDown
                    className="w-3 h-3 mt-3 ml-1 -mr-1 text-cocoa_brown-50 hover:text-slate-600 md:mt-1 lg:mt-2 xl:mt-3"
                    aria-hidden="true"
                  />
                </>
              )}
              {!item.sub && <Link href={item.href}>{item.name}</Link>}
            </div>
          </Menu.Button>
          {item.sub && (
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 flex flex-col w-56 mt-2 space-y-3 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg bg-cocoa_brown-600 bg-opacity-80 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {item.sub.map((sub) => {
                    return (
                      <Menu.Item key={sub.id}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-cocoa_brown-50 hover:bg-slate-900"
                        >
                          {sub.name}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          )}
        </Menu>
      ));
  }, [isLoaded, userId]);

  return (
    <div className="justify-around xl:container xl:mx-auto xl:flex xl:max-w-7xl ">
      <div className="flex items-center justify-between p-2 font-display sm:text-xs md:text-sm xl:container xl:text-xl">
        <div className="items-left" onClick={toggleMenu}>
          <span className="no-underline text-cocoa_brown-100 hover:bg-slate-600 sm:text-sm md:text-base xl:text-2xl">
            <Link href="/">Work Different With AI</Link>
          </span>
        </div>
        <nav className="hidden space-x-6 md:block">{navLinks}</nav>
        <div className="flex items-center">
          {/* <div className="mr-2">
            <button
              className="flex text-sm no-underline text-cocoa_brown-200 hover:text-cocoa_brown-800"
              type="button"
            >
              <span className="sr-only">Search</span>
              <FaSearch size={22} />
            </button>
          </div> */}
          <div className="mr-2">
            <LoginButton />
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="text-white rounded focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 md:hidden"
          >
            <MenuAlt4Svg menuOpen={menuOpen} />
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuAlt4Svg({ menuOpen }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ease h-8 w-8 transition duration-100 ${
        menuOpen ? "rotate-90 transform" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
