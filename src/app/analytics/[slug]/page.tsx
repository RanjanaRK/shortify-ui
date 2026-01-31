import ClickAnalyticsMain from "@/components/ClickAnalyticsMain";

interface PageProps {
  params: { slug: string };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <>
      <ClickAnalyticsMain slug={slug} />
    </>
  );
};

export default page;
