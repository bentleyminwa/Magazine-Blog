export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <section>header</section>
      <section>{children}</section>
    </section>
  );
}
