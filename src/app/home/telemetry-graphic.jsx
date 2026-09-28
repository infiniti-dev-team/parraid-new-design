"use client";

import styles from "@/styles/home/telemetry-graphic.module.scss";

export default function TelemetryGraphic({ isVisible = false }) {
  return (
    <div
      className={`${styles.graphicContainer} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      aria-hidden="true"
    >
      {/* Ambient Radial Energy Core */}
      <div className={styles.ambientCore} />

      {/* Radar Scan Sector Beam */}
      <div className={styles.radarSweepWrapper}>
        <div className={styles.radarSweepBeam} />
      </div>

      {/* Concentric Telemetry SVG HUD */}
      <svg
        viewBox="0 0 800 800"
        className={styles.telemetrySvg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outermost Precision Compass Ring (Slow CW Rotation) */}
        <g className={styles.ringOuter}>
          <circle
            cx="400"
            cy="400"
            r="380"
            stroke="rgba(0, 180, 216, 0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 12"
          />
          <circle
            cx="400"
            cy="400"
            r="360"
            stroke="rgba(59, 130, 246, 0.35)"
            strokeWidth="1"
            strokeDasharray="28 8 4 8"
          />
          {/* Tactical Quadrant Markers */}
          <line x1="400" y1="12" x2="400" y2="28" stroke="rgba(0, 212, 255, 0.7)" strokeWidth="2" />
          <line x1="400" y1="772" x2="400" y2="788" stroke="rgba(0, 212, 255, 0.7)" strokeWidth="2" />
          <line x1="12" y1="400" x2="28" y2="400" stroke="rgba(0, 212, 255, 0.7)" strokeWidth="2" />
          <line x1="772" y1="400" x2="788" y2="400" stroke="rgba(0, 212, 255, 0.7)" strokeWidth="2" />
          {/* 45-degree angle markers */}
          <line x1="140" y1="140" x2="152" y2="152" stroke="rgba(0, 180, 216, 0.45)" strokeWidth="1.5" />
          <line x1="660" y1="140" x2="648" y2="152" stroke="rgba(0, 180, 216, 0.45)" strokeWidth="1.5" />
          <line x1="140" y1="660" x2="152" y2="648" stroke="rgba(0, 180, 216, 0.45)" strokeWidth="1.5" />
          <line x1="660" y1="660" x2="648" y2="648" stroke="rgba(0, 180, 216, 0.45)" strokeWidth="1.5" />
        </g>

        {/* Secondary Broken Segment Track (Faster CCW Rotation) */}
        <g className={styles.ringMiddle}>
          <circle
            cx="400"
            cy="400"
            r="310"
            stroke="rgba(0, 82, 204, 0.45)"
            strokeWidth="2"
            strokeDasharray="80 20 40 20 120 30"
          />
          <circle
            cx="400"
            cy="400"
            r="290"
            stroke="rgba(0, 180, 216, 0.3)"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
          {/* Telemetry Tracking Nodes */}
          <circle cx="400" cy="90" r="4" fill="#00d4ff" className={styles.pulseNode1} />
          <circle cx="710" cy="400" r="3.5" fill="#38bdf8" className={styles.pulseNode2} />
          <circle cx="400" cy="710" r="4" fill="#00d4ff" className={styles.pulseNode1} />
          <circle cx="90" cy="400" r="3.5" fill="#38bdf8" className={styles.pulseNode2} />
        </g>

        {/* Inner Tactical Target Grid & Range Ring (Slow CW Rotation) */}
        <g className={styles.ringInner}>
          <circle
            cx="400"
            cy="400"
            r="230"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="16 12"
          />
          <circle
            cx="400"
            cy="400"
            r="160"
            stroke="rgba(0, 180, 216, 0.25)"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          {/* Diagonal Corner Reticles */}
          <path
            d="M260 260 L280 260 M260 260 L260 280"
            stroke="rgba(0, 212, 255, 0.5)"
            strokeWidth="1.5"
          />
          <path
            d="M540 260 L520 260 M540 260 L540 280"
            stroke="rgba(0, 212, 255, 0.5)"
            strokeWidth="1.5"
          />
          <path
            d="M260 540 L280 540 M260 540 L260 520"
            stroke="rgba(0, 212, 255, 0.5)"
            strokeWidth="1.5"
          />
          <path
            d="M540 540 L520 540 M540 540 L540 520"
            stroke="rgba(0, 212, 255, 0.5)"
            strokeWidth="1.5"
          />
        </g>

        {/* Dynamic Expanding Signal Waves */}
        <circle cx="400" cy="400" r="100" className={styles.signalWave1} />
        <circle cx="400" cy="400" r="100" className={styles.signalWave2} />
        <circle cx="400" cy="400" r="100" className={styles.signalWave3} />
      </svg>
    </div>
  );
}
