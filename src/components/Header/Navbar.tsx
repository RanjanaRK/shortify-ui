import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full border border-sky-900 bg-linear-to-r from-sky-600 to-sky-950 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white md:px-8 lg:px-12">
          <Link href="/" className="text-xl font-bold tracking-tight">
            ShortiFy
          </Link>

          <div className="flex items-center gap-4 font-bold">
            <Link
              href="/auth/login"
              className="hover:text-white hover:underline"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
