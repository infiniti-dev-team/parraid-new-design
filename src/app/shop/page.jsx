import Banner from "@/src/app/shop/components/banner"
import ProductTab from "@/src/app/home/producttab"
import ConnectivityVideo from "@/src/app/shop/components/connectivityvideo"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Industries from "@/src/app/shop/components/industries"
import ProductListing from "@/src/app/shop/components/productlisting"



const Page = () => {
  return (
    <>
      <Banner />
      <ProductListing />
      <ConnectivityVideo />
      <Industries />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page