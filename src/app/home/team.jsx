import styles from "@/styles/home/team.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BGIMG from "media/home/team.webp";

const Team = () => {
    return (
        <section className={styles.teamSection}>
            <Container className={styles.teamBg} style={{ backgroundImage: `url('${BGIMG.src}')` }}>
                <Row>
                    <Col md={6} lg={6}>
                        <h2>Current Job Openings</h2>
                        <p>Parraid, based in Hollywood, MD, specializes in telemetry data systems and mission-critical communications, with strong products, a skilled team, and a growing client base.</p>
                        <a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=0342344f-f0a8-4de6-b4c9-05cd95b670db&ccId=19000101_000001&lang=en_US" target="_blank" className="singleBtn">View Job Openings</a>
                    </Col>
                </Row>
            </Container>
            <Container className={`${styles.teamWapper} ${styles.carreerTeamWapper}`}>
                <Row>
                    <Col md={12} lg={12} className="mx-auto">
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Medical, Dental, Vision, and Wellness</div>
                            <div className={styles.txt}>We offer health and welfare benefits to help keep you and your family healthy, including a wellness program that may help you identify and address certain health issues.</div>
                        </div>
                    </Col>
                    {/* <Col md={6} lg={8} className="mx-auto">
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Medical, Dental, Vision, and Wellness</div>
                            <div className={styles.txt}>We offer health and welfare benefits to help keep you and your family healthy, including a wellness program that may help you identify and address certain health issues.</div>
                        </div>
                    </Col> */}
                    {/* <Col md={6} lg={4}>
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Medical, Dental, Vision, and Wellness</div>
                            <div className={styles.txt}>We offer health and welfare benefits to help keep you and your family healthy, including a wellness program that may help you identify and address certain health issues.</div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Team