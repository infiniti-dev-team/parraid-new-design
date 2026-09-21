"use client";
import { useState } from "react";
import styles from "@/styles/home/faqs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PlusIcon } from "@/src/app/app-constants";


const Faqs = ({ data, dataTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className={`${styles.faqsSection} `}>
      <Container className={styles.faqWapper}>
        <Row>
          <Col md={6} lg={6} xl={5}>
            <h2>{dataTitle.tit}</h2>
            <p>
              {dataTitle.desc}
            </p>
          </Col>
          <Col md={6} lg={6} xl={6} className="offset-xl-1">
            {data.map((items, index) => (
              <div
                className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""
                  }`}
                key={index}
              >
                <div
                  className={styles.faqsTitle}
                  onClick={() => toggleFaq(index)}
                >
                  {items.title}
                  <div
                    className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""
                      }`}
                  >
                    <PlusIcon />
                  </div>
                </div>
                <div className={styles.faqscontent}>{items.txt}</div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
