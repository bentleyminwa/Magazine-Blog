import { ClockIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="grid grid-cols-2 h-[70vh] bg-white my-10">
      <div className="relative w-full">
        <Image
          src="/images/mission.jpg"
          alt="lady taking notes"
          fill
          className="object-cover"
        />
      </div>
      <section className="p-10 space-y-8">
        <h1 className="text-3xl capitalize font-semibold tracking-wider">
          what we aim to achieve
        </h1>
        <p className="text-gray-500 tracking-wide leading-7">
          To inform, inspire, and empower our audience with high-quality,
          well-researched, and engaging content on science, technology, health,
          and business. We aim to bridge the gap between knowledge and
          application, making complex topics accessible to everyone.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-red-700">
              <ClockIcon width={30} />
            </h4>
            <h3 className="font-semibold">Real-Time News</h3>
            <p className="text-gray-500 tracking-wide leading-7">
              Stay updated with the latest trends, breakthroughs, and market
              shifts as they happen.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-red-800">
              <NewspaperIcon width={30} />
            </h4>
            <h3 className="font-semibold">In-Depth Articles</h3>
            <p className="text-gray-500 tracking-wide leading-7">
              Well-researched content on science, tech, health, and business,
              made easy to understand.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
