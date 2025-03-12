import { data } from "@/config/data";

export default function ContectFocusSection() {
  const { categoriesData } = data;

  return (
    <section className="grid grid-cols-4 gap-4 p-5 my-10">
      {categoriesData.map((category) => (
        <div
          key={category.name}
          className="space-y-3 flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-red-800">{category.icon}</h3>
          <h2 className="text-lg font-semibold">{category.name}</h2>
          <p className="text-sm text-gray-800">{category.description}</p>
        </div>
      ))}
    </section>
  );
}
