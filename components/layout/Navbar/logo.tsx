import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <Image src="/images/logo.png" alt="m-logo" width={40} height={40} />
      <h1 className="text-2xl text-red-600 font-extrabold ">Magazine</h1>
    </Link>
  );
}
