
import PressDetails from "@/src/app/press-release/components/details";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faqs";
import { PressListing } from "@/src/app/data/press-release/data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const allPress = Object.values(PressListing).flat();
  const pressItem = allPress.find((post) => post.slug === slug);

  if (!pressItem) {
    return {
      title: "Press Release Not Found",
      description: "The requested press release does not exist.",
    };
  }

  return {
    title: pressItem.title,
    description: pressItem.desc || pressItem.title,
    openGraph: {
      title: pressItem.title,
      description: pressItem.desc || pressItem.title,
      images: pressItem.images
        ? pressItem.images.map((img) => ({
          url: img,
          width: 1200,
          height: 630,
        }))
        : [],
    },
    alternates: {
      canonical: `/press-release/${pressItem.slug}`,
    },
  };
}


export default async function Page({ params }) {
  const { slug } = await params;
  const allPress = Object.values(PressListing).flat();
  const pressItem = allPress.find((post) => post.slug === slug);

  if (!pressItem) return <p>Press Release not found!</p>;

  return (
    <>
      <PressDetails data={pressItem} />
      <Blogs />|
      <Faqs />
    </>
  );
};

