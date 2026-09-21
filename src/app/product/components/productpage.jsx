"use client";
import { ProdDetails } from "@/src/app/data/products/data";
import ProDetails from "@/src/app/product/components/prodetails";
import ConnectivityForm from "@/src/app/product/components/connectivityform";
import ProductList from "@/src/app/product/components/productlist";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faqs";

export default function ProductPage({ slug }) {
    const allProducts = Object.values(ProdDetails).flat();
    console.log("All product slugs:", allProducts.map((p) => p.slug));

    const product = allProducts.find((p) => p.slug === slug);

    if (!product) return <p>Product not found!</p>;

    return (
        <>
            <ProDetails product={product} />
            <ConnectivityForm />
            <ProductList cat={product.cat} />
            <Blogs />
            <Faqs />
        </>
    );
}
