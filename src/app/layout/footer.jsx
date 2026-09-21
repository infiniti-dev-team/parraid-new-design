"use client";
import { usePathname } from "next/navigation";
import DefaultFooter from "@/src/app/layout/defaultfooter";
import HomeFooter from "@/src/app/home/footer";

const Footer = () => {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "";

    if (isHome) {
        return <HomeFooter />;
    }

    return <DefaultFooter />;
};

export default Footer;