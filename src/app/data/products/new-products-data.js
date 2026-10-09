export const newProductsData = [
  {
    slug: "ode",
    aliases: ["omega-data-environment", "omega-data-environment-ode"],
    title: "ODE™ - OMEGA DATA ENVIRONMENT",
    titleBold: "ODE™",
    titleDash: true,
    titleLight: "OMEGA DATA ENVIRONMENT",
    subheading: "OMEGA DATA ENVIRONMENT",
    mainImage: "/products/new-images/New Website Photo_ODE.png",
    imageWidth: 714,
    imageHeight: 672,
    flyer: "/products/cat3/pro7/OMEGA_Data_Environment_(ODE)_Product_Flyer.pdf",
    topParagraph:
      "The OMEGA Data Environment software is available as a single-user or a multi-user distributed post mission data processing and time-series data mining solution. The OMEGA Data Environment architecture is designed to be data format agnostic. Several formats are included out of the box and programmatic interfaces are provided to accept any data format that you may require for both input and output. ODE provides user controls at the data set level or down to the individual parameter level and can integrate with your existing Active Directory infrastructure to provide customizable security for data access.",
    bullets: [
      "Multi-user, Post-test Time E-series Data",
      "Data Mining with Parametric Value Search",
      "Data Format Agnostic",
      "Create Data Products",
      "Merge Data from Multiple File Sources",
      "Find data of interest",
      "Organize Data Sets and Data Products",
      "Correlate and Compare Data Sets",
      "Collaborate with other ODE users",
    ],
  },
  {
    slug: "edge2",
    aliases: ["edge2-telemetry-receiver"],
    title: "EDGE2™",
    titleBold: "EDGE2™",
    titleDash: false,
    titleLight: "",
    subheading: "Receiver Network Appliance — Portable and Rack Mount",
    mainImage: "/products/new-images/New Website Photo_Edge2.png",
    imageWidth: 938,
    imageHeight: 433,
    flyer: "/products/cat3/pro3/Edge2_Telemetry_Network_Appliance_Product_Flyer.pdf",
    topParagraph:
      "The Edge2 is engineered to provide network telemetry processing at the edge in a portable or rack mountable 2 channel unit. Three Edge2 appliances may be rack mounted side-by-side supporting up to 6 channels of RF, BitSync, or Decom processing in a 1U rack space. Each Edge2 unit provides LED status indicators for; Receiver Status, BitSync Status, Frame Sync Status, Time Status, and Ethernet activity.",
    secondSection: {
      title: null,
      paragraph:
        "The Edge2 unit when configured with receiver modules provides users with complete single or dual stream RF-to-Ethernet telemetry data processing. Capable of supporting all telemetry frequency bands from 200 MHz to beyond 5.15 GHz, these systems provide complete RF input to TMoIP (IRIG 106 Chapter 10/11 or IRIG 218-20) Ethernet output in a single compact 1U rack mount industrial enclosure.",
      image: "/products/new-images/New Website Photo_Edge2 Diagram.png",
      imageAlt: "Edge2 RF-to-Ethernet Processing Diagram",
      imageWidth: 629,
      imageHeight: 318,
    },
  },
  {
    slug: "imux-g3",
    aliases: ["g3", "g3-tmoip-data-processing"],
    title: "IMUX G3™",
    titleBold: "IMUX G3™",
    titleDash: false,
    titleLight: "",
    subheading: "TMoIP Recorder / Processor",
    mainImage: "/products/new-images/New Website Photo_IMUX G3.png",
    imageWidth: 884,
    imageHeight: 285,
    flyer: "/products/cat3/pro4/IMUX_G3_Recorder_Product_Flyer.pdf",
    topParagraph:
      "The G3 Recorder-Processing system represents the next generation of telemetry data recording and processing platforms. It supports over 24 input channels, including 20 PCM streams received as IRIG standard TMoIP Ethernet input(s). G3 includes extreme real-time processing capability with the integrated NExT™ Best Data Engine (BDE™) and NExT™ raw data distribution and parameter processing capabilities. G3 provides both 1G and 10G Ethernet ports and includes TPM 2.0.",
    bullets: [
      "TMoIP Input / IRIG 106 Ch 10 Archive",
      "Selectable IRIG Codes, In and Out",
      "Tunable Bit Rates Up to 60 Mbps",
      "2U 19\" High-end Processing Platform",
      "Local, RAID, NAS, or SAN storage",
      "Signal I/O for PCM, Video, UART, 1553, ARINC, Ethernet, TMoIP and others",
      "NExT™ Professional Data Processing with BDE™ and TMoIP Input Support",
    ],
  },
  {
    slug: "owl",
    aliases: ["outsource-the-workload", "outsource-the-workload-owl"],
    title: "OWL™ - OUTSOURCE THE WORKLOAD",
    titleBold: "OWL™",
    titleDash: true,
    titleLight: "OUTSOURCE THE WORKLOAD",
    subheading: "Post-Processor / Reproducer",
    mainImage: "/products/new-images/New Website Photo_OWL.png",
    imageWidth: 693,
    imageHeight: 618,
    flyer: "/products/cat1/pro3/Outsource_the_Workload_(OWL)_Product_Flyer.pdf",
    topParagraph:
      "Outsource the Workload (OWL™) is a compact, intelligent device designed for complete battlefield awareness. This pouch-sized hub replaces multiple separate technologies, simplifying a soldier’s equipment and workload. The OWL™ provides comprehensive data translation and protocol conversion, secure connectivity, and radio control with bridging. OWL™ offers edge computing and mass storage, freeing users to focus on their mission, while allowing for swift seamless equipment integration and future technology expansion.",
    isOwl: true,
  },
  {
    slug: "bsr-100",
    aliases: ["best-source-reproducer-bsr-100"],
    title: "BSR-100™ - BEST SOURCE REPRODUCER",
    titleBold: "BSR-100™",
    titleDash: true,
    titleLight: "BEST SOURCE REPRODUCER",
    subheading: "Wearable TAK Hub",
    mainImage: "/products/new-images/New Website Photo_BSR-100.png",
    imageWidth: 771,
    imageHeight: 438,
    flyer: "/products/cat3/pro2/Best_Source_Reproducer_(BSR-100)_Product_Flyer.pdf",
    topParagraph:
      "Experience seamless Best Source post-processing and reproduction with the BSR-100. This cutting-edge technology effortlessly processes up to 32 recorded PCM streams from multiple diverse receiving / recording locations. The BSR-100 includes the Parraid 2-channel PSIMe PCM output board for PCM signal reproduction or simulation.",
    subsections: [
      {
        title: "FILE BDE™",
        content:
          "Easily select channels for BDE processing and passing to output. Include correlation fields to align data channels. Configure out of lock output (Last-in-lock, Fake AAAA, Most-in-lock, Initial Source, or no fill). Select from multiple BDE algorithms including In-Lock-Weighted, Bit Vote, Last-in-lock, and DQE/DQM. Optionally repair corrupted frame synchronization patterns.",
      },
      {
        title: "ORIGIN™ SIMULATION SOFTWARE",
        content:
          "Create simulations including multiple PCM channels and a time channel with IRIG-A, B, or G output. Simulate data values for any word using preset data value generators or configure word values with CSV file lookup tables. Play existing Chapter 10 files to baseband signal outputs, UDP Chapter 10 streams or TMoIP 218-20 Streams.",
      },
    ],
  },
  {
    slug: "imux-g2e",
    aliases: ["imux-g2e-and-g2eh-recorders", "g2e-g2eh", "imux-g2-and-g2e-recorder-reproducer"],
    title: "IMUX G2e™",
    subheading: "Recorder / Reproducer",
    mainImage: "/products/new-images/New Website Photo_IMUX G2e.png",
    imageWidth: 896,
    imageHeight: 278,
    flyer: "/products/cat3/pro5/G2eH_Data_Recorder_Product_Flyer.pdf",
    topParagraph:
      "The IMUX G2e is capable of supporting all industry-standard telemetry signal types, recording two Chapter 10 files simultaneously – local and/or remote, simultaneous playback, and on-the-fly channel adjustment. All units can be equipped with optional integrated RF receivers, bit synchronizers, best source selection, and real-time decom, processing, and display capabilities.",
    secondSection: {
      title: null,
      paragraph:
        "The G2eH dynamically converts TMoIP 218-20 inputs to Chapter 10 packets while recording, allowing for the G2eH, G2e, or any other CH10 reproducer to output baseband (PCM Data & Clock) from the recorded CH10 file. The recorded file will also work with any CH10 / 11 compliant tool set for processing and analysis. This gives the user a single box solution to record and/or reproduce legacy and present-day channel types all together. The G2e/G2eH can be configured as a rack mount or portable unit, including a compact 2U chassis for up to 4 channels and a robust 4U chassis for up to 32 channels. Touch screen and ruggedized systems for mobile applications and transport cases are available.",
      image: "/products/new-images/New Website Photo_G2eH.png",
      imageAlt: "G2eHYBRID Data Recorder",
    },
  },
  {
    slug: "omega-next",
    aliases: ["omega-next-real-time-data-processing-software"],
    title: "OMEGA NExT™",
    subheading: "Real-Time Data Processing Software",
    mainImage: "/products/new-images/New Website Photo_OMEGA NExT.png",
    imageWidth: 714,
    imageHeight: 672,
    flyer: "/products/cat3/pro8/OMEGA_NExT_Processing_Software_Product_Flyer.pdf",
    topParagraph:
      "The OMEGA NExT software suite provides Real-time Processing, EU conversion, Data Distribution, Display, and Chapter 10 compliant Data Recording and is one of the most powerful and easy to use telemetry data processing software ever produced. Developed specifically for IRIG 106 Chapter 10 packet processing on a modern Service Oriented Architecture (SOA), OMEGA NExT provides unparalleled stability, performance, and flexibility.",
    subsections: [
      {
        title: "Clarity Display Software",
        content:
          "Using the latest vector display technology, Clarity delivers new levels of richness and depth. Clarity Builder allows display designers to quickly define the ultimate user experience. Clarity clients allow users to view their data and interact with their displays in real-time or playback. There are no license installation restrictions on Clarity Display and Builder software; they may be installed on as many platforms as desired by the end user(s). Clarity Displays feature programmable sample-driven and data-driven support in the presentation of real-time and file playback data. Clarity Display clients may connect to any NExT server system for data presentation of any telemetry data source inputs. All Clarity Display clients feature programmable instant replay for immediate re-examination of displayed data, without requiring playback of front-end recorder file, before resuming real-time data monitoring.",
      },
    ],
  },
  {
    slug: "s-5000e",
    aliases: ["series-5000-data-processors", "s5000e"],
    title: "S-5000e™",
    subheading: "Data Processor and Recorder",
    mainImage: "/products/new-images/New Website Photo_S5000e.png",
    imageWidth: 876,
    imageHeight: 490,
    flyer: "/products/cat3/pro10/Series-5000e_Real-time_Processor_Product_Flyer.pdf",
    topParagraph:
      "The S-5000e is real-time data processing platform available in portable and rack mount configurations: 2U and 4U, ruggedized and industrial. Multi-stream support ranges from 2 to 16 simultaneous serial PCM inputs with no-latency hot mic PCM-embedded audio output(s). S-5000e’s may include optional 1dB Bit Syncs and/or RF Receivers for accepting noisy data-only or digital data/clock inputs. Integrated programmable data timestamping is supported with selectable IRIG A, B, and G, external time input, serial PCM-embedded and network-embedded data inputs, and local system time. Time Data Resolution of +/-100nS enables inter-channel skew of less than 1uS.",
    secondParagraph:
      "Stream and parameter-based data extraction is supported for local storage and custom processing, and network strip-n-ship operations. Systems may range from stand-alone portable units to multi-system theater control rooms with many local and remote Ethernet clients. Series-5000 PCM inputs may range from simple and complex industry standard IRIG Ch4 formats, to industry standard Ch7 and Ch8 stream definitions, and includes unique customer-specific multi-stream and multi-depth PCM-embedded formats.",
  },
  {
    slug: "bde",
    aliases: ["best-data-engine", "best-data-engine-bde", "best-source-selector-best-data-engine-bde"],
    title: "BDE™ — BEST DATA ENGINE",
    subheading: "A Method of Best Source Selection (BSS)",
    mainImage: "/products/new-images/New Website Photo_BDE.png",
    imageWidth: 714,
    imageHeight: 672,
    flyer: "/products/cat3/pro1/Best-Data-Engine-BDE-Product-Flyer.pdf",
    topParagraph:
      "Best Data Engine (BDE) is a method of Best Source Selection that accepts multiple PCM input channels, compares them, then creates a new “composite” output PCM channel that represents the best data based on the selected Best Data algorithm. BDE has several instantiations, they include File BDE, G2 BDE, and OMEGA NExT™ BDE.",
    subsections: [
      {
        title: "BDE™ ALGORITHM TYPES",
        items: [
          "Bit vote: Does a bit-by-bit comparison of each bit in a minor frame and selects the most common bit for the BDE output stream.",
          "In-Lock-Weighted: Aligns data and makes a decision based on which streams have been in lock the most, for the longest period of time, most recently.",
          "DQM Voting: Outputs the stream with the current best encapsulated Data Quantity Metric.",
          "Last In Lock: Outputs the stream most recently in lock as the BDE output stream.",
        ],
      },
    ],
  },
  {
    slug: "imux-recon",
    aliases: ["imux-re-con-newtwork-recorder", "recon", "imux-recon-network-recorder"],
    title: "IMUX RE/CON™",
    subheading: "Telemetry Network Recorder",
    mainImage: "/products/new-images/New Website Photo_IMUX RECON.png",
    imageWidth: 921,
    imageHeight: 273,
    flyer: "/products/cat3/pro6/IMUX_RE-CON_Network_Recorder_Product_Flyer.pdf",
    topParagraph:
      "The IMUX RE/CON network recorder is a telemetry specific ground network recorder ideally suited for ranges moving to IP telemetry. The RE/CON ground network recorder auto-detects telemetry packets, prioritizes telemetry streams over other network traffic, and converts common network telemetry formats to IRIG 106 Chapter 10 files on-the-fly. The RE/CON provides the ability to re-direct the recorded data to any network endpoint on playback. RE/CON is available in multiple 2U and 4U rack mount configurations and supports a variety of network interface options.",
    bullets: [
      "IP recording capabilities with telemetry specific on-the-fly conversion capability",
      "Provides automatic format detection",
      "Record IRIG 106 Ch10 files",
      "Playback from existing IRIG 106 Ch10 infrastructure",
    ],
  },
  {
    slug: "rx2",
    aliases: ["rx2-receiver"],
    title: "Rx2™",
    subheading: "Telemetry Receiver",
    mainImage: "/products/new-images/New Website Photo_Rx2.png",
    imageWidth: 803,
    imageHeight: 409,
    flyer: "/products/cat3/pro9/Rx2.pdf",
    topParagraph:
      "Parraid offers the Rx2 rack mount multi-channel receiver and combiner as well as PCI card level receivers and combiners. All of our receiver products use the latest in digital radio technology.",
    subsections: [
      {
        title: "LATEST TECHNOLOGY FOR RF TO ETHERNET",
        items: [
          "Tri-band; L, S, C Bands – Optional C-Band IF",
          "Compact Portable to Rugged Touch-screen and Airborne Platforms",
          "Demods",
        ],
      },
      {
        title: "AM, PCM/FM, PM, BPSK, OPSK, SOQPSK-TG",
        items: [
          "High Density",
          "Up to 14 Receivers per Chassis",
          "Dual Receiver & Diversity Combiner on a Single Card",
          "Latest DSP Technology",
          "Antenna Control / Signal Monitoring",
          "Chapter 10/11 Ethernet Data Output",
        ],
      },
    ],
  },
  {
    slug: "nrg-ds-04v3",
    aliases: ["network-radio-gateway-ds-04v3", "ds-04v3"],
    title: "NRG® DS-04v3 — NETWORK RADIO GATEWAY",
    subheading: "Deployable RoIP Gateway",
    mainImage: "/products/new-images/New Website Photo_NRG DS04v3.png",
    imageWidth: 866,
    imageHeight: 416,
    flyer: "/products/cat1/pro1/NRG_Deployable_Systems_(DS-04v3)_Product_Flyer.pdf",
    topParagraph:
      "Introducing the NRG DS-04v3—the latest powerhouse in Parraid’s groundbreaking Radio over IP (RoIP) solutions. This all-in-one, standalone network appliance revolutionizes communication by seamlessly integrating voice conferencing, HPW data, and remote radio configuration and control into a single, robust platform. Our latest Network Radio Gateway software, NRG5, and any hardware offerings using the new Compact Radio Interface Board (CRIB) or derivative products based on it, and the Legacy Data Adapter (LDA) are Non-ITAR export classification ECCN 5A991 and 5D991.",
    bullets: [
      "Connects two-four radio systems and up to 50 endpoints",
      "Adapts from small command posts to full enterprise integration",
      "Removable SSD",
      "Trusted Platform Module 2.0 (TPM)",
      "Front panel system and status tri-color LEDs.",
      "Windows 10/11 Support",
      "Leverages Rally Tactical Systems’ Engage platform and Rallypoint software",
      "Scalable and Decentralized: Adapts from small command posts to full enterprise integration.",
      "Interoperability: Compatible with a wide range of unified communications protocols and systems, including Motorola WAVE, TOCNET, ICE, Cisco Call Manager, AT&T FirstNet, Access Net, LTE, and more.",
      "Enhanced Radio Support: Offers remote data and radio control for both software-defined radios and legacy systems, including LMRs.",
      "Tactical and Standalone Operations: Functions in standalone tactical configurations or integrates multiple radio circuits across IP subnetworks.",
      "Future-Ready Transport: Supports a range of transport methods including 5G, Fiber, Mesh Radio, Software-Defined Radio, Starshield, and tactical LANs.",
      "Cost-Effective: Enables shared use of expensive radios across multiple users, reducing overall costs.",
    ],
  },
  {
    slug: "nrg-rm-xx",
    aliases: ["network-radio-gateway-nrg-deployable-systems", "nrg-rack-mount"],
    title: "NRG® RM-XX — NETWORK RADIO GATEWAY",
    subheading: "Rack Mount RoIP Gateway",
    mainImage: "/products/new-images/New Website Photo_NRG Rack Mount.png",
    imageWidth: 1166,
    imageHeight: 296,
    flyer: "/products/cat1/pro2/NRG_Software_Product_Flyer.pdf",
    topParagraph:
      "The NRG® rack mount systems support up to 400 endpoints (any combination of users and radios) and any number of radios in several configurations. The NRG® RM-12 supports up to 12 connected radios while the RM-08 and RM-04 support 8 and 4 radios respectively. All configurations are made to fit into standard 19” equipment racks and all are 1U high. The NRG® rack mount systems are designed to meet the most challenging radio networking situations.",
    bullets: [
      "FULL Version: Detailed version for administrators",
      "LITE Version: Scaled down version of NRG® that focuses on radio voice, intercom, and instant messaging communications",
      "Remote control, operation, and programming of supported radios",
      "Text chat, text paging, and logging",
    ],
    secondParagraph:
      "NRG® is a solution that provides Voice over IP(VoIP)/Radio over IP(RoIP) conferencing, converging voice, MIL-STD 188/184 data, HPW data, and remote radio configuration/control capability into a single standalone network appliance. The system offers communications through such industry-standard protocols as H.323, SIP, and Multicast. NRG® equipment is interoperable with WAVE, TOCNET, IPICS, Cisco Call Manager, Access Net, SIP phones, generic IP phones, and works with PDAs/cellular phones.",
  },
  {
    slug: "pacstar-466",
    aliases: ["our-featured-network-radio-gateway", "pacstar466"],
    title: "PACSTAR® 466 WITH NRG® — NETWORK RADIO GATEWAY",
    subheading: "Rack Mount RoIP Gateway",
    mainImage: "/products/new-images/New Website Photo_PacStar 466.png",
    imageWidth: 596,
    imageHeight: 547,
    flyer: "/products/cat1/pro4/NRG_PacStar_466_Product_Flyer.pdf",
    topParagraph:
      "The PacStar 466 incorporates Parraid’s NRG, a Program of Record (PoR) fielded Radio over IP (RoIP) interoperability ecosystem that bridges tactical radios, coalition systems, Land Mobile Radios, MANET, SATCOM, and IP networks into a unified voice and data architecture, without replacing existing radio infrastructure. The PacStar 466 provides the latest Compact Radio Interface Board (CRIB) and NRG Software to seamlessly integrate radios across forces, platforms, and networks.",
    bullets: [
      "Four (4) radio interface ports",
      "Compact design with a rugged, fanless enclosure—small enough for mobile, manpack, or aircraft use",
      "Expand up to 12 radio systems by interconnecting multiple PacStar 466 modules",
      "Adapts from small command posts to full enterprise integration",
      "Versatile Graphical User Interface—Windows 10/11 Support",
      "Enhanced radio support—remote data and radio control",
      "Command and Control Monitoring—full recording and playback of all radio voice and conference audio",
    ],
  },
  {
    slug: "nrg-ls-04v2",
    aliases: ["ls-04v2"],
    title: "NRG® LS-04v2 — NETWORK RADIO GATEWAY",
    subheading: "Platform Integrated RoIP Gateway",
    mainImage: "/products/new-images/New Website Photo_LS-04v2.png",
    imageWidth: 587,
    imageHeight: 406,
    flyer: "/products/cat1/pro1/NRG_Deployable_Systems_(DS-04v3)_Product_Flyer.pdf",
    topParagraph:
      "The NRG LS-04v2 provides the latest Compact Radio Interface Board (CRIB) and NRG Software to seamlessly integrate radios across forces, platforms, and networks. Integrate the CRIB and interface panel boards into your existing hardware platform, or utilize the Parraid enclosure to meet your integration requirements.",
    bullets: [
      "Voice packet routing, protocol conversion, and radio voice bridging (crossbanding)",
      "Simultaneous operation across any transport infrastructure available",
      "Fully Operational in DDIL Environments",
      "Compact design with a rugged, fanless enclosure—small enough for mobile, manpack, or aircraft use",
      "Remote radio programming, control, and radio data management",
      "Versatile Graphical User Interface—Windows 10/11 and Linux OS support (Fall 2026)",
      "Full recording and playback of all radio voice and conference audio",
      "Compact Board integration or full enclosure available",
    ],
  },
  {
    slug: "ruh3",
    aliases: [
      "rugged-usb-hub-3-0",
      "ruh-3",
      "rugged-usb-hub-2-0",
      "rugged-usb-hub",
      "ruh2",
      "ruh-2",
    ],
    title: "RUH3™ — RUGGED USB HUB",
    subheading: "Four Port USB Hub",
    mainImage: "/products/new-images/New Website Photo_RUH 3.png",
    imageWidth: 848,
    imageHeight: 406,
    flyer: "/products/cat2/pro1/Rugged_Enhancements_RUH_Combined_Product_Flyer.pdf",
    topParagraph:
      "The Parraid Rugged USB Hub 3.0 is the toughest four port hub on the market. Designed from the ground-up for the most extreme operating environments encountered by modern advanced mobile IT systems, the Rugged USB Hub 3.0 is certified to MIL-STD-810 for temperature, vibration, and pyroshock; MIL-STD-461 for emissions and susceptibility. The sturdy and dependable RUH 3.0 is the strongest way to interconnect your deployable systems and is fast and reliable under the harshest conditions.",
    secondParagraph:
      "The Parraid Rugged USB 2.0 Hub is the first USB hub designed to meet a full range of environmental requirements for mobile and deployed systems. It has been tested to MIL-STD-810F for shock, vibration, temperature, sand, and dust. The RUH2 has also been tested to MIL-STD-461E for conducted and radiated emissions and susceptibility. With the ability to be mounted and deployed in a number of environments, the Rugged USB 2.0 Hub is one of the most versatile, rugged peripherals in your IT arsenal.",
  },
  {
    slug: "rur",
    aliases: ["rugged-usb-repeater"],
    title: "RUR™ — RUGGED USB REPEATER",
    subheading: "Reliably Extend USB Connections",
    mainImage: "/products/new-images/New Website Photo_RUR.png",
    imageWidth: 708,
    imageHeight: 421,
    flyer: "/products/cat2/pro3/Rugged_Enhancements_RUR_Product_Flyer.pdf",
    topParagraph:
      "The Parraid Rugged USB Repeater (RUR) is a device that allows USB connections to be reliably extended. While USB is a widely used connection, it does suffer from a length limitation of 5 meters (16.4 feet). Many installations need a longer cable run. Each RUR extends a connection between USB host and USB device; and multiple RUR devices can be added end-to-end to provide even more interface distance. The RUR is USB bus powered and requires no external power sources. The product is fully USB 2.0 high-speed compliant and designed to operate in harsh battlefield conditions.",
    bullets: [
      "5 meters (16.4 feet) of extended length per RUR",
      "Compact and lightweight",
      "Bus powered; receives power from USB",
      "Rugged packaging; designed to meet MIL STD 810 requirements",
      "Secure, high performance, aircraft style connectors",
      "EMI/RFI protection designed to meet MIL STD 461 requirements",
      "USB 2.0 specification compliant",
      "Multiple RURs can be linked end-to-end",
      "5 RURs for self-powered USB devices",
      "2 RURs for bus-powered USB devices up to 100 mA",
      "No special USB drivers required; simple plug-in installation",
      "Transparent to software applications",
    ],
  },
];

export function findProduct(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return (
    newProductsData.find(
      (p) => p.slug === normalized || (p.aliases && p.aliases.includes(normalized))
    ) || null
  );
}
