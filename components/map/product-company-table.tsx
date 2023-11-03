import { ProductClass } from "@/types/product";
import Link from "next/link";

interface ProductTableProps {
  products: ProductClass[];
}

export function ProductCompanyTable({ products }: ProductTableProps) {
  return (
    <div className="w-full">
      <div className="items-center justify-between hidden px-6 py-3 text-white bg-brand-600 md:flex">
        <div className="w-2/3">Product Name</div>
        <div className="w-1/3 px-2">Publisher</div>
      </div>
      {products.map((product, idx) => (
        <div
          key={idx}
          className={`bg-white text-outer_space-700 ${
            idx % 2 === 1 ? "bg-outer_space-100" : ""
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
            <span className="font-display text-brand-600">Publisher</span>
            <Link href={`/map/company/${product.AccountSlug}`}>
              <p>{product.AccountName} </p>
            </Link>
            <ul>
              {product.Categories.map((category, catIdx) => (
                <li className="text-sm" key={catIdx}>
                  {category.Name}
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center justify-between hidden px-6 py-4 md:flex">
            <div className="w-2/3">
              <Link href={`/map/product/${product.Slug}`}>{product.Name}</Link>
              <div className="text-sm italic">{product.Tagline}</div>
            </div>
            <div className="w-1/3 px-2">
              <Link href={`/map/company/${product.AccountSlug}`}>
                <p>{product.AccountName} </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
