"use client";
import { useParams } from "next/navigation";
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import JobDetails from "@/src/app/careers/components/jobdetails"
import { CareerListing } from "@/src/app/data/career/data";


const Page = () => {
  const params = useParams();
  const { slug } = params;
  const allCareer = Object.values(CareerListing).flat();
  const CareerItems = allCareer.filter((career) => career.slug === slug);

  if (!CareerItems || CareerItems.length === 0) {
    return <p>Product not found!</p>;
  }

  const CareerItem = CareerItems[0];
  return (
    <>
      <JobDetails data={CareerItem} />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page
