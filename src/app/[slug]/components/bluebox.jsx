import styles from "@/styles/category/bluebox.module.scss"
import { Col, Container, Row } from "react-bootstrap";
const BlueBox = ({ data }) => {
    return (
        <section className={styles.blueBanner}>
            <Container className={`${styles.blueBox}`}>
                <Row className="h-100">
                    <Col md={12} className="my-auto">{data.bluebox}</Col>
                </Row>
            </Container>

        </section>
    )
}

export default BlueBox