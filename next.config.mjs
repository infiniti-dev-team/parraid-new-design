/** @type {import('next').NextConfig} */

const blogSlugs = [
  "advanced-telemetry-processing-techniques-for-efficient-data-communications",
  "advancements-in-tactical-radio-network-technologies-a-comprehensive-overview",
  "advancements-in-telemetry-data-communications-exploring-omega-next-technologies",
  "advancements-in-telemetry-data-communications-exploring-omega-next-technology",
  "breaking-down-the-advancements-in-telemetry-recorder-systems",
  "breaking-down-the-basics-what-makes-a-telemetry-recorder-indispensable",
  "how-deployable-communications-systems-and-nrg-enhance-warfighter-connectivity",
  "choosing-wisely-telemetry-best-source-selector-vs-best-data-engine",
  "compliance-to-telemetry-irig-106-standards-chapter-10",
  "enhancing-communication-efficiency-telemetry-network-recorder",
  "enhancing-communication-telemetry-best-source-selector",
  "enhancing-data-communication-with-telemetry-recorder-technology",
  "enhancing-military-communications-with-the-tactical-operations-center-light",
  "enhancing-military-operations-the-power-of-airborne-tactical-data-link-tdl",
  "missile-testing-with-telemetry-enabled-usvs-and-uavs",
  "enhancing-telemetry-communications-the-role-of-telemetry-ground-stations",
  "enhancing-telemetry-data-communications-through-advanced-telemetry-processor",
  "enhancing-telemetry-data-communications-through-advanced-telemetry-processing",
  "flight-test-data-challenges-in-collection-and-analysis-explained",
  "flight-test-instrumentation-fti-industry-shifting-to-network-telemetryfp1",
  "future-trends-in-remote-radio-programming-what-to-expect",
  "how-network-radio-gateway-nrg-is-transforming-emergency-response-systems",
  "how-telemetry-processing-is-changing-the-defense-industry",
  "jadc2-explained",
  "leveraging-tmoip-for-efficient-telemetry-data",
  "hypersonic-testing-through-simulated-flight-in-a-modern-telemetry-environment",
  "remote-radio-programming-revolutionizing-tactical-communication",
  "skyrange-and-the-future-of-hypersonic-testing",
  "why-tdl-is-the-backbone-of-modern-military-tactical-communications",
  "tactical-radio-bridging-solutions-for-interoperable-communication-systems",
  "why-tactical-radio-networks-are-the-backbone-of-secure-military-communication",
  "telemetry-data-communications-exploring-telemetry-decom",
  "the-future-of-communication-tactical-radio-network-in-defense",
  "how-tmns-is-transforming-telemetry-in-flight-testing",
  "what-is-roip-and-benefits-of-radio-over-ip-in-modern-communications",
  "what-are-multi-domain-operations-mdo",
  "why-iridium-ptt-is-the-ultimate-solution-for-remote-communication-needs",
]

const pressSlugs = [
  "parraid-and-5x-systems-partnership-provides-iridium-data-link",
  "parraid-engineering-part-of-successful-mars-mission",
  "parraid-engineering-research-firm-blossoms-from-smartronix",
  "parraid-wins-2022-astors-award-for-best-disaster-preparedness-disaster-recovery-solution",
  "parraid-llc-and-radio-enhancements-program-appraised-at-cmmi-level-3",
  "parraids-radio-enhancements-program-appraised-at-cmmi-level-3",
  "parraids-vidl-the-most-interoperable-and-affordable-communications-system-for-emergency-response-in-areas-without-cellular-coverage",
  "parraid-wins-navy-onr-phase-ii-sbir-award-for-outside-with-linux-owl-development-effort",
]

const permanentRedirect = ({ source, destination }) => ({
  source,
  destination,
  permanent: true,
})

const nextConfig = {
  async redirects() {
    return [
      permanentRedirect({
        source: "/product/edge2-telemetry-reciver",
        destination: "/product/edge2-telemetry-receiver",
      }),
      ...blogSlugs.map((slug) =>
        permanentRedirect({
          source: `/${slug}`,
          destination: `/blogs/${slug}`,
        }),
      ),
      ...pressSlugs.map((slug) =>
        permanentRedirect({
          source: `/${slug}`,
          destination: `/press-release/${slug}`,
        }),
      ),
    ]
  },
}

export default nextConfig
