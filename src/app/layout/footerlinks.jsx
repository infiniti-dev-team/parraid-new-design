import styles from "@/styles/layout/footerlinks.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { EmailIcon, LocationIcon, MainLogo, PhoneIcon, TimingIcon } from "@/src/app/app-constants";
import Link from "next/link";
import Logo from "media/logo.webp"
import Image from "next/image";

const FooterLinks = () => {
    return (
        <section className={`${styles.footerSection} `}>
            <Container className={styles.contactWapper}>
                <Row>
                    <Col md={12} lg={3}>
                        <div className={styles.MianLogo}>
                            <Image src={Logo.src} alt="Parraid Logo" width={230} height={60} />
                            <p>Parraid delivers mission-critical telemetry and tactical communications solutions designed to perform when failure is not an option.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={7}>
                        <div className={styles.serviceStyle}>
                            <h6>Our Products</h6>
                            <ul>
                                <li><Link href="/product/edge2-telemetry-receiver">Edge2™ - Receiver Network Appliance (Portable and rack mount)</Link></li>
                                <li><Link href="/product/network-radio-gateway-ds-04v3">Network Radio Gateway (NRG®) (DS-04V3)</Link></li>
                                <li><Link href="/product/imux-g2e-and-g2eh-recorders">IMUX G2e™ AND IMUX G2eH™</Link></li>
                                <li><Link href="/product/our-featured-network-radio-gateway">PacStar® 466 – Featuring Parraid’s Network Radio Gateway (NRG®)</Link></li>
                                <li><Link href="/product/omega-next-real-time-data-processing-software">OMEGA NExT™ </Link></li>
                                <li><Link href="/product/outsource-the-workload-owl">Outsource the Workload (OWL™)</Link></li>
                                <li><Link href="/product/series-5000-data-processors">S-5000e™ – Data Processor and Recorder</Link></li>
                                <li><Link href="/product/network-radio-gateway-nrg-deployable-systems">Network Radio Gateway rack mount systems</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className={`${styles.serviceStyle} ${styles.servicelast}`}>
                            <h6>Quick Links</h6>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=0342344f-f0a8-4de6-b4c9-05cd95b670db&ccId=19000101_000001&lang=en_US">Open Position</a></li>
                                <li><Link href="/blogs">Blogs</Link></li>
                                <li><Link href="/press-release">Press</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.footerInfo}>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}> <PhoneIcon /> PHONE</div>
                                <div className={styles.value}>
                                    <a href="tel:+1(301)690-0690">+1 (301) 690-0690</a><br />
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><EmailIcon />Email</div>
                                <div className={styles.value}>
                                    <a href="mailto:sales@parraid.com">sales@parraid.com</a>
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><LocationIcon />Address</div>
                                <div className={styles.value}>
                                    <a href="#">44150 Smartronix Way <br /> Hollywood, MD 20636</a>
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><TimingIcon />Opening Hours</div>
                                <div className={styles.value}>
                                    Mon to Fri: 8:00am - 5:00pm ET<br />
                                    Sat and Sun: Closed
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.copyrightSection}>
                    <Col md={12} lg={6}>
                        <div className={styles.copyRightSec}>
                            <p>Copyright © 2026 all rights reserved.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className={`${styles.copyRightSec} ${styles.RightTxt}`}>
                            <p>Designed / Developed By <a href="https://www.infinitidigital.us" target="_blank" rel="noopener noreferrer">Infiniti Digital Marketing Agency</a></p>
                        </div>
                    </Col>
                    {/* <div className={styles.logoTxt}>
                        <Image src={Logo.src} alt="Parraid Logo" fill />
                    </div> */}
                </Row>
            </Container>
        </section >
    )
}
export default FooterLinks
