import Banner from "@/src/app/careers/components/banner"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Team from "@/src/app/home/team"
import Jobs from "@/src/app/careers/components/jobs"
import { CareerData } from "@/src/app/data/career/data"

const Page = () => {
  return (
    <>
      <Banner />
      <Team />
      {/* <Jobs data={CareerData} /> */}
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page
