export default function PostDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <section>post details</section>
      <section>{children}</section>
    </section>
  );
}
