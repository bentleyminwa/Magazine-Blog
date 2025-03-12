"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

import { navItems } from "@/config/data";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-4 md:gap-8 uppercase text-xs font-semibold">
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <Link
            href={navItem.href}
            className={clsx(
              "tracking-wider pb-2",
              pathname === navItem.href
                ? "text-red-600 border-b-2 border-red-500"
                : ""
            )}
          >
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
