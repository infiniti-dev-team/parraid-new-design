"use client";
import { usePathname } from "next/navigation";
import DefaultFooter from "@/src/app/layout/defaultfooter";
import HomeFooter from "@/src/app/home/footer";
import NewFooter from "@/src/app/home/new-footer";

const Footer = () => {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "";
    const isProduct = pathname?.startsWith("/product");
    const isDesignLinx = pathname === "/designlinx" || pathname?.startsWith("/designlinx");
    const isEvents = pathname === "/events" || pathname?.startsWith("/events") || pathname === "/calendar" || pathname?.startsWith("/calendar");

    if (isHome || isProduct || isDesignLinx || isEvents) {
        return <NewFooter />;
    }

    return <DefaultFooter />;
};

export default Footer;