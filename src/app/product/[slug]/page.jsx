import { ProdDetails } from "@/src/app/data/products/data";
import { findProduct } from "@/src/app/data/products/new-products-data";
import ProductPage from "@/src/app/product/components/productpage";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    let product = null;
    const newProd = findProduct(slug);
    if (newProd) {
        product = {
            slug: newProd.slug,
            tit: newProd.title,
            desc: newProd.topParagraph || "",
            images: [newProd.mainImage],
        };
    } else {
        const allProducts = Object.values(ProdDetails).flat();
        product = allProducts.find((p) => p.slug === slug);
    }

    if (!product) {
        return {
            title: "Product Not Found",
            description: "No product found for this slug.",
        };
    }

    const firstImage = product.images?.[0];
    const ogImage = typeof firstImage === "string" ? firstImage : firstImage?.src;

    return {
        title: product.tit,
        description: product.desc || "",
        openGraph: {
            title: product.tit,
            description: product.desc || "",
            images: ogImage
                ? [{ url: ogImage, width: 1200, height: 630 }]
                : [],
        },
        alternates: {
            canonical: `/product/${product.slug}`,
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    return <ProductPage slug={slug} />;
}
