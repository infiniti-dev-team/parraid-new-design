import styles from "@/styles/home/producttab.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProductCarousel from "@/src/app/home/productcarousel";
import { productsData } from "@/src/app/data/products/data";

const ProductList = ({ cat }) => {
  const categoryProducts = productsData[cat] || [];

  return (
    <section className={`${styles.productTabSec} p-100`}>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Our Products</h2>
            <p>
              Parraid, is a highly regarded, U.S. based technology and
              engineering company specializing in product solutions for
              aerospace and ground tactical applications.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row>
          <Col md={12} className="mt-md-3 mt-lg-5">
            <ProductCarousel products={categoryProducts} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductList;
