import UrlAnalyticsModal from "@/components/AnalyticsPage";
import { getUrlAnalytics } from "@/lib/api/user.server";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getUrlAnalytics(slug);

  // console.log("click analytics:", data);

  return (
    <>
      <h1 className="text-5xl font-bold">{slug}</h1>
      <UrlAnalyticsModal url={data} />
    </>
  );
};

export default page;
