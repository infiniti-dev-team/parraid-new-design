"use client";
import { useState } from "react";
import styles from "@/styles/blogs/blogfaqs.module.scss";
import { PlusIcon } from "@/src/app/app-constants";

const FaqsBlog = ({ data, Black }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={`${styles.faqsBlog} ${Black ? styles.BlackColor : ""}`}>
      <h2>Frequently Asked Questions</h2>
      {data.map((items, index) => (
        <div
          className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""
            }`}
          key={index}
        >
          <div className={styles.faqsTitle} onClick={() => toggleFaq(index)}>
            {items.question}
            <div
              className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""
                }`}
            >
              <PlusIcon />
            </div>
          </div>
          <div className={styles.faqscontent}>{items.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FaqsBlog;
