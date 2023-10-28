import { ProductClass } from "@/types/product";
import Link from "next/link";

interface ProductTableProps {
  products: ProductClass[];
}

export function CompanyProductTable({ products }: ProductTableProps) {
  return (
    <div className="w-full">
      <div className="items-center justify-between hidden px-6 py-3 text-white bg-brand-600 md:flex">
        <div className="w-1/2">Name</div>
        <div className="w-1/2">Categories</div>
      </div>
      {products.map((product, idx) => (
        <div
          key={idx}
          className={`bg-white text-gray-700 ${
            idx % 2 === 1 ? "bg-gray-100" : ""
          }`}
        >
          <hr className="border-collapse border-brand-600" />
          <div className="block px-6 py-4 md:hidden">
            <Link href={`/map/product/${product.Slug}`}>
              <span className="font-display text-brand-600">
                {product.Name}
              </span>
            </Link>
            {product.Tagline && (
              <div className="text-sm italic">{product.Tagline}</div>
            )}
          </div>
          <div className="block px-6 py-4 md:hidden">
            <span className="font-display text-brand-600">Categories</span>
            <ul>
              {product.Categories.map((category, catIdx) => (
                <li className="text-sm" key={catIdx}>
                  {category.Name}
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center justify-between hidden px-6 py-4 md:flex">
            <div className="w-1/2">
              <Link href={`/map/product/${product.Slug}`}>{product.Name}</Link>
              <div className="text-sm italic">{product.Tagline}</div>
            </div>
            <div className="w-1/2">
              <ul>
                {product.Categories.map((category, catIdx) => (
                  <li key={catIdx}>
                    <Link
                      className="text-sm"
                      href={`/map/category/${category.Slug}`}
                    >
                      {category.Name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
