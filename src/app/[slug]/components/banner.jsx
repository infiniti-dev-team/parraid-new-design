import styles from "@/styles/products/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap";

const Banner = ({ data, pageDet }) => {
    return (
        <section className={`${styles.bannerSection} ${pageDet ? styles.pageDetails : ""}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col className="my-auto">
                        <h1>{data.title}</h1>
                        <div className={styles.paraSec}>
                            <p>{data.tittxt}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner