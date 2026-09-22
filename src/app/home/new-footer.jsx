"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/home/new-footer.module.scss";

export default function NewFooter() {
  return (
    <footer className={styles.newFooter}>
      <div className={styles.container}>
        {/* Top Row: Logo & Tagline */}
        <div className={styles.topRow}>
          <Link href="/" className={styles.logoWrapper}>
            <Image
              src="/home/figma/logo-parraid-footer.svg"
              alt="Parraid Logo"
              width={240}
              height={74}
              priority={false}
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
