import AboutList from "@/src/app/about-us/components/aboutlist"
import Build from "@/src/app/about-us/components/build"
import Connectivity from "@/src/app/about-us/components/connectivity"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/about-us/components/faqs"
import ProjectCounter from "@/src/app/about-us/components/projectcounter"
import { FaqsMain, faqsData } from "@/src/app/data/about/data"
import SisterCompany from "@/src/app/about-us/components/sistercompany"

const Page = () => {
  return (
    <>
      <Build about={true} />
      <AboutList />
      <SisterCompany />
      <Connectivity />
      {/* <ProjectCounter /> */}
      <Blogs />
      <Faqs data={faqsData} dataTitle={FaqsMain} />
    </>
  )
}

export default Page