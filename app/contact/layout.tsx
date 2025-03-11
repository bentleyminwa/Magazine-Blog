export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <section>contact us</section>
      <section>{children}</section>
    </section>
  );
}
