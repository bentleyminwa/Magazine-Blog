import Logo from "@/components/layout/Navbar/logo";

export default function Footer() {
  return (
    <div className="text-white bg-gray-900 flex justify-between items-center p-8">
      <div>
        <Logo />
      </div>
      <div>
        <small>Copyright &copy;2025. All Rights Reserved</small>
      </div>
    </div>
  );
}
