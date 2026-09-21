
"use client";
import styles from "@/styles/home/clients.module.scss";
import { Col, Container, Row } from "react-bootstrap";

import useEmblaCarousel from 'embla-carousel-react'

const Clients = ({ noBorder, data }) => {
    const [emblaRef] = useEmblaCarousel({ align: 'start' })
    return (
        <section className={`${styles.clientsSection} ${noBorder ? "" : "borderRadiusTop"} p-100`}>
            <Container>
                <Row>
                    <Col md={8}>
                        <h2>Testimonials</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.clientsItem}>
                                                <div className={styles.txt}>{item.txt}</div>
                                                <div className={styles.name}>{item.name}</div>
                                                <div className={styles.job}>{item.job}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Clients