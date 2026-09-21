import styles from "@/styles/about/aboutlist.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
import { ArrowICon } from "@/src/app/app-constants"

const AboutList = () => {
    return (
        <section className={styles.buildListSec}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.buildWapper}>
                            <div className={styles.buildItem}>
                                <div className={styles.number}>01</div>
                                <div className={styles.title}>
                                    <h4>Design</h4>
                                    <p>Parraid engineers understand and anticipate customer requirements and we’re committed to designing telemetry, data, and communications products and systems that matter.</p>
                                </div>
                                <div className={styles.btn}>
                                    <Link href="#Contact"><span>Let’s Connect</span> <ArrowICon /></Link>
                                </div>
                            </div>
                            <div className={styles.buildItem}>
                                <div className={styles.number}>02</div>
                                <div className={styles.title}>
                                    <h4>Build</h4>
                                    <p>Parraid’s goal is to build and deliver world class telemetry, data, and communications system solutions to our customers.</p>
                                </div>
                                <div className={styles.btn}>
                                    <Link href="#Contact"><span>Let’s Connect</span> <ArrowICon /></Link>
                                </div>
                            </div>
                            <div className={styles.buildItem}>
                                <div className={styles.number}>03</div>
                                <div className={styles.title}>
                                    <h4>Support</h4>
                                    <p>We provide rock solid product support with all new software deliveries and warranty our hardware for three years following delivery.</p>
                                </div>
                                <div className={styles.btn}>
                                    <Link href="#Contact"><span>Let’s Connect</span> <ArrowICon /></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutList