import styles from "@/styles/category/category.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import FaqsBlog from "@/src/app/blogs/components/faqsblog";
import ClientsPage from "@/src/app/[slug]/components/clientspage";

const PageContent = ({ data, blue }) => {
    return (
        <section className={`${styles.categorySection} ${blue ? styles.blueHeading : ""} borderRadiusTop`}>
            <Container>

                <Row className="mt-5">
                    <Col md={6} className="my-auto">
                        <h2>{data.maintitle}</h2>
                        {data.maintxt}
                    </Col>
                    <Col md={5} className="offset-md-1 my-auto">
                        <div className={styles.ImgBox}>
                            <Image src={data.img} alt="Image" fill />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12} className="m-auto">
                        {data.maintxt1}
                        <div className={styles.ImgBox}>
                            <Image src={data.img2} alt="Image" fill />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12} >
                        <h2>{data.maintitle2}</h2>
                        {data.maintxt2}
                    </Col>
                    {data.maintitle3 ? (
                        <Col md={12}>
                            <h2>{data.maintitle3}</h2>
                            {data.maintxt3}
                        </Col>
                    ) : null
                    }

                </Row>
                <Row>
                    <Col md={12} className="m-auto">
                        {data.TestData && <ClientsPage data={data.TestData} Black={true} />}
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto">
                        {data.faqsData && <FaqsBlog data={data.faqsData} Black={true} />}
                    </Col>
                </Row>
                {data.contactTitle && data.contacttxt ? (
                    <Row className="mt-5">
                        <Col md={12} className="m-auto text-center">
                            <div className={styles.contactUS}>
                                <h2>{data.contactTitle}</h2>
                                {data.contacttxt}
                            </div>
                        </Col>
                    </Row>
                ) : null}
            </Container>
        </section>
    )
}

export default PageContent