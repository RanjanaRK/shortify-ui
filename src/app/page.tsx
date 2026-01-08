import ActivityClient from "@/components/ActivityClient";
import UrlShortenDispaly from "@/components/UrlShortenDispaly";

const page = async () => {
  return (
    <>
      <div className="grid place-items-center gap-16">
        <UrlShortenDispaly />
        <ActivityClient />
      </div>
    </>
  );
};

export default page;
