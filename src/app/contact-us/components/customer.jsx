import styles from "@/styles/components/customer.module.scss"
import { Col, Container, Row } from 'react-bootstrap'

const Customer = () => {
    return (
        <section className={`${styles.customerSec}`}>
            <Container>
                {/* <Row>
                    <Col md={12} className="text-md-center">
                        <h2>Customer Support</h2>
                    </Col>
                </Row> */}
                <Row>
                    <Col md={6} className={styles.paddingTop}>
                        <h2>Warranty Support</h2>
                        <p>
                            Three years of Warranty is included with every delivery of product hardware. Includes repair of any system component or module, separate or integrated, comprising the delivered product hardware having failed through normal operational use. Warranty Support is provided, with factory-based repair and minimal turn-around time.    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className={`${styles.paddingTop} offset-md-6`}>
                        <h2>Extended Warranty & Support</h2>
                        <p>
                            Tailored to customer-specific configurations – can be acquired throughout the delivered products’ lifetime.          </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Customer