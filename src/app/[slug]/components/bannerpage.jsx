import styles from "@/styles/products/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap";

const BannerPage = ({ data, page, pageDet }) => {
    return (
        <section className={`${styles.bannerSection} ${page ? styles.pageBanner : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col className="my-auto" md={12} lg={9}>
                        <h1>{data.title}</h1>
                        {data.tittxt}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerPage