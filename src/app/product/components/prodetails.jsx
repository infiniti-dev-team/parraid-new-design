"use client";
import { Children, cloneElement, isValidElement, useState } from "react";
import styles from "@/styles/products/prodetails.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import { ListIcon, TabIcon } from "@/src/app/app-constants";

const isListIcon = (child) =>
  isValidElement(child) && child.type === ListIcon;

const mergeClassNames = (...classNames) => classNames.filter(Boolean).join(" ");

const normalizeProductContent = (node) => {
  if (!isValidElement(node)) return node;

  const children = Children.toArray(node.props.children);

  if (node.type === "li") {
    const iconIndex = children.findIndex(isListIcon);

    if (iconIndex >= 0) {
      const icon = children[iconIndex];
      const content = children.filter((_, index) => index !== iconIndex);

      return cloneElement(
        node,
        {
          className: mergeClassNames(node.props.className, styles.iconListItem),
        },
        <span className={styles.listIcon}>{icon}</span>,
        <div className={styles.listText}>
          {content.map((child) => normalizeProductContent(child))}
        </div>
      );
    }
  }

  if (children.length === 0) return node;

  return cloneElement(
    node,
    node.props,
    children.map((child) => normalizeProductContent(child))
  );
};

const ProDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0].src);
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = [
    { key: "tab1", label: "Overview" },
    { key: "tab2", label: "Key System Advantage" },
    { key: "tab3", label: "Capabilities" },
    { key: "tab5", label: "Features" },
    { key: "tab6", label: "Interoperability" },
    { key: "tab4", label: "Data Sheets" },
  ];
  return (
    <section className={styles.ProDetails}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={styles.mainImage}>
              <Image src={mainImage} alt="Slider" fill />
            </div>
            <div className={styles.imageSlide}>
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={styles.imgBox}
                  onClick={() => setMainImage(img.src)}
                >
                  <Image src={img.src} alt={`Slider ${index}`} fill />
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.ImgContent}>
              <h2>{product.name}</h2>
              {normalizeProductContent(product.txt)}

            </div>
          </Col>
          <Col>
            <div className={styles.tabDescription}>
              <div className={styles.tabList}>
                {tabs
                  .filter((tab) => product[tab.key]) // sirf un tabs ko rakho jinke liye content hai
                  .map((tab) => (
                    <div
                      key={tab.key}
                      className={`${styles.tabItem} ${activeTab === tab.key ? styles.active : ""
                        }`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      <h4>
                        {tab.label} <TabIcon />
                      </h4>
                    </div>
                  ))}
              </div>

              <div className={styles.tabContent}>
                {product[activeTab] ? (
                  normalizeProductContent(product[activeTab])
                ) : (
                  <p>No data available for this section.</p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProDetails;
