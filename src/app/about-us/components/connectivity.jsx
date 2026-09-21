import styles from "@/styles/about/connectivity.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import SingleButton from "@/src/app/components/singlebutton"
import IMG from "media/about/vissionImg.webp"

const Connectivity = () => {
    return (
        <>
            <section className={`${styles.connectivitySec}  borderRadiusTop`}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.connectivityTitle}>
                                <h2>Next-Gen Telemetry & Connectivity.</h2>
                                <p>Parraid delivers next-generation telemetry solutions for real-time data transmission across land, air, sea, and space. Our resilient systems ensure secure, uninterrupted communication for mission-critical operations.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section
                className={`${styles.connectivityPoints} borderRadiusTop`}
                style={{ backgroundImage: `url(${IMG.src})` }}
            >
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.connectivityList}>
                                <h3>Our Mission</h3>
                                <p>Sustained excellence in meeting customer requirements for telemetry, data, and communications products by:</p>
                                <ul>
                                    <li>Enhancing the reputation and recognition of our company</li>
                                    <li>Attracting and retaining quality professionals</li>
                                    <li>Earning a high degree of customer satisfaction and loyalty</li>
                                    <li>Increasing and diversifying our product portfolio and associated customer base</li>
                                    <li>Continually improving the way we engineer and manufacture our products</li>
                                </ul>
                                <SingleButton link="#Contact" whitebg={true} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.connectivityList} ${styles.visionList}`}>
                                <h3>Our Vision</h3>
                                <SingleButton link="#Contact" whitebg={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>

    )
}

export default Connectivity