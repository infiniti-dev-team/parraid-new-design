import styles from "@/styles/components/customer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Download } from "@/src/app/app-constants";
import Link from "next/link";

const Support = () => {
    return (
        <section className={`${styles.supportSection} p-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={10} xl={10} className="m-auto text-center">
                        <h2>Contact Customer Support</h2>
                        <ul className={styles.supportList}>
                            <li><a href="tel:+13016900095">+1 (301) 690-0095</a></li>
                            <li><a href="mailto:support@parraid.com">support@parraid.com</a></li>
                            <li><Link href="/terms-conditions">Terms and Conditions</Link></li>
                        </ul>
                        <h4>Extended-Warranty-and-Support_04-06-2021</h4>
                        <button className={`${styles.downloadBtn} singleBtn`}>Download <Download /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Support