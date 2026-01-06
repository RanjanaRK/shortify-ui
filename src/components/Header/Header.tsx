import AuthButton from "./AuthButton";
import UserProfile from "../UserProfile";
import { getCurrentUserServer } from "@/lib/api/user.server";
import { cookies } from "next/headers";

const Header = async () => {
  const data = await getCurrentUserServer();

  const at = (await cookies()).get("access_token")?.value;
  const rt = (await cookies()).get("refresh_token")?.value;

  console.log(data);

  if (!rt) return <AuthButton />;
  return <UserProfile user={data.user} />;
};

export default Header;
