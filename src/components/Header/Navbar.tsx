import Link from "next/link";
import Header from "./Header";

const Navbar = () => {
  return (
    <>
      <nav className="w-full border border-sky-900 bg-linear-to-r from-sky-600 to-sky-950 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white md:px-8 lg:px-12">
          <Link href="/" className="text-xl font-bold tracking-tight">
            ShortiFy
          </Link>

          <div className="flex items-center gap-4 font-bold">
            <Header />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
