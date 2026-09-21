import styles from "@/styles/home/team.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const CustomerBoxes = () => {
    return (
        <section className={`${styles.teamSection} ${styles.customerBoxesSec}`}>
            <Container className={styles.teamWapper}>
                <Row>
                    <Col md={6} lg={4}>
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Customization</div>
                            <div className={styles.txt}>Offering extensive customization support to meet the needs of product operators. Fielded equipment can be upgraded to meet changing operational and technology requirements.</div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Training</div>
                            <div className={styles.txt}>Comprehensive training is offered for both new and experienced users. The depth and breadth of both Operations and Applications training criteria are tailored to the needs of the equipment operators and programmers.</div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Partnerships</div>
                            <div className={styles.txt}>Parraid maintains professional partnerships with the most recognized and current technology industry leaders.</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CustomerBoxes