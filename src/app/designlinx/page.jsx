"use client";

import Image from "next/image";
import styles from "@/styles/designlinx/designlinx.module.scss";
import ProductFindOutPossible from "@/src/app/product/components/product-find-out-possible";

export default function DesignLinxPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Background blue atmospheric aura overlays matching Figma node 509:895 & 509:896 */}
      <div className={styles.auraOverlay} aria-hidden="true">
        <div className={styles.ellipseRightContainer}>
          <div className={styles.ellipseRightInner}>
            <img
              src="/designlinx/ellipse-1.svg"
              alt=""
              className={styles.ellipseImg}
            />
          </div>
        </div>
        <div className={styles.ellipseLeftContainer}>
          <div className={styles.ellipseLeftInner}>
            <img
              src="/designlinx/ellipse-2.svg"
              alt=""
              className={styles.ellipseImg}
            />
          </div>
        </div>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Top Heading: "DESIGNLINX™" (Figma node 509:897 & 509:960) */}
          <section className={styles.titleSection}>
            <h1 className={styles.pageTitle}>
              DESIGNLINX<span className={styles.trademark}>TM</span>
            </h1>
          </section>

          {/* Main Content Row: Text + Button on Left, Logo + Badges on Right */}
          <section className={styles.contentRow}>
            {/* Left Column: Description & Learn More Button (Figma node 509:962 & 509:975) */}
            <div className={styles.textCol}>
              <p className={styles.description}>
                As a sister company of Parraid, DesignLinx delivers innovative
                high-performance FPGA, SoC, and embedded software design
                services. With our comprehensive QuickStart
                <sup className={styles.registeredMark}>®</sup> support, we help
                you accelerate time-to-market, reduce development risks, and
                lower overall costs.
              </p>
              <a
                href="https://www.designlinxhs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.learnMoreBtn}
                aria-label="Learn more at the DesignLinx website"
              >
                LEARN MORE
              </a>
            </div>

            {/* Right Column: Logo & Badges (Figma node 509:974) */}
            <div className={styles.graphicCol}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/designlinx/design-linx-logo-white.png"
                  alt="DesignLinx"
                  width={864}
                  height={133}
                  priority
                  className={styles.brandLogo}
                />
              </div>

              <div className={styles.badgesRow}>
                {/* Circular Badge: AMD Partner of the Year Premier 2024 (Figma node 509:957) */}
                <div className={styles.circularBadgeWrapper}>
                  <Image
                    src="/designlinx/amd-partner-of-the-year-2024.png"
                    alt="AMD Premier Embedded Partner Program - Partner of the Year 2024"
                    width={147}
                    height={147}
                    className={styles.circularBadge}
                  />
                </div>

                {/* Rectangular Badge: AMD Embedded Partner Network Platinum (Figma node 509:958) */}
                <div className={styles.platinumBadgeWrapper}>
                  <Image
                    src="/designlinx/AMD-Partner-Network-Badge-Embedded-Platinum.png"
                    alt="AMD Embedded Partner Network - Platinum Partner"
                    width={363}
                    height={93}
                    className={styles.platinumBadge}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contact Section at bottom (Figma node 509:867) */}
      <div className={styles.contactWrapper}>
        <ProductFindOutPossible />
      </div>
    </div>
  );
}
