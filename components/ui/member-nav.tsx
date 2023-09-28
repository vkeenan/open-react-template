import Link from "next/link";
export function MemberNav() {
  return (
    <>
      <h1 className="mb-4 text-xl lg:text-2xl font-display">Member Services</h1>
      <nav>
        <ul className="flex space-x-2 lg:text-xl font-display sm:block sm:space-y-2 sm:space-x-0">
          <li>
            <Link
              href="/home"
              className="flex items-center px-4 pt-2 pb-4 -my-2 text-gray-700 bg-gray-300 hover:text-brand-500 hover:bg-gray-400"
            >
              Member Homepage
            </Link>
          </li>
          <li>
            <Link
              href="/home/favorites"
              className="flex items-center px-4 pt-2 pb-4 -my-2 text-gray-700 bg-gray-300 hover:text-brand-500 hover:bg-gray-400"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              href="/home/content"
              className="flex items-center px-4 pt-2 pb-4 -my-2 text-gray-700 bg-gray-300 hover:text-brand-500 hover:bg-gray-400"
            >
              My Content
            </Link>
          </li>
          <li>
            <Link
              href="/home/help"
              className="flex items-center px-4 pt-2 pb-4 -my-2 text-gray-700 bg-gray-300 hover:text-brand-500 hover:bg-gray-400"
            >
              Help and Support
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
