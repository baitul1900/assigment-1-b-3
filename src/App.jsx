import React from "react";
import Navbar from "./component/layout/Navbar";
import Hero from "./component/ui/Hero";
import Companies from "./component/ui/Companies";
import ServiceOne from "./component/ui/Service-1/ServiceOne";
import ServiceTwo from "./component/ui/service-2/ServiceTwo";
import Testimonial from "./component/ui/Testimonial";
import Pricing from "./component/pricing/Pricing";
import FAQAccordion from "./component/ui/FAQAccordion";
import Trail from "./component/ui/Trail";
import Footer from "./component/ui/Footer";

const App = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Companies />
      <ServiceOne />
      <ServiceTwo/>
      <Testimonial/>
      <Pricing/>
      <FAQAccordion/>
      <Trail/>
      <Footer/>
    </section>
  );
};

export default App;
