"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/home/blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { BlogListingData } from "@/src/app/data/blogs/data";

function getTimeSince(dateString) {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

const Blogs = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={`${styles.blogSection} p-100 `}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={10} lg={8} className="my-auto">
            <h2>Stay Inspired with Our Latest Insights</h2>
            <p>
              Explore Parraid’s knowledge hub for expert perspectives, product updates, and industry trends shaping the future of tactical communications systems and telemetry communication solutions. From field-tested innovations to advanced deployable communication products, our articles deliver actionable insights for engineers, defense professionals, and mission planners.
            </p>
          </Col>
          <Col md={12} className="my-auto">
            <div className={styles.blogWapper}>
              {BlogListingData.slice(0, 3).map((item, index) => (
                <div className={styles.blogItem} key={index}>
                  <div className={styles.blogImage}>
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <div className={styles.blogContent}>
                    <div className={styles.dateSec}>
                      <div className={styles.date}>{item.date}</div>
                      <div className={styles.date}>
                        {isMounted ? getTimeSince(item.date) : item.date}
                      </div>
                    </div>
                    <h3>
                      <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
