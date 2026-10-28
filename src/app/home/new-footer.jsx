"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/home/new-footer.module.scss";
import LogoWhite from "@/public/logo-white.webp";

export default function NewFooter() {
  return (
    <footer className={styles.newFooter}>
      <div className={styles.container}>
        {/* Top Row: Logo & Tagline */}
        <div className={styles.topRow}>
          <Link href="/" className={styles.logoWrapper}>
            {/* Same official logo file as the header (public/logo-white.webp) */}
            <Image
              src={LogoWhite}
              alt="Parraid Logo"
              width={362}
              height={101}
              priority={false}
              unoptimized
            />
          </Link>
          <p className={styles.tagline}>Engineering without limits</p>
        </div>

        {/* Middle Row: Navigation Links & Address */}
        <div className={styles.middleRow}>
          <nav className={styles.navLinks} aria-label="Footer Navigation">
            <Link href="/contact-us">CONTACT</Link>
            <Link href="/about-us">ABOUT US</Link>
            <Link href="/press-release">NEWS</Link>
            <Link href="/product">TELEMETRY</Link>
            <Link href="/product">COMMUNICATIONS</Link>
          </nav>

          <div className={styles.contactInfo}>
            <p>44150 SMARTRONIX WAY</p>
            <p>HOLLYWOOD, MD 20636</p>
            <a href="tel:+13016900690">+1 (301) 690-0690</a>
            <a href="mailto:SALES@PARRAID.COM">SALES@PARRAID.COM</a>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>COPYRIGHT © 2026 PARRIS JAVAID INC</p>
        </div>
      </div>
    </footer>
  );
}
