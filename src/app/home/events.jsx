"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/home/events.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from "@/src/app/components/singlebutton";
import Image from "next/image";

import Event01 from "media/events/logo1.webp";
import Event02 from "media/events/logo2.webp";
import Event03 from "media/events/logo3.webp";
import Event04 from "media/events/logo4.webp";
import Event05 from "media/events/logo5.webp";
import Event06 from "media/events/logo6.webp";
import Event07 from "media/events/logo7.webp";
import Event08 from "media/events/logo8.webp";
import Event09 from "media/events/logo9.webp";
import Event10 from "media/events/logo10.webp";
import Event11 from "media/events/logo11.webp";
import Event12 from "media/events/logo12.webp";
import Event13 from "media/events/logo13.webp";
import Event14 from "media/events/logo14.webp";
import Event15 from "media/events/logo15.webp";
import Event17 from "media/events/logo17.webp";
import Event19 from "media/events/logo19.webp";
import Event21 from "media/events/logo21.webp";
import Event23 from "media/events/logo23.webp";
import Event24 from "media/events/logo24.webp";
import Event25 from "media/events/logo25.webp";
import Event26 from "media/events/logo26.webp";


// ✅ Helper function (IMPORTANT)
const isEventActive = (dateStr) => {
  const currentYear = new Date().getFullYear();

  try {
    const [month, days] = dateStr.split(" ");
    const endDay = days.includes("-") ? days.split("-")[1] : days;

    const endDate = new Date(`${month} ${endDay}, ${currentYear}`);

    // +1 day
    endDate.setDate(endDate.getDate() + 1);

    return new Date() <= endDate;
  } catch (err) {
    return true; // fallback (agar format issue ho)
  }
};


const data = [
  {
    title: "Booz Allen Tak Pro Am",
    add: "Burnet, TX",
    link: "https://web.cvent.com/event/353c74d6-9cd2-4494-939d-18c3759ba1d8/summary",
    img: Event01.src,
    date: "February 4-6",
  },
  {
    title: "Special Air Warfare Symposium",
    add: "Fort Walton Beach, FL",
    link: "https://saws.gsofsymposium.org",
    img: Event02.src,
    date: "February 10-12",
  },
  {
    title: "SMALLSAT Symposium",
    add: "Mountain View, CA",
    link: "https://smallsatshow.com",
    img: Event03.src,
    date: "February 10-12",
  },
  {
    title: "AFCEA West",
    add: "San Diego, CA",
    link: "https://www.westconference.org/West26/Public/enter.aspx",
    img: Event04.src,
    date: "February 10-12",
  },
  {
    title: "AFA Warfare Symposium",
    add: "Aurora, CO",
    link: "https://www.afa.org/afa-warfare-symposium/",
    img: Event05.src,
    date: "February 23-25",
  },
  {
    title: "Collaborative EW Symposium",
    add: "Pt. Mugu, CA",
    link: "https://crows.org/event/collaborative-ew-2026/",
    img: Event06.src,
    date: "March 10-12",
  },
  {
    title: "Space Symposium",
    add: "Colorado Springs, CO",
    link: "https://www.spacesymposium.org",
    img: Event07.src,
    date: "April 13-16",
  },
  {
    title: "AAAA Summit",
    add: "Nashville, TN",
    link: "https://s7.goeshow.com/aaaa/missionsolutions/2026/",
    img: Event08.src,
    date: "April 15-17",
  },
  {
    title: "Aberdeen Proving Ground Expo",
    add: "Aberdeen, MD",
    link: "https://fdaexpo.com/events.php",
    img: Event09.src,
    date: "April 15",
  },
  {
    title: "Sea Air Space",
    add: "National Harbor, MD",
    link: "https://seaairspace.org",
    img: Event10.src,
    date: "April 19-22",
  },
  {
    title: "TechNet LANPAC Korea",
    add: "Pyongteak-Shi, South Korea",
    link: "https://www.eventeny.com/events/lptnk2026-20462/",
    img: Event11.src,
    date: "April 20-24",
  },
  {
    title: "ITEA Test Instrumentation Workshop",
    add: "Las Vegas, NV",
    link: "https://itea.org/event/2026-test-instrumentation-training-workshop/",
    img: Event12.src,
    date: "April 28-30",
  },
  {
    title: "Border Security Expo",
    add: "Phoenix, AZ",
    link: "https://www.bordersecurityexpo.com",
    img: Event13.src,
    date: "May 5-6",
  },
  {
    title: "Hill AFB Tech Expo",
    add: "Ogden, UT",
    link: "https://fdaexpo.com/events.php",
    img: Event14.src,
    date: "May 5",
  },
  {
    title: "Peterson AFB Tech Expo",
    add: "Colorado Springs, CO",
    link: "https://fdaexpo.com/events.php",
    img: Event14.src,
    date: "May 7",
  },
  {
    title: "SOF Week",
    add: "Tampa, FL",
    link: "https://sofweek.org",
    img: Event15.src,
    date: "May 18-21",
  },
  {
    title: "ITEA UK T&E Summit",
    add: "Portsmouth, England",
    link: "https://itea.org/event/2026-uk-te-conference/",
    img: Event12.src,
    date: "June 9-10",
  },
  {
    title: "Wright Patterson Tech Expo",
    add: "Dayton, OH",
    link: "https://fdaexpo.com/events.php",
    img: Event21.src,
    date: "August 5",
  },
  {
    title: "TechNet Augusta",
    add: "Augusta, GA",
    link: "https://events.afcea.org/Augusta26/Public/enter.aspx",
    img: Event17.src,
    date: "August 17-20",
  },
  {
    title: "UAS Summit",
    add: "Grand Forks, ND",
    link: "https://uas.bbiconferences.com/ema/DisplayPage.aspx?pageId=The_Summit___Expo",
    img: Event23.src,
    date: "October 13-14",
  },
  {
    title: "Hypersonic Huntsville",
    add: "Huntsville, AL",
    link: "https://www.hypersonicinnovation.com",
    img: Event24.src,
    date: "October 20-21",
  },
  {
    title: "ITC",
    add: "Glendale, AZ",
    link: "https://telemetry.org",
    img: Event19.src,
    date: "October 26-29",
  },
  {
    title: "Modern Warfare Week",
    add: "Fort Bragg, NC",
    link: "https://mww.gsofsymposium.org",
    img: Event25.src,
    date: "November 16-19",
  },
  {
    title: "Eastern Defense Summit",
    add: "North Charleston, SC",
    link: "https://charlestondca.org/page/events_2026_eastern_defense_summit",
    img: Event26.src,
    date: "December 8-10",
  },
];


const Events = ({ page, home }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredData = isMounted 
    ? data.filter(event => isEventActive(event.date))
    : data; // Show all on server to avoid layout shift, or empty if preferred

  return (
    <section className={`${styles.eventSection} ${page ? "p-100" : ""}`}>
      <Container>
        {!page && (
          <Row>
            <Col md={8} lg={7}>
              <h2>Events</h2>
              <p>
                Parraid actively engages with global aerospace, defense, and technology communities to showcase our latest innovations in tactical communications solutions, telemetry data systems, and deployable communication products.
              </p>
            </Col>
          </Row>
        )}

        <Row>
          <Col md={12} className={page ? "" : "mt-5"}>
            {(home ? filteredData.slice(0, 3) : filteredData).map((event, index) => (
              <div className={styles.eventWapper} key={index}>
                <div className={styles.eventImg}>
                  <Image src={event.img} alt="Event" width={520} height={391} />
                </div>

                <div className={styles.eventContent}>
                  <ul>
                    <li>{event.date}</li>
                  </ul>

                  <h2>{event.title}</h2>

                  <div className={styles.locaiotn}>
                    Location: {event.add}
                  </div>

                  <div className={styles.eventbtn}>
                    <SingleButton link={event.link} txt="Event Website" />
                  </div>
                </div>
              </div>
            ))}

            {!page && (
              <div className={styles.viewMore}>
                <SingleButton link="/events" txt="View All Events" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Events;
