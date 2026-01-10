import ActivityClient from "@/components/ActivityClient";
import UrlShortenDispaly from "@/components/UrlShortenDispaly";

const page = async () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-16">
        <UrlShortenDispaly />
        <ActivityClient />
      </div>
    </>
  );
};

export default page;
