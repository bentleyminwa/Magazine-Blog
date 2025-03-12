import { data } from "@/config/data";
import Image from "next/image";

import { CalendarIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HeroSection() {
  const heroItems = data.heroItems.slice(1, 3);
  const heroVideo = data.heroItems[0];

  const dateStr = heroVideo.published_at;
  const formattedDate = new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="grid grid-cols-3 gap-3 relative w-full h-full">
      <section className="col-span-2 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30"></div>
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={heroVideo.image} type="video/mp4" />
        </video>
        <div className="absolute bottom-10 left-5 text-white space-y-3">
          <h3 className="text-xs text-red-500 font-semibold uppercase">
            {heroVideo.category}
          </h3>
          <Link
            href={`/posts/${heroVideo.id}`}
            className="text-2xl font-semibold tracking-wider hover:text-red-800"
          >
            {heroVideo.title}
          </Link>
          <div className="flex gap-4 text-xs">
            <h5 className="flex gap-1 items-center">
              <span>
                <UserCircleIcon width={18} />
              </span>
              <span>{heroVideo.author}</span>
            </h5>
            <h5 className="flex gap-1 items-center">
              <span>
                <CalendarIcon width={18} />
              </span>
              <span>{formattedDate}</span>
            </h5>
          </div>
        </div>
      </section>

      <section className="col-span-1 flex flex-col gap-3">
        {heroItems.map((item) => (
          <article
            key={item.id}
            className="border w-full h-[250px] relative text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
            <div className="-z-20">
              <Image
                src={item.image}
                alt=""
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 left-5 text-white space-y-3">
              <h3 className="text-xs text-red-500 font-semibold uppercase">
                {item.category}
              </h3>
              <Link
                href={`/posts/${item.id}`}
                className="text-xl font-semibold hover:text-red-800"
              >
                {item.title}
              </Link>
              <div className="flex gap-4 text-xs">
                <h5 className="flex gap-1 items-center">
                  <span>
                    <UserCircleIcon width={20} />
                  </span>
                  <span>{item.author}</span>
                </h5>
                <h5 className="flex gap-1 items-center">
                  <span>
                    <CalendarIcon width={20} />
                  </span>
                  <span>{formattedDate}</span>
                </h5>
              </div>
            </div>
          </article>
        ))}
      </section>
    </header>
  );
}
