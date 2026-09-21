"use client"
import { useState } from "react"
import styles from "@/styles/news/press.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowSmall } from "@/src/app/app-constants"


const Press = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    return (
        <section className={`${styles.pressSection}`}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.pressWapper}>
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.pressItem} ${activeIndex === index ? styles.active : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={styles.Title}>
                                        <div className={styles.date}>{item.date}</div>
                                        <h4>{item.title}</h4>
                                        <h6>{item.subtitle}</h6>
                                        <p>{item.para}</p>
                                        <Link href={`press-release/${item.slug}`}>Read More</Link>
                                    </div>
                                    <div className={styles.Btn}>
                                        <ArrowSmall />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Press