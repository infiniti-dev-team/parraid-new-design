import ContactFrom from '@/src/app/components/contactfrom';
import styles from "@/styles/home/footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import FooterLinks from '@/src/app/layout/footerlinks';

const HomeFooter = () => {
    return (
        <footer className={styles.footerSection}>
            <Container className={`${styles.footerWapper}`}>
                <Row>
                    <Col md={12}>
                        <ContactFrom />
                        <FooterLinks />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default HomeFooter;
