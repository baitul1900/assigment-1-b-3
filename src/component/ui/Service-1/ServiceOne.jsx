import React from "react";
import SectionOne from "./nestedComponent/SectionOne";
import SectionTwo from "./nestedComponent/SectionTwo";

const ServiceOne = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <SectionOne />
        <SectionTwo/>
      </div>
    </section>
  );
};

export default ServiceOne;
