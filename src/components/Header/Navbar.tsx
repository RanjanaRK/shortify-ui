import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full  bg-linear-to-r from-sky-700 to-sky-950 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-white px-8 py-3">
          <Link href="/" className="text-xl font-bold tracking-tight ">
            MyLogo
          </Link>

          <div className="flex  font-bold items-center gap-4">
            <Link href="/login" className="   hover:text-white hover:underline">
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm   backdrop-blur hover:bg-white/20"
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
