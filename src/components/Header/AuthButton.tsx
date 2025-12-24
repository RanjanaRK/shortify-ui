import Link from "next/link";

const AuthButton = () => {
  return (
    <>
      <Link href="/auth/login" className="hover:text-white hover:underline">
        Login
      </Link>
      <Link
        href="/auth/signup"
        className="rounded-lg bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20"
      >
        Sign Up
      </Link>
    </>
  );
};

export default AuthButton;
