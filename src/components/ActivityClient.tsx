import useUserActivity from "@/hooks/user/useClientActivity";
import UserLinks from "./UserLinks";
import { getUserUrlLinks } from "@/lib/api/user.server";

const ActivityClient = () => {
  const data = getUserUrlLinks();

  console.log(data);

  return <UserLinks urls={data} />;
};

export default ActivityClient;
