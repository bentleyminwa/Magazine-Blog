import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full h-[50vh] md:h-[40vh]">
      <Image
        src="/images/about.jpg"
        alt="lady reading newspaper"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
      <div className="absolute bottom-3 left-3 md:bottom-10 md:left-10 space-y-5">
        <h1 className="text-xl md:text-3xl text-white font-bold">
          About <span className="text-red-600">Magazine</span>
        </h1>
        <p className="text-white max-w-xl md:max-w-2xl md:text-lg">
          Bringing you the latest news, trends and stories that matter. Welcome
          to Magazine where info meets insight.
        </p>
      </div>
    </section>
  );
}
