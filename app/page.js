import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import Approach from "@/components/Approach";
import Different from "@/components/Different";
// import Criteria from "@/components/Criteria";
import ValueCreation from "@/components/ValueCreation";
import Process from "@/components/Process";
import Philosophy from "@/components/Philosophy";
// import Founder from "@/components/Founder";
// import Advisors from "@/components/Advisors";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Approach />
      {/* <Different /> */}
      {/* <Criteria /> */}
      <ValueCreation />
      {/* <Process /> */}
      {/* <Philosophy /> */}
      {/* <Founder /> */}
      {/* <Advisors /> */}
      {/* <WhyUs /> */}
      <Contact />
      <Footer />
    </>
  );
}
