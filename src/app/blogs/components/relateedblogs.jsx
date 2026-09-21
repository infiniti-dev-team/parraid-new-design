import Image from 'next/image';
import styles from "@/styles/home/blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from 'next/link';


function getTimeSince(dateString) {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

const RelatedBlogs = ({ data, currentSlug }) => {
    const related = data.filter(post => post.slug !== currentSlug).slice(0, 3);
    return (
        <section className={`${styles.blogSection} ${styles.relatedBlog} borderRadiusTop p-100`}>
            <Container>
                <Row>
                    <Col md={8}>
                        <h2>Related Blogs</h2>
                        <p>Dive into our blog for the latest trends, tips, and insights in the world of design and AI
                            technology. Whether you’re looking for inspiration, tutorials, or industry news, our articles
                            are crafted to keep you informed and inspired.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.blogWapper}>
                            {related.map((item, index) => (
                                <div className={styles.blogItem} key={index}>
                                    <div className={styles.blogImage}>
                                        <Image src={item.img} alt={item.title} fill />
                                    </div>
                                    <div className={styles.blogContent}>
                                        <div className={styles.dateSec}>
                                            <div className={styles.date}>{item.date}</div>
                                            <div className={styles.date}>{getTimeSince(item.date)}</div>
                                        </div>
                                        <h3><Link href={`/blogs/${item.slug}`}>{item.title}</Link></h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RelatedBlogs;
