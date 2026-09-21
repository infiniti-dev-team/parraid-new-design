"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import styles from "@/styles/components/cookie-consent.module.scss";
import LogoFooter from "media/logo-fotter.webp";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    // Check if consent already exists
    const consent = Cookies.get("cookie-consent-accepted");
    if (!consent) {
      setIsVisible(true);
    }

    // Fetch IP data for opt-in tracking
    const getIPData = async () => {
      try {
        const response = await fetch(
          "https://ipinfo.io/json?token=229b1c3fa2e54c"
        );
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error("IP fetch error:", error);
      }
    };

    getIPData();
  }, []);

  const handleAccept = async () => {
    // Set cookie to remember consent (30 days)
    Cookies.set("cookie-consent-accepted", "true", { expires: 30 });
    setIsVisible(false);

    // Get or create userId (consistent with contact form)
    let userId = Cookies.get("userId");
    if (!userId) {
      userId = "UID-" + Math.random().toString(36).substring(2, 10);
      Cookies.set("userId", userId, { expires: 30 });
    }

    // Prepare data to save
    const payload = {
      email: "N/A",
      ip: ipData?.ip || "",
      city: ipData?.city || "",
      state: ipData?.region || "",
      country: ipData?.country || "",
      pageurl: window.location.href,
      userId,
      userAgent: navigator.userAgent,
    };

    // Save to Google Sheets via our new API
    try {
      await fetch("/api/cookie-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Failed to save cookie consent data:", error);
    }
  };

  const handleDecline = () => {
    setIsVisible(false);
    // Optional: set a session cookie to not show again in this session
    Cookies.set("cookie-consent-accepted", "false", { expires: 1 });
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.content}>
        <div className={styles.logoTitle}>
          <div className={styles.logo}>
            <Image src={LogoFooter.src} alt="Parraid Logo" width={180} height={50} />
          </div>
          <h5>Cookie Consent</h5>
        </div>
        <p>
          We use cookies to enhance your experience. Opt-in to receive updates and
          personalized content.
        </p>
      </div>
      <div className={styles.actions}>
        <button className={styles.acceptBtn} onClick={handleAccept}>
          Accept All
        </button>
        <button className={styles.declineBtn} onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
