import { data } from "@/config/data";
import { CalendarIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function LatestPosts() {
  const { latestPosts } = data;

  return (
    <section className="space-y-5">
      {latestPosts.map((post) => {
        return (
          <article key={post.id} className="grid grid-cols-3 gap-5">
            <div className="relative col-span-1 w-full h-[200px]">
              <Image src={post.image} alt="" fill className="object-cover" />
              <h5 className="absolute bottom-5 left-5 uppercase text-red-500 text-xs font-semibold">
                {post.category}
              </h5>
            </div>
            <div className="col-span-2 space-y-3">
              <Link
                href={`/posts/${post.id}`}
                className="text-lg font-semibold tracking-wide text-gray-900"
              >
                {post.title}
              </Link>
              <div className="flex items-center gap-4">
                <h5 className="flex items-center gap-1">
                  <span>
                    <UserCircleIcon width={18} />
                  </span>
                  <span className="text-xs">{post.author}</span>
                </h5>
                <h5 className="flex items-center gap-1">
                  <span>
                    <CalendarIcon width={18} />
                  </span>
                  <span className="text-xs">{post.published_at}</span>
                </h5>
              </div>
              <p className="text-sm text-gray-800">{post.description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
