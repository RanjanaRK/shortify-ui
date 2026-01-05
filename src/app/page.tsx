import ActivityClient from "@/components/ActivityClient";
import UrlShortenDispaly from "@/components/UrlShortenDispaly";

const page = async () => {
  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <UrlShortenDispaly />
        <ActivityClient />
      </div>
    </>
  );
};

export default page;
