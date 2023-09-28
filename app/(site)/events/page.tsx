import { getAllEvents } from "@/services/event/get-event";
import { EventClass } from "@/types/event";
import Link from "next/link";

export default async function EventsPage() {
  const { events } = await getAllEvents();

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="px-4 py-8 bg-white shadow-lg rounded-2xl sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">
            Work Different With AI Event Calendar
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {events.map((event: EventClass, index: number) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-semibold">{event.Title}</h2>
              <p className="text-sm text-gray-600">
                <strong>Start Date:</strong> {event.StartDate}
              </p>
              <p className="text-sm text-gray-600">
                <strong>End Date:</strong> {event.EndDate}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {event.Location}
              </p>
              <Link href={`/events/${event.Slug}`}>
                <button className="block w-full px-4 py-1 mt-4 text-center text-white bg-blue-500 rounded">
                  More Information
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
