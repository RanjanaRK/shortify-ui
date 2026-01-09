import UrlAnalyticsModal from "@/components/AnalyticsPage";
import AnalyticsDashboard from "@/components/UrlAnalytics";
import UrlAnalytics from "@/components/UrlAnalytics";
import { getUrlAnalytics } from "@/lib/api/user.server";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getUrlAnalytics(slug);

  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-lg font-semibold text-red-500">
          Analytics not found
        </h1>
      </div>
    );
  }

  return (
    <>
      <AnalyticsDashboard data={data} />
    </>
  );
};

export default page;
