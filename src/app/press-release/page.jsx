import Banner from "@/src/app/press-release/components/banner"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Press from "@/src/app/press-release/components/press"
import { PressData } from "@/src/app/data/press-release/data"


const Page = () => {
  return (
    <>
      <Banner />
      <Press data={PressData} />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page





