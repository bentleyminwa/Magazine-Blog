import EditorsPosts from "@/components/posts/editors-posts";
import { data } from "@/config/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PostDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetailsPage({
  params,
}: PostDetailsPageProps) {
  const { id } = await params;

  const { heroItems, latestPosts, popularPosts, editorsPosts } = data;

  const allPosts = [
    ...heroItems,
    ...latestPosts,
    ...popularPosts,
    ...editorsPosts,
  ];

  const post = allPosts.find((post) => post.id === id);

  if (!post) return notFound();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <section className="md:col-span-2 bg-white p-5 space-y-4 h-fit mx-5 md:mx-0">
        <h3 className="text-sm text-red-800 font-bold uppercase">
          {post.category}
        </h3>
        <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-500 text-sm">
          By {post.author} | {new Date(post.published_at).toDateString()}
        </p>
        <div className="relative w-full h-[50vh]">
          {post.image.endsWith(".mp4") ? (
            <video className="w-full h-full object-cover">
              <source src={post.image} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover"
              fill
            />
          )}
        </div>
        <p className="mt-4 text-gray-700">{post.description}</p>
      </section>
      <section className="p-5 bg-white mx-5 md:mx-0">
        <h2 className="mb-3 py-2 px-4 bg-gray-900 text-white font-semibold tracking-wider">
          Editors Pick
        </h2>
        <EditorsPosts />
      </section>
    </section>
  );
}
