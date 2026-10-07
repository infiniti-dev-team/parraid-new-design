"use client";
import { usePathname } from "next/navigation";
import DefaultFooter from "@/src/app/layout/defaultfooter";
import HomeFooter from "@/src/app/home/footer";
import NewFooter from "@/src/app/home/new-footer";

const Footer = () => {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "";
    const isProduct = pathname?.startsWith("/product");

    if (isHome || isProduct) {
        return <NewFooter />;
    }

    return <DefaultFooter />;
};

export default Footer;