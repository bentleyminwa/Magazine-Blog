import EditorsPosts from "@/components/posts/editors-posts";
import LatestPosts from "@/components/posts/latest-posts";
import PopularPosts from "@/components/posts/popular-posts";

export default function PostsSection() {
  return (
    <section className="mt-10 grid grid-cols-3 gap-5">
      <section className="col-span-2 space-y-5">
        <div className="p-5 bg-white">
          <h2 className="mb-3 py-2 px-4 bg-gray-900 text-white font-semibold tracking-wider">
            Latest News
          </h2>
          <LatestPosts />
        </div>
        <div className="p-5 bg-white">
          <h2 className="mb-3 py-2 px-4 bg-gray-900 text-white font-semibold tracking-wider">
            Popular News
          </h2>
          <PopularPosts />
        </div>
      </section>
      <section className="col-span-1 p-5 bg-white h-fit">
        <h2 className="mb-3 py-2 px-4 bg-gray-900 text-white font-semibold tracking-wider">
          Editors Pick
        </h2>
        <EditorsPosts />
      </section>
    </section>
  );
}
