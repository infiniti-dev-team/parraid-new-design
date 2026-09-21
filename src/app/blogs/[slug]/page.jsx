import { notFound } from "next/navigation";
import { BlogListingData } from "@/src/app/data/blogs/data";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/blogs/blogdetails.module.scss";
import Image from "next/image";
import TableOfContents from "@/src/app/blogs/components/tablecontent";
import ContactForm from "@/src/app/components/forms/contactform";
import RelatedBlogs from "@/src/app/blogs/components/relateedblogs"; // fixed typo
import Faqs from "@/src/app/home/faqs";
import Clients from "@/src/app/home/clients";
import FaqsBlog from "@/src/app/blogs/components/faqsblog";


// -----------------------------
// Dynamic metadata for SEO
// -----------------------------
export async function generateMetadata({ params }) {
  // unwrap params
  const { slug } = await params;

  const blog = BlogListingData.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post does not exist.",
    };
  }

  return {
    title: blog.tit,
    description: blog.desc,
    openGraph: {
      title: blog.tit,
      description: blog.desc,
      images: [
        {
          url: blog.img,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
     canonical: `blogs/${blog.slug}`, // full URL for SEO
    },
  };
}

// -----------------------------
// Main Page Component
// -----------------------------

export default async function Page({ params }) {
  // unwrap params
  const { slug } = await params;

  const blog = BlogListingData.find((post) => post.slug === slug);

  if (!blog) return notFound();

  return (
    <>
      <section className={styles.blogDetails}>
        <Container>
          <Row>
            {/* Main Content */}
            <Col lg={8} className="order-2 order-lg-1">
              <h1>{blog?.title}</h1>

              <div className={styles.bannerImg}>
                {/* Ensure parent has position: relative */}
                <Image src={blog?.img} alt={blog?.title} fill />
              </div>

              {/* Blog main text */}
              {blog?.maintxt}

              {/* FAQs specific to blog */}
              {blog?.faqsData && <FaqsBlog data={blog.faqsData} />}
            </Col>

            {/* Sidebar */}
            <Col lg={4} className="order-1 order-lg-2">
              <TableOfContents tableContent={blog?.tableContent || []} />

              <div className={styles.blogFrom}>
                <ContactForm blogPage={true} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Related blogs */}
      <RelatedBlogs data={BlogListingData} currentSlug={slug} />

      {/* Clients section */}
      {/* <Clients noBorder={true} /> */}

      {/* General FAQs */}
      <Faqs />
    </>
  );
}
