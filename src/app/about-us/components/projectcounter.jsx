import styles from "@/styles/about/projectcounter.module.scss"
import { Col, Container, Row } from "react-bootstrap"


const ProjectCounter = () => {
    return (
        <section className={`${styles.projectCounterSec} borderRadiusTop `}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.projectWapper}>
                            <div className={styles.projectItem}>
                                150K+
                                <span>Active Users</span>
                            </div>
                            <div className={styles.projectItem}>
                                4.9
                                <span>Rating out of 5</span>
                            </div>
                            <div className={styles.projectItem}>
                                99K+
                                <span>Positive Reviews</span>
                            </div>
                            <div className={styles.projectItem}>
                                85+
                                <span>Users Satisfied</span>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectCounter