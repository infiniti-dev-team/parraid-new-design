"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/forms/contactfrom.module.scss";
import Link from "next/link";
import Cookies from "js-cookie";

const ContactForm = ({ product, blogPage }) => {
  const [loading, setLoading] = useState(false);
  const [ipData, setIpData] = useState(null);

  // 🌍 IP INFO (ONLY FRONTEND)
  useEffect(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    // 🍪 USER ID COOKIE
    let userId = Cookies.get("userId");
    if (!userId) {
      userId = "UID-" + Math.random().toString(36).substring(2, 10);
      Cookies.set("userId", userId, { expires: 30 });
    }

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      message: form.msg.value,

      // 🌍 LOCATION (FROM FRONTEND ONLY)
      ip: ipData?.ip || "",
      city: ipData?.city || "",
      state: ipData?.region || "",
      country: ipData?.country || "",

      pageurl: window.location.href,
      userId,
      userAgent: navigator.userAgent,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed");
      setLoading(false);
    }
  };

  return (
    <div className={`${product ? styles.productBox : ""}`}>
      <div className={styles.divFull}>
        <p>Powering secure, real-time data transmission across land, sea, and sky.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className={`${styles.contactForm} ${blogPage ? styles.blogPage : ""
            } ${product ? styles.productForm : ""}`}
        >
          <div className={styles.divField}>
            <input type="text" name="name" placeholder="Full Name" required />
          </div>

          <div className={styles.divField}>
            <input type="tel" name="phone" placeholder="Phone Number" required />
          </div>

          <div className={styles.divField}>
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <div className={styles.divField}>
            <input type="text" name="company" placeholder="Company" required />
          </div>

          <div className={styles.divField}>
            <textarea name="msg" placeholder="Message"></textarea>
          </div>

          <div className={`${styles.divField} ${styles.divProduct}`}>
            <input type="checkbox" name="check" required />
            <span className={styles.consentText}>
              By signing up, you agree to our{" "}
              <Link href="/terms-conditions">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>.
            </span>
          </div>

          <div className={styles.divSubmit}>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </form >
    </div >
  );
};

export default ContactForm;
