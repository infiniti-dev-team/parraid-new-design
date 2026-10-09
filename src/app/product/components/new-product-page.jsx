"use client";
import Image from "next/image";
import styles from "@/styles/products/new-product-page.module.scss";
import ProductFindOutPossible from "./product-find-out-possible";
import OwlInteractiveDiagram from "./owl-interactive-diagram";

export default function NewProductPage({ product }) {
  if (!product) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.notFoundWrapper}>
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist or has been relocated.</p>
          <a href="/product" className={styles.backHomeBtn}>
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  // Render title into Bold Brand + Regular Hyphen + Light Subtitle matching Figma
  const renderProductHeading = (prod) => {
    if (!prod) return null;
    if (prod.titleBold) {
      return (
        <h1 className={styles.productHeading}>
          <span className={styles.headingBold}>{prod.titleBold}</span>
          {prod.titleDash && <span className={styles.headingDash}>-</span>}
          {prod.titleLight && (
            <span className={styles.headingLight}>{prod.titleLight}</span>
          )}
        </h1>
      );
    }

    const title = prod.title || "";
    const parts = title.split(/\s+[-—]\s+/);

    if (parts.length > 1) {
      return (
        <h1 className={styles.productHeading}>
          <span className={styles.headingBold}>{parts[0]}</span>
          <span className={styles.headingDash}>-</span>
          <span className={styles.headingLight}>{parts.slice(1).join(" - ")}</span>
        </h1>
      );
    }

    return (
      <h1 className={styles.productHeading}>
        <span className={styles.headingBold}>{title}</span>
      </h1>
    );
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Exact Figma SVG blurred ambient ellipse glows */}
      <div
        className={`${styles.auraOverlay} ${
          product.slug === "ode" || product.slug === "edge2"
            ? styles.tallHeroAura
            : ""
        }`}
        aria-hidden="true"
      >
        <div className={styles.ellipseRightContainer}>
          <div className={styles.ellipseRightInner}>
            <img
              src="/products/new-images/ellipse-bg-1.svg"
              alt=""
              className={styles.ellipseImg}
            />
          </div>
        </div>
        <div className={styles.ellipseLeftContainer}>
          <div className={styles.ellipseLeftInner}>
            <img
              src="/products/new-images/ellipse-bg-2.svg"
              alt=""
              className={styles.ellipseImg}
            />
          </div>
        </div>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.productContainer}>
          {/* 1. Hero Product Photo (Centered at top) */}
          <section className={styles.heroImageSection}>
            <div className={styles.imageStage}>
              <div
                className={styles.mainImgWrapper}
                style={{
                  maxWidth: product.imageWidth ? `${product.imageWidth}px` : undefined,
                }}
              >
                <Image
                  src={product.mainImage}
                  alt={product.title}
                  width={product.imageWidth || 960}
                  height={product.imageHeight || 680}
                  priority
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1100px"
                  className={styles.mainImg}
                />
              </div>
            </div>
          </section>

          {/* 2. Product Title Block (Wide on Left) */}
          <section className={styles.titleSection}>
            {renderProductHeading(product)}
            {product.subheading && (
              <p
                className={`${styles.subheading} ${
                  product.titleLight &&
                  product.titleLight.toLowerCase().trim() ===
                    product.subheading.toLowerCase().trim()
                    ? styles.hideOnMobileIfDuplicate
                    : ""
                }`}
              >
                {product.subheading}
              </p>
            )}

            <div className={styles.actionRow}>
              {product.flyer ? (
                <a
                  href={product.flyer}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadBtn}
                  aria-label={`Download details flyer for ${product.title}`}
                >
                  Download Details
                </a>
              ) : (
                <a
                  href="#Contact"
                  className={styles.downloadBtn}
                  aria-label="Request product details"
                >
                  Download Details
                </a>
              )}
            </div>
          </section>

          {/* 3. Staggered Top Description (Right-Aligned below Download Details) */}
          {product.topParagraph && (
            <section className={styles.topDescSection}>
              <p className={styles.topParagraph}>{product.topParagraph}</p>
            </section>
          )}

          {/* 4. Left-Aligned Content (Bullets / Dual Section / Subsections / OWL Diagram) */}
          {/* 4a. Bullets Section */}
          {product.bullets && product.bullets.length > 0 && (
            <section
              className={`${styles.bulletsSection} ${
                product.bulletMaxWidth === 870 ? styles.narrowBullets : ""
              }`}
            >
              <ul
                className={`${styles.bulletList} ${
                  product.bulletFont === "poppins" ? styles.poppinsBullets : ""
                }`}
              >
                {product.bullets.map((bullet, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    <span className={styles.bulletText}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 4b. Dual Section with Side Image (EDGE2, IMUX G2e) */}
          {product.secondSection && (
            <section className={styles.secondSection}>
              <div className={styles.secondSectionRow}>
                <div className={styles.secondTextCol}>
                  {product.secondSection.title && (
                    <h2 className={styles.secondHeading}>
                      {product.secondSection.title}
                    </h2>
                  )}
                  <p className={styles.secondParagraph}>
                    {product.secondSection.paragraph}
                  </p>
                </div>

                {product.secondSection.image && (
                  <div className={styles.secondImageCol}>
                    <div className={styles.secondImgWrapper}>
                      <Image
                        src={product.secondSection.image}
                        alt={
                          product.secondSection.imageAlt ||
                          product.secondSection.title ||
                          "Product Feature"
                        }
                        width={product.secondSection.imageWidth || 688}
                        height={product.secondSection.imageHeight || 380}
                        priority
                        className={styles.secondImg}
                      />
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 4c. Subsections / Algorithms (BSR-100, BDE, OMEGA NExT, Rx2) */}
          {product.subsections && product.subsections.length > 0 && (
            <section className={styles.subsectionsArea}>
              {product.subsections.map((sub, idx) => (
                <div key={idx} className={styles.subsectionBlock}>
                  <h2 className={styles.subsectionTitle}>{sub.title}</h2>
                  {sub.content && (
                    <p className={styles.subsectionText}>{sub.content}</p>
                  )}
                  {sub.items && (
                    <ul className={styles.subsectionList}>
                      {sub.items.map((item, itemIdx) => (
                        <li key={itemIdx} className={styles.subsectionListItem}>
                          <span className={styles.bulletText}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* 4d. Extra paragraph for S-5000e, NRG RM-XX, RUH3 */}
          {product.secondParagraph && (
            <section className={styles.extraParagraphSection}>
              <p
                className={`${styles.secondParagraph} ${
                  product.secondParagraphFont === "poppins"
                    ? styles.poppinsParagraph
                    : ""
                }`}
              >
                {product.secondParagraph}
              </p>
            </section>
          )}

          {/* 4e. OWL Interactive Soldier Silhouette Diagram */}
          {product.isOwl && (
            <section className={styles.owlSection}>
              <OwlInteractiveDiagram />
            </section>
          )}
        </div>
      </main>

      {/* 5. Bottom Contact Form Section matching mockups */}
      <div className={styles.contactWrapper}>
        <ProductFindOutPossible />
      </div>
    </div>
  );
}
