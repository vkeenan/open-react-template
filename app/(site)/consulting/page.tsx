import { getAllServices } from "@/services/map";
import Image from "next/image";
import Link from "next/link";
import Consultant1 from "@/public/images/consultant1.png";
import Consultant2 from "@/public/images/consultant2.png";

export default async function ConsultingPage() {
  const services = await getAllServices();
  if (!services) {
    return null;
  }
  return (
    <>
      <div className="px-4 py-8 mb-4 bg-azure_radiance-100">
        <h1 className="mb-4 text-4xl text-center font-display">
          Work Different With AI Consulting Service Providers
        </h1>
        <div className="flex flex-col items-center mb-8 md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <Image
              className="mb-4 md:mb-0"
              src={Consultant1}
              alt="Workshop Illustration"
              height={225}
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <p className="mb-2 indent-2">
              Welcome to our esteemed Consultants page, a curated gallery
              spotlighting preferred AI consultants adept at navigating the
              nuanced landscape of Artificial Intelligence (AI). At Work
              Different With AI, we believe in fostering a symbiotic ecosystem
              where enterprises seeking guidance and consultants offering
              expertise find a common ground. Our selected consultants are not
              merely proficient; they embody our ethos of compassionate AI,
              dedicated to empowering workers and aligning with corporate
              stakeholders for a well-rounded, ethical AI adoption.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 md:flex-row-reverse">
          <div className="w-full px-4 md:w-1/2">
            <Image
              className="mb-4 md:mb-0"
              src={Consultant2}
              alt="AI Landscape Illustration"
              height={225}
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <p className="mb-2 indent-2">
              Embarking on the AI journey can often feel like venturing into the
              unknown. The right guidance is imperative to traverse this path
              with informed confidence. Our consultants bring to the table a
              wealth of experience, pragmatic solutions, and a
              vendor-independent perspective that&apos;s priceless in
              today&apos;s dynamic AI landscape. Explore our consultant listings
              to find the expertise that resonates with your enterprise&apos;s
              unique needs and aspirations. Together, let&apos;s work different
              with AI, fostering a future where technology is a catalyst for
              positive change and corporate excellence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {services.services.map((service, index) => (
            <div
              key={index}
              className="p-4 space-y-4 text-outer_space-100 bg-azure_radiance-600"
            >
              <div className="flex flex-col items-center mx-auto sm:flex-col md:flex-row md:space-x-4">
                {service.Logo && service.Name && (
                  <Image
                    src={service.Logo}
                    width={175}
                    height={175}
                    alt={service.Name}
                    className="mb-2"
                  />
                )}
                <div>
                  <h2 className="text-xl font-display">{service.Name}</h2>

                  <hr className="w-full my-2 border-t-2 border-outer_space-175" />
                  <p className="text-base">{service.Description}</p>
                  <Link
                    href={`/consulting/${service.Slug}`}
                    className="inline-block px-4 py-2 mt-4 text-outer_space-800 hover:text-outer_space-100 bg-azure_radiance-200 hover:bg-azure_radiance-900"
                  >
                    Get More Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
