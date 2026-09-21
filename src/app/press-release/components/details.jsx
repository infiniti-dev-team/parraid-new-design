"use client";
import React, { useState, useEffect } from "react";
import styles from '@/styles/news/pressdetails.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { PressData } from "@/src/app/data/press-release/data"
import RecentPress from "@/src/app/press-release/components/recentpress";

const PressDetails = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const tableContent = data.tableContent;
    useEffect(() => {
        const handleScroll = () => {
            let currentIndex = null;
            tableContent.forEach((_, index) => {
                const section = document.getElementById(`Section-${index + 1}`);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 110 && rect.bottom >= 120) {
                        currentIndex = index;
                    }
                }
            });
            if (currentIndex !== null) {
                setActiveIndex(currentIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [tableContent]);

    const handleScroll = (id, index) => {
        setActiveIndex(index);
        const element = document.getElementById(id);
        if (element) {
            const offset = 110;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };
    return (
        <section className={`${styles.pressDetailsSection}`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.detailsSection}>
                            <div className={styles.detailsRight}>
                                <h1> {data.title}</h1>
                                {data.maincontent}
                            </div>

                            <div className={styles.detailsLeft}>
                                {tableContent && tableContent.length > 0 ? (
                                    <div className={styles.tableOfContent}>
                                        <h5>Table of Content</h5>
                                        <ul>
                                            {tableContent.map((item, index) => (
                                                <li key={index}>
                                                    <a
                                                        className={activeIndex === index ? styles.active : ""}
                                                        href={`#Section-${index + 1}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleScroll(`Section-${index + 1}`, index);
                                                        }}
                                                    >
                                                        {item.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null
                                }
                                <div className={styles.recentNews}>
                                    <h5>Recent News</h5>
                                    <RecentPress data={PressData} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PressDetails