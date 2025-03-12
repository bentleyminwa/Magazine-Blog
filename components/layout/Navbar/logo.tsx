import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <div className="relative w-[40px] h-[40px]">
        <Image
          src="/images/logo.png"
          alt="m-logo"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="hidden md:flex text-2xl text-red-600 font-extrabold ">
        Magazine
      </h1>
    </Link>
  );
}
