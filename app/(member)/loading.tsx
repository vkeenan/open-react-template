import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  return (
    <div>
      <Skeleton count={5} />
    </div>
  );
}
