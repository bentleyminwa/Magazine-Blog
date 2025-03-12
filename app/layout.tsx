import Footer from "@/components/layout/Footer/footer";
import Navbar from "@/components/layout/Navbar/navbar";
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
      <body className={`${varela_round.className} antialiased bg-gray-200`}>
        <main className="border min-h-screen w-3/4 mx-auto">
          <Navbar />
          <section className="mb-10">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
