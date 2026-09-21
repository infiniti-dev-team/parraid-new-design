import Banner from "@/src/app/blogs/components/banner";
import Blogs from "@/src/app/blogs/components/blogs";
import { BlogListingData } from "@/src/app/data/blogs/data";
import RelateedProduct from "@/src/app/blogs/components/relateedblogs";

export default function Page() {
  return (
    <>
      <Banner />
      <Blogs data={BlogListingData} />

    </>
  );
}
