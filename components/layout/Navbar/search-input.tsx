import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  return (
    <form className="flex flex-row-reverse items-center border border-gray-400 rounded-full py-1 px-2 md:px-4 focus-within:border-white">
      <label htmlFor="search">
        <MagnifyingGlassIcon width={25} className="text-gray-400" />
      </label>
      <input
        id="search"
        name="search"
        placeholder="search for news"
        className="text-sm text-gray-300 focus:outline-none focus:ring-0"
      />
    </form>
  );
}
