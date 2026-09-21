
"use client";
import styles from "@/styles/home/clients.module.scss";
import { Col, Container, Row } from "react-bootstrap";

import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";


import IMG01 from "media/clients/1.webp"
import IMG02 from "media/clients/2.webp"
import IMG04 from "media/clients/4.webp"
import IMG05 from "media/clients/5.webp"
import IMG06 from "media/clients/6.webp"

export const clientData = [
    {
        name: "Rachel M.",
        txt: "We’ve tried several solutions before, but nothing matched the precision and uptime of this product.",
        job: "Studio City",
        pic: IMG01.src
    },
    {
        name: "David K.",
        txt: "We’ve tried several solutions before, but nothing matched the precision and uptime of this product.",
        job: "Burbank",
        pic: IMG02.src
    },
    {
        name: "Samantha L.",
        txt: "We’ve tried several solutions before, but nothing matched the precision and uptime of this product.",
        job: "North Hollywood",
        pic: IMG04.src
    },
    {
        name: "Carlos R.",
        txt: "We’ve tried several solutions before, but nothing matched the precision and uptime of this product.",
        job: "Valley Village",
        pic: IMG01.src
    },
    {
        name: "Smith S.",
        txt: "We’ve tried several solutions before, but nothing matched the precision and uptime of this product.",
        job: "Sherman Oaks",
        pic: IMG05.src
    },
    {
        name: "Justin H.",
        txt: "We’ve tried several solutions before, but nothing matched the precision and uptime of this product.",
        job: "Toluca Lake",
        pic: IMG06.src
    },
]

const Clients = ({ noBorder }) => {
    const [emblaRef] = useEmblaCarousel({ align: 'start' })
    return (
        <section className={`${styles.clientsSection} ${noBorder ? "" : "borderRadiusTop"} p-100`}>
            <Container>
                <Row>
                    <Col md={8}>
                        <h2>Ready to Replace Your Old Floors? </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {clientData.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.clientsItem}>
                                                <div className={styles.txt}>{item.txt}</div>
                                                <div className={styles.pic}>
                                                    <Image src={item.pic} alt={item.name} fill />
                                                </div>
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