import { navItems } from "@/config/data";
import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-8 uppercase text-xs font-semibold">
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <Link href={navItem.href} className="tracking-wider">
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
