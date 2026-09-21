"use client";
import { useState } from "react";
import styles from "@/styles/home/producttab.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProductCarousel from "@/src/app/home/productcarousel";
import { productsData, tabList } from "@/src/app/data/products/data";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("cat2");

  return (
    <section className={`${styles.productTabSec} p-100`}>
      <Container>
        <Row>
          <Col md={8}>
            <h2>Our Products</h2>
            <p>
              At Parraid, LLC, we engineer and deliver mission-ready systems
              that power connectivity, data reliability, and operational
              precision across the world’s most demanding environments. Our
              portfolio combines cutting-edge telemetry data systems,
              advanced tactical communications solutions, and rugged, field-proven
              deployable communication products designed for defense, aerospace,
              and government applications.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={styles.customTabs}>
              {tabList.map((tab) => (
                <div
                  key={tab.id}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row>
          <Col md={12}>
            <div className={styles.tabContent}>
              {activeTab === "cat1" && (
                <ProductCarousel products={productsData.cat1} />
              )}
              {activeTab === "cat2" && (
                <ProductCarousel products={productsData.cat2} />
              )}
              {activeTab === "cat3" && (
                <ProductCarousel products={productsData.cat3} />
              )}
              {activeTab === "cat4" && (
                <ProductCarousel products={productsData.cat4} />
              )}
              {activeTab === "cat5" && (
                <ProductCarousel products={productsData.cat5} />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTab;
