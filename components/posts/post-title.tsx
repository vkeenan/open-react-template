export function PostTitle({ children }: any) {
  return (
    <h1
      className='mt-2 mb-6 text-2xl text-center font-display md:text-3xl'
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
