import { getAllCourses } from "@/services/course/get-course";
import Image from "next/image";
import WorkshopImage from "@/public/images/workshop.png";
import AILandscapeImage from "@/public/images/ai-landscape.png";
import Link from "next/link";

export default async function WorkshopPage() {
  const courses = await getAllCourses();
  if (!courses) {
    return null;
  }
  return (
    <div className="container p-4 mx-auto bg-azure_radiance-100">
      <h1 className="mb-4 text-3xl text-center font-display">
        Work Different With AI Workshops
      </h1>
      <div className="flex flex-col items-center mb-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2">
          <Image
            className="mb-4 md:mb-0"
            src={WorkshopImage}
            alt="Workshop Illustration"
            height={225}
          />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <p className="mb-2 indent-2">
            Welcome to our exclusive Workshops page, designed to demystify the
            AI journey for diverse audiences. Our workshops cater to C-suite
            executives, Salesforce ISVs, and Global System Integrators (GSIs),
            offering pragmatic strategies and actionable roadmaps to ethically
            harness AI.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mb-8 md:flex-row-reverse">
        <div className="w-full px-4 md:w-1/2">
          <Image
            className="mb-4 md:mb-0"
            src={AILandscapeImage}
            alt="AI Landscape Illustration"
            height={225}
          />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <p className="mb-2 indent-2">
            Our workshops provide a clear framework for AI integration. They
            empower executives to navigate AI hype, offer Salesforce ISVs
            insights into the AI landscape, and equip GSIs with innovative tools
            to guide their clients on the AI journey. Explore our workshops and
            learn how to Work Different With AI.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-4 space-y-4 text-outer_space-100 bg-azure_radiance-600"
          >
            <div className="flex flex-col items-center mx-auto sm:flex-col md:flex-row md:space-x-4">
              {course.Logo && course.Name && (
                <Image
                  src={course.Logo}
                  width={175}
                  height={175}
                  alt={course.Name}
                  className="mb-2"
                />
              )}
              <div>
                <h2 className="text-xl font-display">{course.Title}</h2>

                <hr className="w-full my-2 border-t-2 border-outer_space-175" />
                <p className="text-base">{course.Description}</p>
                <Link
                  href={`/workshops/${course.Slug}`}
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
  );
}
