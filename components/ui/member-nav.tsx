import Link from "next/link";
export function MemberNav() {
  return (
    <>
      <Link href="/home">
        <h1 className="py-3 mb-4 text-xl lg:text-2xl font-display hover:text-outer_space-200 hover:bg-outer_space-800">
          Member Dashboard
        </h1>
      </Link>
      <nav>
        <ul className="flex space-x-2 lg:text-xl font-display sm:block sm:space-y-2 sm:space-x-0">
          <li>
            <Link
              href="/home/favorites"
              className="flex items-center px-4 pt-2 pb-4 -my-2 text-outer_space-700 bg-outer_space-300 hover:text-outer_space-200 hover:bg-outer_space-800"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              href="/home/content"
              className="flex items-center px-4 pt-2 pb-4 -my-2 text-outer_space-700 bg-outer_space-300 hover:text-outer_space-200 hover:bg-outer_space-800"
            >
              My Content
            </Link>
          </li>
          <li>
            <Link
              href="/home/help"
              className="flex items-center px-4 pt-2 pb-4 -my-2 text-outer_space-700 bg-outer_space-300 hover:text-outer_space-200 hover:bg-outer_space-800"
            >
              Help and Support
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
