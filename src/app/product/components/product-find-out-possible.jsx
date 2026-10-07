"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import styles from "@/styles/products/product-find-out-possible.module.scss";

export default function ProductFindOutPossible() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [ipData, setIpData] = useState(null);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  useEffect(() => {
    const getIPData = async () => {
      try {
        const response = await fetch("https://ipinfo.io/json?token=229b1c3fa2e54c");
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error("IP fetch error:", error);
      }
    };
    getIPData();

    if (
      typeof window !== "undefined" &&
      (window.location.hash === "#Contact" || window.location.hash === "#contact")
    ) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    const form = e.target;
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
      message: form.message.value,
      ip: ipData?.ip || "",
      city: ipData?.city || "",
      state: ipData?.region || "",
      country: ipData?.country || "",
      pageurl: typeof window !== "undefined" ? window.location.href : "",
      userId,
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        router.push("/thank-you");
      } else {
        setStatusMsg({
          type: "error",
          text: "Submission failed. Please try again or email sales@parraid.com directly.",
        });
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatusMsg({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className={styles.findOutSection} aria-label="Contact and Inquiry Section">
      <div id="contact" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }} />
      <div className={styles.container}>
        <div className={styles.gridWrapper}>
          {/* Left: Input Form (Figma node 218:194) */}
          <div className={styles.formCol}>
            <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="NAME"
                  aria-label="Your Name"
                  className={styles.inputPill}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="COMPANY"
                  aria-label="Company Name"
                  className={styles.inputPill}
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="EMAIL"
                aria-label="Email Address"
                className={styles.inputPill}
              />

              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                aria-label="Phone Number"
                className={styles.inputPill}
              />

              <textarea
                name="message"
                required
                rows={4}
                placeholder="MESSAGE"
                aria-label="Your Message"
                className={styles.textareaPill}
              />

              <div className={styles.btnWrapper}>
                <button
                  type="submit"
                  disabled={loading}
                  className={styles.submitBtn}
                  aria-label="Submit contact inquiry"
                >
                  {loading ? "SENDING..." : "SUBMIT"}
                </button>
              </div>

              {statusMsg.text && (
                <div
                  className={
                    statusMsg.type === "error"
                      ? styles.errorMsg
                      : styles.successMsg
                  }
                  role="alert"
                >
                  {statusMsg.text}
                </div>
              )}
            </form>
          </div>

          {/* Right: Bold Heading (Figma node 218:190) */}
          <div className={styles.textCol}>
            <h2 className={styles.headline}>
              FIND OUT
              <br />
              WHAT’S
              <br />
              POSSIBLE
            </h2>
            <p className={styles.subtext}>
              Together, we&apos;ll engineer the right solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
