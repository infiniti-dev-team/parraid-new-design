import Banner from "@/src/app/events/components/banner"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/about-us/components/faqs"
import Events from "@/src/app/home/events"


const EventData = {
  title: "Events",
  txt: "At Parraid, we bring innovation to the forefront of every event we attend. Our participation in global defense, aerospace, and telemetry conferences reflects our commitment to advancing mission-critical communication technologies that redefine connectivity, data accuracy, and operational readiness."
}

export const FaqsMain = {
  tit: "Frequently Asked Questions",
  desc: ""

}

export const faqsData = [
  {
    title: "What type of events does Parraid participate in?",
    txt: (
      <p>We regularly take part in global aerospace, defense, and technology exhibitions, as well as industry conferences focused on telemetry, data systems, and tactical communication innovations.</p>
    ),
  },
  {
    title: "How can I find out which events Parraid will attend this year?",
    txt: (<p>Our upcoming events are listed on this page and updated throughout the year. Each listing includes event dates, locations, and booth details. You can also subscribe to our newsletter to receive direct notifications about our event schedule and product showcases.</p>),
  },
  {
    title: "Does Parraid host its own technical demonstrations or webinars?",
    txt: (<p>Yes. Parraid conducts both in-person and virtual sessions highlighting our telemetry communication solutions, deployable systems, and network integration capabilities. </p>),
  },
  {
    title: "Can I schedule a meeting with the Parraid team during an event?",
    txt: (<p>Absolutely. Attendees can book one-on-one consultations with our engineering, business development, or technical support representatives.</p>),
  },
  {
    title: "Are Parraid event presentations or materials available afterward?",
    txt: (<p>Yes. Following select conferences or showcases, Parraid offers post-event summaries, presentations, and technical briefs. Registered participants and newsletter subscribers gain early access to these materials through our communications portal.</p>),
  },
  {
    title: "Does Parraid collaborate with other organizations for event participation?",
    txt: (<p>Indeed. Parraid frequently partners with defense contractors, research institutions, and government agencies to present joint innovations and integrated solutions. These collaborations are featured at key events and highlight our role in advancing mission-critical communication technology.</p>),
  },

];


const Page = () => {
  return (
    <>
      <Banner />
      <Events page={true} />
      <Blogs />
      <Faqs data={faqsData} dataTitle={FaqsMain} />
    </>
  )
}

export default Page
