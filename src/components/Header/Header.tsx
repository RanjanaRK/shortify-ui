import { cookies } from "next/headers";
import LogoutButton from "../Auth/LogoutButton";
import AuthButton from "./AuthButton";

const Header = async () => {
  const token = (await cookies()).get("access-token")?.value;

  if (!token) {
    return <AuthButton />;
  }

  if (token) {
    return (
      <>
        <LogoutButton />
      </>
    );
  }
};

export default Header;
