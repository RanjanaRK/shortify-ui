import UrlAnalyticsModal from "@/components/AnalyticsPage";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: PageProps) => {
  return (
    <>
      <UrlAnalyticsModal urlId={""} />
    </>
  );
};

export default page;
