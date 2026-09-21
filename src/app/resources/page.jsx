import Banner from '@/src/app/resources/components/banner'
import ListingPage from '@/src/app/resources/components/listing'
import { PageData } from '@/src/app/data/pages/data';

const Page = () => {
    return (
        <>
            <Banner />
            <ListingPage data={PageData} />
        </>
    )
}

export default Page