import styles from "@/styles/pages/termpage.module.scss"
import { Col, Container, Row } from "react-bootstrap"

const Page = () => {
    return (
        <section className={styles.termPage}>
            <Container>
                <Row>
                    <Col>
                        <h1>Terms & Conditions</h1>
                        <div className={styles.termBox}>
                            <h4>Purchase Order Standard Terms & Conditions:</h4>

                            <a
                                href="/pdf/Purchase-Order-Standard-Terms-and-Conditions.pdf"
                                download="Purchase-Order-Standard-Terms-and-Conditions.pdf"
                            >
                                Download
                            </a>
                        </div>
                        <div className={styles.termBox}>
                            <h4>Purchase Order Standard Terms & Conditions:</h4>

                            <a
                                href="/pdf/Domestic-Terms-and-Conditions-of-Sale.pdf"
                                download="Domestic-Terms-and-Conditions-of-Sale.pdf"
                            >
                                Download
                            </a>
                        </div>

                        <div className={styles.termBox}>
                            <h4>For convenience, our customary NAICS codes:</h4>

                            <a
                                href="/pdf/Parraid-NAICS-Codes-DEC2020.pdf"
                                download="Parraid-NAICS-Codes-DEC2020.pdf"
                            >
                                Download
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section >
    )
}

export default Page
