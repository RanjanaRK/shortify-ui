import UrlShortenDispaly from "@/components/UrlShortenDispaly";
import useGetShortUrl from "@/hooks/url/useGetShortUrl";

const page = async () => {
  //  const data =await useGetShortUrl()

  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <UrlShortenDispaly />
      </div>
    </>
  );
};

export default page;
