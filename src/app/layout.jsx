import { Montserrat, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Footer from "@/src/app/layout/footer";
import Header from "@/src/app/layout/header";
import localFont from "next/font/local";
import Tags from "@/src/app/tags";
import ScrollToTop from "@/src/app/components/scrolltop";
import CookieConsent from "@/src/app/components/cookie-consent";

const myFont = localFont({
  src: [
    { path: "./assets/fonts/MyriadPro-BoldCondIt.woff2", weight: "bold", style: "italic" },
    { path: "./assets/fonts/MyriadPro-BoldCondIt.woff", weight: "bold", style: "italic" },
  ],
  variable: "--font-myfont",
})

const finderFont = localFont({
  src: [
    { path: "./assets/fonts/Finder-Light.woff2", weight: "300", style: "normal" },
    { path: "./assets/fonts/Finder-Light.woff", weight: "300", style: "normal" },
    { path: "./assets/fonts/Finder-Light.ttf", weight: "300", style: "normal" },
  ],
  variable: "--font-finder-local",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://www.parraid.com"),
  title: "Parraid | Expert Telemetry Data Systems Design, Engineering, Sales",
  description: "A small products-oriented business, Parraid is wholly devoted to design, engineering, sales, and support of telemetry data systems and tactically oriented mission-critical communications solutions.",
  //===== OG Tags =====
  openGraph: {
    title: "Parraid | Expert Telemetry Data Systems Design, Engineering, Sales",
    description: "A small products-oriented business, Parraid is wholly devoted to design, engineering, sales, and support of telemetry data systems and tactically oriented mission-critical communications solutions.",
    url: "/",
    siteName: "Parraid",
    locale: "en_US",
    type: "website",
    images: "#",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  robots: {
    index: false,
    follow: false,
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${myFont.variable} ${montserrat.variable} ${finderFont.variable}`}>
      <head>
        <Tags />
      </head>
      <body className={`${poppins.variable} ${myFont.variable} ${montserrat.variable} ${finderFont.variable}`}>
        <Header />
        <ScrollToTop />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}