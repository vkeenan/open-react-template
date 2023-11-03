import Image from "next/image";
import Link from "next/link";
import { ProductClass } from "@/types/product";

export function ProductCard(product: ProductClass) {
  return (
    <div className="w-full px-1 my-1 md:w-1/2 lg:my-2 lg:w-1/3 lg:px-2">
      <article className="max-w-sm px-6 py-4 overflow-hidden bg-white rounded-none shadow-md">
        {product.ImageURL && (
          <>
            <div
              style={{
                width: "100%",
                height: "125px",
                position: "relative",
              }}
            >
              <Link href={`/map/product/${product.Slug}`}>
                <Image
                  fill
                  alt={product.ImageAltText}
                  src={product.ImageURL}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />{" "}
              </Link>
            </div>
            <hr className="mt-4 mb-3 border-3 border-brand-300" />
          </>
        )}
        <header className="flex flex-row">
          <div>
            <div>
              <Link href={`/map/company/${product.AccountSlug}`}>
                {product.AccountName}
              </Link>
            </div>
            <div className="font-display">
              <Link href={`/map/product/${product.Slug}`}>{product.Name}</Link>
            </div>
          </div>
        </header>
        <p className="text-sm text-outer_space-700">{product.Tagline}</p>
        <hr className="mt-4 mb-3 border-3 border-brand-300" />
        <footer className="items-center justify-between p-2 leading-tight md:p-4"></footer>
      </article>
    </div>
  );
}
