export const metadata = {
  title: "Events Calendar - Parraid",
  description:
    "Explore Parraid's upcoming events, defense and aerospace exhibitions, and telemetry conferences.",
  openGraph: {
    title: "Events Calendar - Parraid",
    description:
      "Explore Parraid's upcoming events, defense and aerospace exhibitions, and telemetry conferences.",
    url: "/events",
    siteName: "Parraid",
    locale: "en_US",
    type: "website",
    images: "#",
  },
  alternates: { canonical: "/events" },
};

export default function EventsLayout({ children }) {
  return children;
}
