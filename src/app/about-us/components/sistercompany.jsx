import styles from "@/styles/about/sistercompany.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import LogoImage from "@/public/about/designLinx.webp"


const SisterCompany = () => {
    return (
        <section className={`${styles.sisterCompany} p-50 `}>
            <Container className={styles.boxCompany}>
                <Row>
                    <Col lg={6}>
                        <h2>DesignLinx</h2>
                        <p>As a sister company of Parraid, DesignLinx delivers innovative high‑performance FPGA, SoC, and embedded software design services. With our comprehensive QuickStart® support, we help you accelerate time‑to‑market, reduce development risks, and lower overall costs.</p>
                        <a href="https://www.designlinxhs.com/" target="_blank" rel="noopener noreferrer" className={styles.btnLearn}>
                            Learn More
                        </a>
                    </Col>
                    <Col lg={6} className="m-lg-auto text-lg-center">
                        <a href="https://www.designlinxhs.com/" target="_blank" rel="noopener noreferrer">
                            <Image src={LogoImage.src} alt="Design Linxhs" width={1024} height={355} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SisterCompany