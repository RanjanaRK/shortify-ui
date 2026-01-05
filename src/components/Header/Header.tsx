import AuthButton from "./AuthButton";
import UserProfile from "../UserProfile";
import { getCurrentUserServer } from "@/lib/api/user.server";

const Header = async () => {
  const data = await getCurrentUserServer();

  console.log(data);

  if (!data) return <AuthButton />;
  return <UserProfile user={data.user} />;
};

export default Header;
