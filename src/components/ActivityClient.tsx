import { getUserUrlLinks } from "@/lib/api/user.server";
import UserLinks from "./UserLinks";

const ActivityClient = async () => {
  const data = await getUserUrlLinks();

  console.log(data);

  return <UserLinks urls={data!} />;
};

export default ActivityClient;
