import React from 'react'
import featureTwo from "../../../../assets/feature/feature-2.png";
import PurplecCheckMark from "../../../svg/PurplecCheckMark";

const SectionTwo = () => {
  const features = [
    { name: 'Dynamic reports and dashboards' },
    { name: 'Templates for everyone' },
    { name: 'Development workflow' },
    { name: 'Limitless business automation' },
    { name: 'Knowledge management' },
  ];

  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={featureTwo} alt="feature image 2" />
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          We invest in the world’s potential
        </h2>
        <p className="mb-8 font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
        </p>

        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
          {features.map(({ name }) => (
            <li key={name} className="flex space-x-3">
              <PurplecCheckMark />
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{name}</span>
            </li>
          ))}
        </ul>
        <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
      </div>
    </div>
  );
};

export default SectionTwo