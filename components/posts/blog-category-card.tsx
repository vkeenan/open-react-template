import Link from 'next/link';

export function BlogCategoryCard({ slug, name, description }: any) {
  return (
    <div className='w-full px-1 my-1 md:w-1/2 lg:my-2 lg:w-1/3 lg:px-2'>
      <article className='max-w-sm px-6 py-4 overflow-hidden bg-white rounded-none shadow-md'>
        <header className='mb-2 text-xl font-bold'>
          <Link href={`/posts/category/${slug}`}>{name}</Link>
        </header>
        <footer className='items-center justify-between p-2 leading-tight md:p-4'>
          <p className='mb-2 text-base text-gray-700'>{description}</p>
        </footer>
      </article>
    </div>
  );
}
