"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/home/what-were-made-of.module.scss";

const solutions = [
  {
    id: "tactical",
    title: "TACTICAL COMMUNICATIONS +",
    description:
      "Secure, Resilient Communications Solutions That Connect People, Platforms, And Networks In Demanding Environments.",
    posClass: styles.posTactical,
  },
  {
    id: "telemetry",
    title: "TELEMETRY & DATA +",
    description:
      "Capture, Process, Record, And Distribute Mission-Critical Data Wherever The Mission Takes You.",
    posClass: styles.posTelemetry,
  },
  {
    id: "platform",
    title: "PLATFORM INTEGRATION +",
    description:
      "Bring Communications, Computing, Telemetry, And Networking Technologies Together Into Cohesive Mission Solutions.",
    posClass: styles.posPlatform,
  },
  {
    id: "embedded",
    title: "EMBEDDED SYSTEMS +",
    description:
      "Hardware And Software Engineered To Integrate Directly Into Complex Mission Systems.",
    posClass: styles.posEmbedded,
  },
  {
    id: "networking",
    title: "NETWORKING & CONNECTIVITY +",
    description:
      "Connect Disparate Systems And Networks Across The Edge From Command Posts To Deployed Platforms.",
    posClass: styles.posNetworking,
  },
  {
    id: "edge",
    title: "EDGE TECHNOLOGY +",
    description:
      "Move Critical Data Closer To Where Decisions Happen In Challenging Environments.",
    posClass: styles.posEdge,
  },
  {
    id: "signal",
    title: "SIGNAL PROCESSING +",
    description:
      "Turn Raw Signals And Data Into Actionable Information With Purpose-Built Processing Capabilities.",
    posClass: styles.posSignal,
  },
];

export default function WhatWereMadeOf() {
  const [hoveredId, setHoveredId] = useState(null);
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const playVideo = (v) => {
      if (v) {
        v.defaultMuted = true;
        v.muted = true;
        const promise = v.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
      }
    };
    playVideo(videoRef.current);
    playVideo(mobileVideoRef.current);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleMobileClick = (id) => {
    const next = hoveredId === id ? null : id;
    setHoveredId(next);
    if (next && mobileVideoRef.current && mobileVideoRef.current.paused) {
      mobileVideoRef.current.play().catch(() => {});
    }
  };

  const activeSolution = solutions.find((item) => item.id === hoveredId);

  return (
    <section
      className={styles.whatWereMadeOfSection}
      aria-label="What We’re Made Of"
    >
      <div className={styles.stageContainer}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>WHAT WE’RE MADE OF</h2>
          <p className={styles.sectionSubtitle}>
            Discover Parraid’s versatile range of mission-empowering solutions.
          </p>
        </div>

        {/* Central Logo Emblem (Disappears smoothly on hover) */}
        <div
          className={`${styles.emblemWrapper} ${
            hoveredId ? styles.emblemHidden : styles.emblemVisible
          }`}
          aria-hidden={hoveredId ? "true" : "false"}
        >
          <Image
            src="/home/figma/official-p-symbol.png"
            alt="Parraid Symbol"
            width={965}
            height={965}
            priority
            className={styles.emblemImage}
          />
        </div>

        {/* Video Circle Container (Smoothly replaces the emblem on hover with continuous looping video & blue overlay) */}
        <div
          className={`${styles.videoCircleContainer} ${
            hoveredId ? styles.circleVisible : styles.circleHidden
          }`}
          aria-hidden={hoveredId ? "false" : "true"}
        >
          <video
            ref={videoRef}
            className={styles.circleVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/home/backgroud-video.mp4?v=2" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
          <div className={styles.circleTextContainer} aria-live="polite">
            {activeSolution && (
              <p key={activeSolution.id} className={styles.circleText}>
                {activeSolution.description}
              </p>
            )}
          </div>
        </div>

        {/* Desktop 7 Floating Titles */}
        <div className={styles.desktopStage}>
          {solutions.map((item) => {
            const isHovered = hoveredId === item.id;
            const isOtherHovered = hoveredId !== null && !isHovered;

            let stateClass = "";
            if (isHovered) {
              stateClass = styles.titleActive;
            } else if (isOtherHovered) {
              stateClass = styles.titleBlurred;
            }

            return (
              <button
                type="button"
                key={item.id}
                className={`${styles.solutionItem} ${item.posClass} ${stateClass}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleMouseEnter(item.id)}
                onBlur={handleMouseLeave}
                aria-label={item.title}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Tablet & Mobile Layout (< 992px) */}
        <div className={styles.mobileSection}>
          {/* Horizontal Buttons row directly under header */}
          <div className={styles.mobileGrid}>
            {solutions.map((item) => {
              const isHovered = hoveredId === item.id;
              const isOtherHovered = hoveredId !== null && !isHovered;

              let stateClass = "";
              if (isHovered) {
                stateClass = styles.active;
              } else if (isOtherHovered) {
                stateClass = styles.blurred;
              }

              return (
                <button
                  type="button"
                  key={item.id}
                  className={`${styles.mobileItem} ${stateClass}`}
                  onClick={() => handleMobileClick(item.id)}
                  aria-label={item.title}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* Details & Center Area below buttons */}
          <div className={styles.mobileCenterArea}>
            {/* Background Video with Gradient Overlay on Selection */}
            <div
              className={`${styles.mobileVideoWrapper} ${
                hoveredId ? styles.visible : styles.hidden
              }`}
              aria-hidden="true"
            >
              <video
                ref={mobileVideoRef}
                className={styles.mobileVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/home/backgroud-video.mp4?v=2" type="video/mp4" />
              </video>
              <div className={styles.mobileVideoOverlay} />
            </div>

            <div
              className={`${styles.mobileEmblem} ${
                hoveredId ? styles.hidden : ""
              }`}
            >
              <Image
                src="/home/figma/official-p-symbol.png"
                alt="Parraid Emblem"
                width={220}
                height={220}
                priority
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div
              className={`${styles.mobileDesc} ${
                !hoveredId ? styles.hidden : ""
              }`}
            >
              {activeSolution && (
                <>
                  <span className={styles.mobileDescTitle}>
                    {activeSolution.title}
                  </span>
                  <p className={styles.mobileDescText}>
                    {activeSolution.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
