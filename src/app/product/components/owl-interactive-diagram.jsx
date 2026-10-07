"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/products/owl-diagram.module.scss";

const pins = [
  // Left side pins (top to bottom - exact 100/100 Figma match)
  {
    id: "jecl",
    label: "JECL / TRAX Gateway",
    side: "left",
    top: 16.3,
    left: 25.0,
  },
  {
    id: "tak-server",
    label: "TAK Server",
    side: "left",
    top: 27.4,
    left: 2.1,
  },
  {
    id: "nrg",
    label: "Network Radio Gateway",
    side: "left",
    top: 40.4,
    left: 18.3,
  },

  // Right side pins (top to bottom - exact 100/100 Figma match)
  {
    id: "security",
    label: "Data Security in Transit / At Rest",
    side: "right",
    top: 16.3,
    left: 75.9,
  },
  {
    id: "secure-linux",
    label: "Secure Linux",
    side: "right",
    top: 27.4,
    left: 97.8,
  },
  {
    id: "gui",
    label: "GUI",
    side: "right",
    top: 40.4,
    left: 86.0,
    isGui: true,
    guiImage: "/products/new-images/owl-phone-gui-crisp.png",
  },
];

export default function OwlInteractiveDiagram() {
  const [activePinId, setActivePinId] = useState(null);

  return (
    <div className={styles.diagramWrapper}>
      <div className={styles.diagramStage}>
        {/* Soldier Silhouette Centerpiece */}
        <div className={styles.soldierContainer}>
          <Image
            src="/products/new-images/OWL Soldier Silhouette.png"
            alt="OWL Soldier Silhouette"
            width={328}
            height={837}
            priority
            className={styles.soldierImg}
          />

          {/* Interactive Plus Pins - anchored to soldier */}
          {pins.map((pin) => {
            const isActive = activePinId === pin.id;
            return (
              <div
                key={pin.id}
                className={`${styles.pinNode} ${styles[pin.side]} ${
                  isActive ? styles.active : ""
                }`}
                style={{
                  top: `${pin.top}%`,
                  left: `${pin.left}%`,
                }}
                onMouseEnter={() => setActivePinId(pin.id)}
                onMouseLeave={() => setActivePinId(null)}
                onClick={() =>
                  setActivePinId(activePinId === pin.id ? null : pin.id)
                }
                onFocus={() => setActivePinId(pin.id)}
                onBlur={() => setActivePinId(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActivePinId(activePinId === pin.id ? null : pin.id);
                  }
                }}
                aria-label={pin.label}
              >
                {/* The Pin Circle: geometric SVG '+' fades out and Parraid P logo fades in on hover */}
                <div className={styles.pinCircle}>
                  <svg
                    className={styles.plusIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4V20M4 12H20"
                      stroke="#ffffff"
                      strokeWidth="2.4"
                      strokeLinecap="square"
                    />
                  </svg>
                  <div className={styles.pLogoWrapper}>
                    <img
                      src="/products/new-images/owl-pin-hover-icon.svg"
                      alt="Parraid"
                      className={styles.pLogoImg}
                    />
                  </div>
                </div>

                {/* Connecting line and Text / Phone GUI popout on hover */}
                <div
                  className={`${styles.callout} ${
                    pin.side === "left"
                      ? styles.calloutLeft
                      : styles.calloutRight
                  }`}
                >
                  <div className={styles.connectorLine} />

                  {pin.isGui ? (
                    <div className={styles.guiPhoneContainer}>
                      <div className={styles.phoneFrame}>
                        <Image
                          src={pin.guiImage}
                          alt="OWL Phone GUI"
                          width={77}
                          height={157}
                          unoptimized
                          priority
                          className={styles.phoneImg}
                        />
                        <div className={styles.phoneOverlay} />
                        <span className={styles.guiCenterText}>GUI</span>
                      </div>
                    </div>
                  ) : (
                    <span className={styles.labelText}>{pin.label}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
