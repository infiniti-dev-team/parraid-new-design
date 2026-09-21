"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/layout/header.module.scss";
import { Container } from "react-bootstrap";
import { ClosedIcon, NavIcon } from "@/src/app/app-constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoWhite from "@/public/logo-white.webp";

const telemetryData = {
  title: "TELEMETRY",
  secondaryTitle: "COMMUNICATIONS",
  categories: [
    {
      id: "recorders",
      label: "+ RECORDERS",
      products: [
        {
          name: "IMUX RE/CON",
          href: "/product/imux-re-con-newtwork-recorder",
          image: "/products/dropdown/imux-recon.webp",
          imgWidth: 120,
          imgHeight: 28,
        },
        {
          name: "IMUX G2e",
          href: "/product/imux-g2e-and-g2eh-recorders",
          image: "/products/dropdown/imux-g2e.webp",
          imgWidth: 120,
          imgHeight: 28,
        },
        {
          name: "IMUX G2eHybrid",
          href: "/product/imux-g2e-and-g2eh-recorders",
          image: "/products/dropdown/imux-g2e-hybrid.webp",
          imgWidth: 80,
          imgHeight: 32,
        },
      ],
    },
    {
      id: "receivers",
      label: "+ RECEIVERS",
      products: [
        {
          name: "Edge2™ Receiver",
          href: "/product/edge2-telemetry-receiver",
          image: "/products/cat3/pro3/Edge2-Main.webp",
          imgWidth: 100,
          imgHeight: 28,
        },
        {
          name: "Rx2 Multi-Channel",
          href: "/product/rx2-receiver",
          image: "/products/cat3/pro9/Rx2-Main.webp",
          imgWidth: 85,
          imgHeight: 32,
        },
        {
          name: "BSR-100 Receiver",
          href: "/product/best-source-reproducer-bsr-100",
          image: "/products/cat3/pro2/BSR-100-Main.webp",
          imgWidth: 85,
          imgHeight: 30,
        },
      ],
    },
    {
      id: "software",
      label: "+ SOFTWARE",
      products: [
        {
          name: "OMEGA NExT™",
          href: "/product/omega-next-real-time-data-processing-software",
          image: "/products/cat3/pro8/OMEGA-NExT-Main.webp",
          imgWidth: 60,
          imgHeight: 32,
        },
        {
          name: "Best Data Engine (BDE™)",
          href: "/product/best-data-engine-bde",
          image: "/products/cat3/pro1/BDE-Best-Data-Engine-Main.webp",
          imgWidth: 45,
          imgHeight: 32,
        },
        {
          name: "OMEGA Data Environment (ODE™)",
          href: "/product/omega-data-environment-ode",
          image: "/products/cat3/pro7/ODE-Omega-Data-Environment-Main.webp",
          imgWidth: 60,
          imgHeight: 32,
        },
      ],
    },
  ],
};

const communicationsData = {
  title: "COMMUNICATIONS",
  secondaryTitle: "TELEMETRY",
  categories: [
    {
      id: "gateways",
      label: "+ GATEWAYS",
      products: [
        {
          name: "NRG® DS-04V3",
          href: "/product/network-radio-gateway-ds-04v3",
          image: "/products/cat1/pro1/NRG-DS-04v3-Main.webp",
          imgWidth: 110,
          imgHeight: 28,
        },
        {
          name: "NRG® Rack Mount",
          href: "/product/network-radio-gateway-nrg-deployable-systems",
          image: "/products/cat1/pro2/NRG-RM-Rack-Mount-Main.webp",
          imgWidth: 110,
          imgHeight: 28,
        },
        {
          name: "PacStar® 466 (NRG®)",
          href: "/product/our-featured-network-radio-gateway",
          image: "/products/cat1/pro4/NRG-PacStar-466-Main.webp",
          imgWidth: 60,
          imgHeight: 32,
        },
      ],
    },
    {
      id: "tactical-usb",
      label: "+ TACTICAL & USB",
      products: [
        {
          name: "Rugged USB Hub (RUH)",
          href: "/product/rugged-usb-hub-2-0",
          image: "/products/cat2/pro1/Ruged-USB-Hub-RUH-Main.webp",
          imgWidth: 55,
          imgHeight: 32,
        },
        {
          name: "Rugged USB Repeater (RUR)",
          href: "/product/rugged-usb-repeater",
          image: "/products/cat2/pro3/Rugged-USB-Repeater-RUR-Main.webp",
          imgWidth: 70,
          imgHeight: 30,
        },
        {
          name: "Radio Adapter Cables (RDA)",
          href: "/product/radio-data-adapter-rda-cables",
          image: "/products/cat1/pro5/Radio-Adapter-Cable-RDA-Main.webp",
          imgWidth: 50,
          imgHeight: 32,
        },
      ],
    },
    {
      id: "interoperability",
      label: "+ INTEROPERABILITY",
      products: [
        {
          name: "Outsource the Workload (OWL™)",
          href: "/product/outsource-the-workload-owl",
          image: "/products/cat1/pro3/OWL-Outsource-the-Workload-Main.webp",
          imgWidth: 55,
          imgHeight: 32,
        },
        {
          name: "Series 5000e Data Processors",
          href: "/product/series-5000-data-processors",
          image: "/products/cat3/pro10/S-5000e-Main.webp",
          imgWidth: 85,
          imgHeight: 30,
        },
      ],
    },
  ],
};

const leftNavLinks = [
  { name: "TELEMETRY", href: "/telemetry-and-data-systems", hasDropdown: true },
  { name: "COMMUNICATIONS", href: "/tactical-communications", hasDropdown: true },
  { name: "ABOUT", href: "/about-us", hasDropdown: false },
];

const rightNavLinks = [
  { name: "CALENDAR", href: "/events", hasDropdown: false },
  { name: "NEWS", href: "/press-release", hasDropdown: false },
  { name: "DESIGNLINX", suffix: "TM", href: "/about-us#designlinx", hasDropdown: false },
  { name: "CONTACT US", href: "/contact-us", hasDropdown: false },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activeTelemetryCategory, setActiveTelemetryCategory] = useState("recorders");
  const [activeCommCategory, setActiveCommCategory] = useState("gateways");
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState(null);
  const [dropdownLeft, setDropdownLeft] = useState(null);

  const hoverTimeoutRef = useRef(null);
  const navItemRefs = useRef({});
  const navbarRowRef = useRef(null);

  const updateDropdownPos = (tabName) => {
    const el = navItemRefs.current[tabName];
    if (el) {
      // In the dropdown, left padding is 32px and left col width is 220px.
      // The visual anchor for the notch roof above the left category title is around 110px.
      // NavItem's active arrow/roof is at el.offsetLeft + el.offsetWidth / 2.
      const notchAnchorInDropdown = 110;
      const targetLeft = el.offsetLeft + el.offsetWidth / 2 - notchAnchorInDropdown;
      const maxLeft = navbarRowRef.current
        ? navbarRowRef.current.offsetWidth - 750
        : 400;
      setDropdownLeft(Math.max(0, Math.min(targetLeft, maxLeft > 0 ? maxLeft : targetLeft)));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove("active");
        if (hoveredTab) {
          updateDropdownPos(hoveredTab);
        }
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [hoveredTab]);

  const handleMouseEnterTab = (tabName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    updateDropdownPos(tabName);
    setHoveredTab(tabName);
  };

  const handleMouseLeaveTab = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 150);
  };

  const handleMouseEnterDropdown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseLeaveDropdown = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.classList.toggle("active", nextState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("active");
  };

  const getTabClass = (tabName) => {
    if (!hoveredTab) {
      return styles.tabDefault;
    }
    if (hoveredTab === tabName) {
      return styles.tabActive;
    }
    return styles.tabInactive;
  };

  const currentDropdownData =
    hoveredTab === "TELEMETRY"
      ? telemetryData
      : hoveredTab === "COMMUNICATIONS"
      ? communicationsData
      : null;

  const currentActiveCategory =
    hoveredTab === "TELEMETRY"
      ? activeTelemetryCategory
      : hoveredTab === "COMMUNICATIONS"
      ? activeCommCategory
      : "recorders";

  const currentCategoryObj =
    currentDropdownData?.categories.find((c) => c.id === currentActiveCategory) ||
    currentDropdownData?.categories[0];

  return (
    <header className={`${styles.headerSection} ${isScrolled ? styles.isScrolled : ""}`}>
      <Container className={styles.navbarWrapper}>
        <div className={styles.navbarRow} ref={navbarRowRef}>
          {/* Left Nav Menu */}
          <nav className={styles.leftNav} aria-label="Main Left Navigation">
            <ul className={styles.navList}>
              {leftNavLinks.map((item) => {
                const isActive = hoveredTab === item.name;
                return (
                  <li
                    key={item.name}
                    ref={(el) => {
                      if (el) navItemRefs.current[item.name] = el;
                    }}
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                    onMouseEnter={() => handleMouseEnterTab(item.name)}
                    onMouseLeave={handleMouseLeaveTab}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${getTabClass(item.name)}`}
                    >
                      {item.name}
                    </Link>

                    {/* Active Underline, Peak Arrow, and Sloped Notch Roof */}
                    {isActive && item.hasDropdown && (
                      <div className={styles.activeIndicator}>
                        <span className={styles.activeLine}></span>
                        <span className={styles.activeArrow}>▲</span>
                        <svg
                          className={styles.activeRoof}
                          width="34"
                          height="16"
                          viewBox="0 0 34 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M 0 16 L 17 1 L 34 16 Z" fill="#0034A4" />
                          <path
                            d="M 0 16 L 17 1 L 34 16"
                            stroke="rgba(255, 255, 255, 0.25)"
                            strokeWidth="1"
                          />
                          <line
                            x1="0"
                            y1="16"
                            x2="34"
                            y2="16"
                            stroke="#0034A4"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Center Brand Logo */}
          <div className={styles.centerLogo}>
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src={LogoWhite.src}
                alt="Parraid Logo"
                width={210}
                height={65}
                priority
                className={styles.logoImg}
              />
            </Link>
          </div>

          {/* Right Nav Menu */}
          <nav className={styles.rightNav} aria-label="Main Right Navigation">
            <ul className={styles.navList}>
              {rightNavLinks.map((item) => {
                const isActive = hoveredTab === item.name;
                return (
                  <li
                    key={item.name}
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                    onMouseEnter={() => handleMouseEnterTab(item.name)}
                    onMouseLeave={handleMouseLeaveTab}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${getTabClass(item.name)}`}
                    >
                      {item.name}
                      {item.suffix && (
                        <sup className={styles.trademark}>{item.suffix}</sup>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <ClosedIcon /> : <NavIcon />}
          </button>

          {/* Desktop Mega Dropdown Menu - Clean, balanced, matching mockup */}
          {currentDropdownData && (
            <div
              className={`${styles.megaDropdown} ${
                hoveredTab === "COMMUNICATIONS" ? styles.megaDropdownComm : ""
              }`}
              style={dropdownLeft !== null ? { left: `${dropdownLeft}px` } : undefined}
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <div className={styles.dropdownInner}>
                {/* Header Row: Active title & secondary clickable title */}
                <div className={styles.dropdownHeaderRow}>
                  <h4 className={styles.colTitle}>{currentDropdownData.title}</h4>
                  <span
                    className={styles.secondaryTitle}
                    onClick={() => {
                      const targetTab =
                        hoveredTab === "TELEMETRY" ? "COMMUNICATIONS" : "TELEMETRY";
                      updateDropdownPos(targetTab);
                      setHoveredTab(targetTab);
                    }}
                  >
                    {currentDropdownData.secondaryTitle}
                  </span>
                </div>

                {/* Main Content Row: Left Categories, In-flow Center Divider, Right Products */}
                <div className={styles.dropdownContentRow}>
                  {/* Left Column: Categories */}
                  <div className={styles.dropdownColLeft}>
                    <div className={styles.categoryList}>
                      {currentDropdownData.categories.map((cat) => {
                        const isCatActive = currentActiveCategory === cat.id;
                        return (
                          <div
                            key={cat.id}
                            className={`${styles.categoryItem} ${
                              isCatActive ? styles.catActive : ""
                            }`}
                            onMouseEnter={() => {
                              if (hoveredTab === "TELEMETRY") {
                                setActiveTelemetryCategory(cat.id);
                              } else {
                                setActiveCommCategory(cat.id);
                              }
                            }}
                          >
                            <span className={styles.categoryLabel}>{cat.label}</span>
                            {isCatActive && <span className={styles.activeBranchLine} />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Center Vertical Divider Line: in-flow between columns so it NEVER overlaps text */}
                  <div className={styles.dropdownDivider} />

                  {/* Right Column: Products */}
                  <div className={styles.dropdownColRight}>
                    <div className={styles.productsSubTitleWrapper}>
                      <span className={styles.productsBranchLine} />
                      <span className={styles.productsSubTitle}>PRODUCTS</span>
                    </div>

                    <div className={styles.productsList}>
                      {currentCategoryObj?.products.map((prod, index) => (
                        <Link
                          key={index}
                          href={prod.href}
                          className={styles.productRow}
                          onClick={() => setHoveredTab(null)}
                        >
                          <span className={styles.productName}>{prod.name}</span>
                          {prod.image ? (
                            <div className={styles.productImageWrapper}>
                              <Image
                                src={prod.image}
                                alt={prod.name}
                                width={prod.imgWidth || 120}
                                height={prod.imgHeight || 28}
                                className={styles.productThumb}
                              />
                            </div>
                          ) : (
                            <span className={styles.productArrow}>→</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`${styles.mobileDrawer} ${
            isMobileMenuOpen ? styles.mobileDrawerActive : ""
          }`}
        >
          <div className={styles.mobileInner}>
            <ul className={styles.mobileNavList}>
              {/* Telemetry Mobile */}
              <li className={styles.mobileNavItem}>
                <div
                  className={styles.mobileNavHeader}
                  onClick={() =>
                    setMobileExpandedDropdown(
                      mobileExpandedDropdown === "TELEMETRY" ? null : "TELEMETRY"
                    )
                  }
                >
                  <span>TELEMETRY</span>
                  <span>{mobileExpandedDropdown === "TELEMETRY" ? "−" : "+"}</span>
                </div>
                {mobileExpandedDropdown === "TELEMETRY" && (
                  <ul className={styles.mobileSubList}>
                    {telemetryData.categories.map((cat) => (
                      <li key={cat.id} className={styles.mobileSubCategory}>
                        <div className={styles.mobileCatHeading}>{cat.label}</div>
                        {cat.products.map((p, pIdx) => (
                          <Link
                            key={pIdx}
                            href={p.href}
                            onClick={closeMobileMenu}
                            className={styles.mobileProductLink}
                          >
                            {p.name}
                          </Link>
                        ))}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Communications Mobile */}
              <li className={styles.mobileNavItem}>
                <div
                  className={styles.mobileNavHeader}
                  onClick={() =>
                    setMobileExpandedDropdown(
                      mobileExpandedDropdown === "COMMUNICATIONS"
                        ? null
                        : "COMMUNICATIONS"
                    )
                  }
                >
                  <span>COMMUNICATIONS</span>
                  <span>{mobileExpandedDropdown === "COMMUNICATIONS" ? "−" : "+"}</span>
                </div>
                {mobileExpandedDropdown === "COMMUNICATIONS" && (
                  <ul className={styles.mobileSubList}>
                    {communicationsData.categories.map((cat) => (
                      <li key={cat.id} className={styles.mobileSubCategory}>
                        <div className={styles.mobileCatHeading}>{cat.label}</div>
                        {cat.products.map((p, pIdx) => (
                          <Link
                            key={pIdx}
                            href={p.href}
                            onClick={closeMobileMenu}
                            className={styles.mobileProductLink}
                          >
                            {p.name}
                          </Link>
                        ))}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Other Navigation Links */}
              {[...leftNavLinks.filter((i) => !i.hasDropdown), ...rightNavLinks].map(
                (item) => (
                  <li key={item.name} className={styles.mobileNavItem}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={styles.mobileNavLink}
                    >
                      {item.name}
                      {item.suffix && (
                        <sup className={styles.trademark}>{item.suffix}</sup>
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
