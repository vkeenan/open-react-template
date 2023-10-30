import Image from "next/image";
import Link from "next/link";
import { CategoryClass } from "@/types";

export function ServiceCategoryCard(category: CategoryClass) {
  return (
    <div className="w-full px-1 my-1 md:w-1/2 lg:my-2 lg:w-1/3 lg:px-2">
      <article className="max-w-sm px-6 py-4 overflow-hidden bg-white rounded-none shadow-md">
        <div
          style={{
            width: "100%",
            height: "100px",
            position: "relative",
          }}
        >
          {/* {category.Slug && (
            <Link href={`/map/category/${category.Slug}`}>
              <Image
                fill
                alt={category.Name}
                src={category.Logo}
                sizes='100vw, 100vh'
                className='object-scale-down'
              />{' '}
            </Link>
          )} */}
        </div>
        <header className="mb-2 text-xl font-bold">
          <Link href={`/map/category/${category.Slug}`}>{category.Name}</Link>
        </header>
        <footer className="items-center justify-between p-2 leading-tight md:p-4">
          <p className="mb-2 text-base text-outer_space-700">
            {category.Description}
          </p>
          <p className="text-sm text-outer_space-500">{category.Path}</p>
        </footer>
      </article>
    </div>
  );
}
