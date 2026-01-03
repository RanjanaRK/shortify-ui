import { cookies } from "next/headers";
import LogoutButton from "../Auth/LogoutButton";
import AuthButton from "./AuthButton";
import UserProfile from "../UserProfile";

const Header = async () => {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    return <AuthButton />;
  }

  if (token) {
    return (
      <>
        <UserProfile />
        <LogoutButton />
      </>
    );
  }
};

export default Header;
