import Link from "next/link";
import { getAllBlogCategories } from "@/services/post/get-blog-category";

export async function CategoryWidget() {
  const { categories = [] } = await getAllBlogCategories();
  return (
    <>
      <div className="flex flex-col w-full p-6 mb-3 shadow bg-cocoa_brown-50">
        <span className="pb-5 text-xl font-display">Post Categories</span>
        <ul className="flex flex-col">
          {categories.map((item: any, index: number) => (
            <li key={index} className="flex items-center justify-between py-2">
              <Link
                href={"/posts/category/" + item.slug + "/"}
                className="font-display"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
