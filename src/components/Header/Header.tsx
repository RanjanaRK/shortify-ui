import { cookies } from "next/headers";
import LogoutButton from "../Auth/LogoutButton";
import AuthButton from "./AuthButton";
import UserProfile from "../UserProfile";

const Header = async () => {
  const token = (await cookies()).get("access_token")?.value;
  const rtoken = (await cookies()).get("refresh_token")?.value;

  if (!rtoken) {
    return <AuthButton />;
  }

  return (
    <>
      <UserProfile />
      <LogoutButton />
    </>
  );
};

export default Header;
