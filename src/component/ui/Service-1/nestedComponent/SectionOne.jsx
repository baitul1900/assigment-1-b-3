import React from "react";
import featureOne from "../../../../assets/feature/feature-1.png";
import PurplecCheckMark from "../../../svg/PurplecCheckMark";

const SectionOne = () => {
  return (
    <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <div class="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Work with tools you already use
        </h2>
        <p class="mb-8 font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <ul
          role="list"
          class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          {[1, 2, 3].map((_, i) => (
            <li key={i} class="flex space-x-3">
              <PurplecCheckMark />
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                {i === 0
                  ? "Continuous integration and deployment"
                  : i === 1
                  ? "Development workflow"
                  : "Knowledge management"}
              </span>
            </li>
          ))}
        </ul>
        <p class="mb-8 font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.
        </p>
      </div>

      <img
        class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={featureOne}
        alt="dashboard feature image"
      />
    </div>
  );
};

export default SectionOne;
