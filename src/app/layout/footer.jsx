import ContactFrom from '@/src/app/components/contactfrom'
import styles from "@/styles/layout/footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import FooterLinks from '@/src/app/layout/footerlinks';


const Footer = () => {
    return (
        <section className={styles.footerSection}>
            <Container className={`${styles.footerWapper}`}>
                <Row>
                    <Col md={12}>
                        <ContactFrom />
                        <FooterLinks />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer