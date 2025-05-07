import React from 'react'
import Github from '../svg/Github'
import Figma from '../svg/Figma'
import heroImage from "../../assets/hero.png"


const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-bold leading-none tracking-tight dark:text-white">
            Building digital <br /> products & brands.
          </h1>
          <p className="max-w-2xl mt-4 text-lg font-light text-gray-500 dark:text-gray-400">
            This free and open-source landing page template was built using the
            utility classes from <a href="#" className="hover:underline">Tailwind CSS</a>.
          </p>
          <div className="mt-8 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="flex items-center justify-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <Github /> View on GitHub
            </a>
            <a
              className="flex items-center justify-center py-3 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <Figma /> Get Figma file
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-5">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero