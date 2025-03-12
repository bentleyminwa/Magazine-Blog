import { data } from "@/config/data";
import Image from "next/image";

export default function EditorsPosts() {
  const { editorsPosts } = data;

  return (
    <section className="space-y-5">
      {editorsPosts.map((post) => {
        return (
          <article key={post.id} className="flex flex-col gap-5">
            <div className="relative col-span-1 w-full h-[200px]">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover -z-10"
              />
              <h5 className="absolute bottom-5 left-5 uppercase text-red-500 text-xs font-semibold">
                {post.category}
              </h5>
            </div>

            <h2 className="font-semibold tracking-wide text-gray-700">
              {post.title}
            </h2>

            <hr />
          </article>
        );
      })}
    </section>
  );
}
