import styles from "@/styles/products/productlisting.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProductCarousel from "@/src/app/home/productcarousel";
import { productsData, tabList } from "@/src/app/data/products/data";
import React from "react";
import Link from "next/link";

const ProductListing = ({ id }) => {
    // Check if id is provided
    const hasId = id !== null && id !== undefined && id !== "";

    // If id is provided → find that tab only
    if (hasId) {
        const selectedTab = tabList.find((tab) => tab.id.toString() === id.toString());
        if (!selectedTab) return null;

        return (
            <section className={`${styles.productListing} p-100`}>
                <Container className="mb-3">
                    <Row>
                        <Col md={12}>
                            <h2>{selectedTab.label}</h2>
                        </Col>
                    </Row>
                </Container>
                <ProductCarousel products={productsData[selectedTab.id] || []} />
            </section>
        );
    }

    // Otherwise → show all tabs (old logic)
    return (
        <section className={`${styles.productListing}`}>
            {tabList.map((tab) => (
                <React.Fragment key={tab.id}>
                    <Container className="mb-3">
                        <Row className="h-100">
                            <Col md={9}>
                                <h2>{tab.label}</h2>
                            </Col>
                            <Col md={3} className="my-auto">
                                <div className={styles.tabLinks}>
                                    <Link href={tab.links} >Read More </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <ProductCarousel products={productsData[tab.id] || []} />
                </React.Fragment>
            ))}
        </section>
    );
};

export default ProductListing;
