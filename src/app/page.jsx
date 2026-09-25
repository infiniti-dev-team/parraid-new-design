import Banner from "@/src/app/home/banner"
import LegacyTrust from "@/src/app/home/legacy-trust"
import IndustriesServed from "@/src/app/home/industries-served"
import WhatWereMadeOf from "@/src/app/home/what-were-made-of"
import MultiDomain from "@/src/app/home/multi-domain"
import FindOutPossible from "@/src/app/home/find-out-possible"
import Build from "@/src/app/home/build"
import ProductTab from "@/src/app/home/producttab"
import Clients from "@/src/app/home/clients"
import Events from "@/src/app/home/events"
import Vision from "@/src/app/home/vision"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Industries from "@/src/app/home/industries"


const Page = () => {
  return (
    <>
      <Banner />
      <LegacyTrust />
      <IndustriesServed />
      <WhatWereMadeOf />
      <MultiDomain />
      <FindOutPossible />
      {/* <Build /> */}
      {/* <ProductTab /> */}
      {/* <Clients /> */}
      {/* <Industries /> */}
      {/* <Events home={true} /> */}
      {/* <Vision /> */}
      {/* <Blogs /> */}
      {/* <Faqs /> */}
    </>
  )
}

export default Page