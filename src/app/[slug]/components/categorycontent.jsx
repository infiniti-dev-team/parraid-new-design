import styles from "@/styles/category/category.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

const CategoryContent = ({ data }) => {
    return (
        <section className={`${styles.categorySection}  borderRadiusTop`}>
            <Container>
                <Row>
                    <Col md={10} className="m-auto text-center">
                        <h2>{data.maintitle}</h2>
                        <p>{data.maintxt}</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6} className="my-auto">
                        {data.maintxt1}
                    </Col>
                    <Col md={5} className="offset-md-1 my-auto">
                        <div className={styles.ImgBox}>
                            <Image src={data.img1} alt="Image" fill />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={5} className=" my-auto">
                        <div className={styles.ImgBox}>
                            <Image src={data.img2} alt="Image" fill />
                        </div>
                    </Col>
                    <Col md={6} className="my-auto offset-md-1">
                        {data.maintxt2}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CategoryContent