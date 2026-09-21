"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/layout/header.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import {
  ClosedIcon,
  Linkedin,
  Youtube,
  MainLogo,
  NavIcon,
} from "@/src/app/app-constants";
import Link from "next/link";
import { SearchIcon } from "@/src/app/app-constants";
import { usePathname } from "next/navigation";
import Logo from "media/logo.webp"
import Image from "next/image";


const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setIsActive(false);
        document.body.classList.remove("active");
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (window.innerWidth < 767) {
      const newState = !isActive;
      setIsActive(newState);
      document.body.classList.toggle("active", newState);
    }
  };
  return (
    <section
      className={`${styles.headerSection} ${isScrolled ? styles.fixed : ""} `}
    >
      <Container
        className={`${styles.topHeader} ${pathname === "/" ? styles.home : ""}`}
      >
        <Row className="h-100">
          <Col className="my-auto">
            <div className={styles.leftTxt}>
              <div>
                Email :{" "}
                <Link href="mailto:sales@parraid.com">sales@parraid.com</Link>
              </div>
              <div>
                Call Us : <Link href="tel:+13016900690">+1 (301) 690-0690</Link>
              </div>
            </div>
          </Col>
          <Col className={`${styles.rightTxt} my-auto`}>
            <p>
              Follow Us :{" "}
              <a href="https://www.linkedin.com/company/parraid-llc" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="https://www.youtube.com/channel/UCrD_g4MeOeJXhTy21FN4fdA" target="_blank" rel="noopener noreferrer">
                <Youtube />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Container className={`${styles.headerContainer}`}>
        <Row className="h-100">
          <Col xs={6} md={3} className="my-auto">
            <div className={styles.mainLogo}>
              <Link href="/">
                {/* <MainLogo /> */}
                <Image src={Logo.src} alt="Parraid Logo" width={180} height={50} />
              </Link>
            </div>
          </Col>
          <Col xs={6} md={9} className="my-auto">
            <div
              onClick={handleClick}
              className={`${isActive ? "navIcon active" : "navIcon"}`}
            >
              {isActive ? <ClosedIcon /> : <NavIcon />}
            </div>
            <ul
              className={`${styles.headerNavigation} ${isActive ? styles.active : ""
                }`}
            >
              <li>
                <Link href="/about-us" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={handleClick}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/careers" onClick={handleClick}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press-release" onClick={handleClick}>
                  Press
                </Link>
              </li>
              <li>
                <Link href="/resources" onClick={handleClick}>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blogs" onClick={handleClick}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" onClick={handleClick}>
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="#">
                  <SearchIcon />
                </Link>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
