import styles from "@/styles/careers/jobs.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { DownloadIcon } from "@/src/app/app-constants"
import Link from "next/link"

const Jobs = ({ data }) => {
    return (
        <section className={`${styles.jobsSection} p-100`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Current Job Openings</h2>
                        <p>Parraid, based in Hollywood, MD, specializes in telemetry data systems and mission-critical communications, with strong products, a skilled team, and a growing client base.</p>
                        <a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=0342344f-f0a8-4de6-b4c9-05cd95b670db&ccId=19000101_000001&lang=en_US" target="_blank" className="singleBtn">Open Position</a>
                    </Col>
                    {/* <Col md={12}>
                        <div className={`${styles.tableResponsive} `}>
                            <div className={styles.headingTable}>
                                <ul>
                                    <li>Position</li>
                                    <li>Location</li>
                                    <li>Type</li>
                                    <li>Status</li>
                                    <li>Already Applied</li>
                                    <li>Action</li>
                                </ul>
                            </div>
                            <div className={styles.contentTable}>
                                {data.map((item, index) => (
                                    <ul key={index}>
                                        <li>{item.job}</li>
                                        <li>{item.loc}</li>
                                        <li>{item.type}</li>
                                        <li>{item.ative}</li>
                                        <li>{item.applied}</li>
                                        <li><Link href={`/careers/${item.slug}`}><DownloadIcon /></Link></li>
                                    </ul>
                                ))}

                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Jobs