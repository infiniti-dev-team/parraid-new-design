"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import styles from "@/styles/home/productcarousel.module.scss";
import TwoButton from "@/src/app/components/twobutton";
import { ServiceArrow } from "@/src/app/app-constants";

const ProductCarousel = ({ products }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCurrentIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const prevButtonHandler = () => embla && embla.scrollPrev();
  const nextButtonHandler = () => embla && embla.scrollNext();

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {products.map((item, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.productCard}>
                <h5>{item.name}</h5>

                <p>{item.txt}</p>
                <div className={styles.contentSec}>
                  <TwoButton
                    link1={`/product/${item.slug}`}
                    link2={`/product/${item.slug}/#ContactFrom`}
                    black={true}
                  />
                </div>
                <div className={`${styles[item.extra]}`}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={322}
                    height={118}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {products.length > 4 && (
        <div className="embla_container">
          <div className="embla_prev" onClick={prevButtonHandler}>
            <ServiceArrow direction="prev" />
          </div>
          <div className="embla_next" onClick={nextButtonHandler}>
            <ServiceArrow direction="next" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCarousel;
