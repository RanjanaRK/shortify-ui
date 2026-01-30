import AnalyticsPageClient from "@/components/AnalyticsPageClient";
interface PageProps {
  params: { slug: string };
}

const page = async ({ params }: PageProps) => {
  return (
    <>
      <AnalyticsPageClient slug={params.slug} />;
    </>
  );
};

export default page;
