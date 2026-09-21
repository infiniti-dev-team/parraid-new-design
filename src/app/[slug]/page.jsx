import Banner from '@/src/app/[slug]/components/banner';
import CategoryContent from '@/src/app/[slug]/components/categorycontent';
import BlueBox from '@/src/app/[slug]/components/bluebox';
import ProductListing from "@/src/app/shop/components/productlisting";
import { CategoryData } from '@/src/app/data/category/data';
import { PageData } from '@/src/app/data/pages/data';
import BannerPage from '@/src/app/[slug]/components/bannerpage';
import PageContent from '@/src/app/[slug]/components/pagecomtent';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const category = CategoryData.find(cat => cat.slug === slug);
    const page = PageData.find(pg => pg.slug === slug);

    // Category Metadata
    if (category) {
        return {
            title: category.tit,
            description: category.desc,
            openGraph: {
                title: category.tit,
                description: category.desc,
                images: category.img1 ? [
                    { url: category.img1, width: 1200, height: 630 }
                ] : [],
            },
            alternates: { canonical: `/${category.slug}` },
        };
    }

    // Page Metadata
    if (page) {
        return {
            title: page.tit,
            description: page.desc,
            openGraph: {
                title: page.tit,
                description: page.desc,
                images: page.img1 ? [
                    { url: page.img1, width: 1200, height: 630 }
                ] : [],
            },
            alternates: { canonical: `/${page.slug}` },
        };
    }

    // Not found
    return {
        title: "Not Found",
        description: "Requested page not found."
    };
}
export default async function Page({ params }) {

    const { slug } = await params;

    const category = CategoryData.find(cat => cat.slug === slug);
    const page = PageData.find(pg => pg.slug === slug);

    // -------------------------------------------
    // ✅ If CATEGORY slug found → Show Category layout
    // -------------------------------------------
    if (category) {
        return (
            <>
                <Banner data={category} pageDet={true} />
                <CategoryContent data={category} />
                <BlueBox data={category} />
                <ProductListing id={category.cat} />
            </>
        );
    }

    // -------------------------------------------
    // ✅ If PAGE slug found → Show PAGE LAYOUT
    // -------------------------------------------
    if (page) {
        return (
            <>
                <BannerPage data={page} page={true} pageDet={true} />
                <PageContent data={page} blue={true} />
            </>
        );
    }

    // -------------------------------------------
    // ❌ Neither Category nor Page Found
    // -------------------------------------------
    return <p>Page Not Found!</p>;
}

