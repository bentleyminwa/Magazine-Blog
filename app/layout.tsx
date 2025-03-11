import { varela_round } from "@/config/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magazine",
  description: "Blog website for news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={varela_round.className}>{children}</body>
    </html>
  );
}
