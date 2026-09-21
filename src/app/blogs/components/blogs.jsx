"use client";
import { useState } from "react";
import Image from 'next/image';
import styles from "@/styles/home/blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from 'next/link';
import { SearchIcon } from "@/src/app/app-constants";

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

const Blogs = ({ data }) => {
    const [search, setSearch] = useState("");

    const filteredData =
        search.length >= 3
            ? data.filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            )
            : data;

    return (
        <section className={`${styles.blogSection} ${styles.blogMainPage}`}>
            <Container>
                <Row>
                    <Col md={12} className="my-auto">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputStyle}>
                                <input
                                    type="text"
                                    name="search_blog_field"
                                    placeholder="Search Blogs..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck={false}
                                />
                                <SearchIcon />
                            </div>
                        </form>
                    </Col>

                    <Col md={12} className="my-auto">
                        <div className={styles.blogWapper}>
                            {filteredData.map((item, index) => (
                                <div className={styles.blogItem} key={index}>
                                    <div className={styles.blogImage}>
                                        <Image src={item.img} alt={item.title} fill />
                                    </div>

                                    <div className={styles.blogContent}>
                                        <div className={styles.dateSec}>
                                            <div className={styles.date}>{item.date}</div>
                                            <div className={styles.date}>
                                                {getTimeSince(item.date)}
                                            </div>
                                        </div>

                                        <h3>
                                            <Link href={`/blogs/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {search.length >= 3 && filteredData.length === 0 && (
                            <p className={styles.noResult}>No Blogs Found</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;