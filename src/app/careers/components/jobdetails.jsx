import styles from "@/styles/careers/jobdetails.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { ListIcon, ShareIcon } from "@/src/app/app-constants"

const JobDetails = ({ data }) => {
    return (
        <section className={styles.jobDetailsSection}>
            <Container >
                <Row>
                    <Col>
                        <div className={styles.jobDetailBox}>
                            <div className={styles.headerBox}>
                                <div className={styles.jobContent}>
                                    {data.jobHeader}
                                </div>
                                <div className={styles.jobBtn}>
                                    <ul>
                                        <li><a href={data.applyBtn}>Apply Now</a></li>
                                        <li><a href={data.shareBtn}><ShareIcon />Share</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                {data.mainTxt}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default JobDetails