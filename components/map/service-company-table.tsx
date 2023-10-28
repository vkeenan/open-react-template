import { ServiceClass } from '@/types';
import Link from 'next/link';

interface ServiceTableProps {
  services: ServiceClass[];
}

export function ServiceCompanyTable({ services }: ServiceTableProps) {
  return (
    <div className='w-full'>
      <div className='items-center justify-between hidden px-6 py-3 text-white bg-brand-600 md:flex'>
        <div className='w-2/3'>Service Name</div>
        <div className='w-1/3 px-2'>Provider</div>
      </div>
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`bg-white text-gray-700 ${
            idx % 2 === 1 ? 'bg-gray-100' : ''
          }`}
        >
          <hr className='border-collapse border-brand-600' />
          <div className='block px-6 py-4 md:hidden'>
            <Link href={`/map/service/${service.Slug}`}>
              <span className='font-display text-brand-600'>
                {service.Name}
              </span>
            </Link>
            {service.Tagline && (
              <div className='text-sm italic'>{service.Tagline}</div>
            )}
          </div>
          <div className='block px-6 py-4 md:hidden'>
            <span className='font-display text-brand-600'>Publisher</span>
            <Link href={`/map/company/${service.AccountSlug}`}>
              <p>{service.AccountName} </p>
            </Link>
            <ul>
              {service.Categories.map((category, catIdx) => (
                <li className='text-sm' key={catIdx}>
                  {category.Name}
                </li>
              ))}
            </ul>
          </div>
          <div className='items-center justify-between hidden px-6 py-4 md:flex'>
            <div className='w-2/3'>
              <Link href={`/map/service/${service.Slug}`}>{service.Name}</Link>
              <div className='text-sm italic'>{service.Tagline}</div>
            </div>
            <div className='w-1/3 px-2'>
              <Link href={`/map/company/${service.AccountSlug}`}>
                <p>{service.AccountName} </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
