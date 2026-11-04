"use client";

import { useState } from "react";
import styles from "@/styles/events/events-calendar.module.scss";
import ProductFindOutPossible from "@/src/app/product/components/product-find-out-possible";

const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const MONTH_NAMES_TITLECASE = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function EventsCalendarPage() {
  // Default to November (index 10) matching the Figma mockup
  const [currentMonthIndex, setCurrentMonthIndex] = useState(10);

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const activeMonthName = MONTHS[currentMonthIndex];
  const activeMonthTitle = MONTH_NAMES_TITLECASE[currentMonthIndex];

  // Event entries matching Figma nodes 509:765, 509:766, 509:770
  const events = [
    {
      nodeId: "509:765",
      titleNodeId: "509:762",
      dateNodeId: "509:763",
      locationNodeId: "509:764",
      title: "EVENTS EXAMPLE 1",
      date: `${activeMonthTitle} 1-2`,
      location: "Las Vegas, NV",
    },
    {
      nodeId: "509:766",
      titleNodeId: "509:769",
      dateNodeId: "509:767",
      locationNodeId: "509:768",
      title: "EVENTS EXAMPLE 1",
      date: `${activeMonthTitle} 1-2`,
      location: "Las Vegas, NV",
    },
    {
      nodeId: "509:770",
      titleNodeId: "509:773",
      dateNodeId: "509:771",
      locationNodeId: "509:772",
      title: "EVENTS EXAMPLE 1",
      date: `${activeMonthTitle} 1-2`,
      location: "Las Vegas, NV",
    },
  ];

  return (
    <div
      className={styles.pageWrapper}
      data-node-id="508:578"
      data-name="Eevent"
    >
      {/* Background blue atmospheric aura glows matching Figma nodes 508:700 & 508:699 */}
      <div className={styles.auraOverlay} aria-hidden="true">
        <div className={styles.auraInner}>
          {/* Ellipse 2 glow (Figma node 508:700: x=373, y=1314) */}
          <div className={styles.ellipseTwo} data-node-id="508:700" data-name="Ellipse 2">
            <img
              src="/events/ellipse-2.svg"
              alt=""
              width={1812}
              height={1814}
            />
          </div>

          {/* Ellipse 1 glow (Figma node 508:699: x=1525, y=1653) */}
          <div className={styles.ellipseOne} data-node-id="508:699" data-name="Ellipse 1">
            <img
              src="/events/ellipse-1.svg"
              alt=""
              width={1832}
              height={2532}
            />
          </div>
        </div>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Top Title: EVENTS CALENDAR (Figma node 508:703) */}
          <section className={styles.titleSection}>
            <h1 className={styles.pageTitle} data-node-id="508:703">
              EVENTS CALENDAR
            </h1>
          </section>

          {/* Month Selector: ‹ NOVEMBER › (Figma node 509:759) */}
          <section
            className={styles.monthNavSection}
            aria-label="Month Navigation"
            data-node-id="509:759"
            data-name="Group 1000006818"
          >
            {/* Left Button (Rotated 180deg) */}
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={handlePrevMonth}
              aria-label="Previous month"
              data-node-id="509:754"
              data-name="Group 1000006816"
            >
              <img
                src="/events/arrow-circle.svg"
                alt="Previous"
                width={48}
                height={48}
              />
            </button>

            {/* Month Name */}
            <h2
              className={styles.monthTitle}
              data-node-id="508:748"
              data-name="November"
            >
              {activeMonthName}
            </h2>

            {/* Right Button */}
            <button
              type="button"
              className={styles.navBtn}
              onClick={handleNextMonth}
              aria-label="Next month"
              data-node-id="509:752"
              data-name="Group 1000006815"
            >
              <img
                src="/events/arrow-circle.svg"
                alt="Next"
                width={48}
                height={48}
              />
            </button>
          </section>

          {/* Events List Section (Figma nodes 509:765, 509:766, 509:770) */}
          <section className={styles.eventsListSection}>
            <div className={styles.eventsList}>
              {events.map((ev, index) => (
                <div
                  key={index}
                  className={styles.eventCard}
                  data-node-id={ev.nodeId}
                >
                  <h3 className={styles.eventTitle} data-node-id={ev.titleNodeId}>
                    {ev.title}
                  </h3>
                  <p className={styles.eventDate} data-node-id={ev.dateNodeId}>
                    {ev.date}
                  </p>
                  <p className={styles.eventLocation} data-node-id={ev.locationNodeId}>
                    {ev.location}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Contact Form matching Figma node 508:667 */}
      <div className={styles.contactWrapper} data-node-id="508:667">
        <ProductFindOutPossible />
      </div>
    </div>
  );
}
