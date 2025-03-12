import Logo from "./logo";
import NavLinks from "./nav-links";
import SearchInput from "./search-input";

export default function Navbar() {
  return (
    <nav className="sticky z-20 flex justify-between items-center py-4 px-7 text-white bg-gray-900">
      <section className="flex items-center gap-7">
        <Logo />
        <NavLinks />
      </section>
      <section>
        <SearchInput />
      </section>
    </nav>
  );
}
