import { format, parseISO } from "date-fns";
import Link from "next/link";

export function PostCardSm({ title, date, slug, categories }: any) {
  const dateString = format(parseISO(date), "LLLL	d, yyyy");

  return (
    <div className="flex flex-row justify-start mb-4 content">
      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link
            href={"/posts/category/" + categories[0].slug}
            className="text-azure_radiance-500 hover:text-azure_radiance-900"
          >
            {categories[0].name}
          </Link>
        </div>
        <div className="title">
          <a
            className="no-underline font-display text-azure_radiance-900 hover:text-azure_radiance-400 hover:underline"
            href={"/posts/" + slug}
          >
            {title}
          </a>
          <p className="text-sm text-grey-darker">{dateString}</p>
        </div>
      </div>
    </div>
  );
}
