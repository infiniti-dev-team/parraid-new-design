"use client";
import { useState } from "react";
import styles from "@/styles/resources/listing.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { SearchIcon } from "@/src/app/app-constants";


const ListingPage = ({ data }) => {
    const [search, setSearch] = useState("");

    const filteredData =
        search.length >= 3
            ? data.filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            )
            : data;
    return (
        <section className={styles.listingPages}>
            <Container>
                <Row>
                    <Col md={12} className="my-auto">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputStyle}>
                                <input
                                    type="text"
                                    name="search_blog_field"
                                    placeholder="Search Resources..."
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
                    <Col lg={12}>
                        <div className={styles.listingPageSec}>
                            {filteredData.map((item, index) => (
                                <div className={styles.listingPageItem} key={index}>
                                    <Link href={item.slug}>{item.title}</Link>
                                </div>
                            ))}
                        </div>
                        {search.length >= 3 && filteredData.length === 0 && (
                            <p className={styles.noResult}>No Resources Found</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ListingPage

