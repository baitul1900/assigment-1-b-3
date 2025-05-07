/* eslint-disable no-unused-vars */
import React from "react";
import Airbnb from "../svg/Airbnb";
import Google from "../svg/Google";
import Microsoft from "../svg/Microsoft";
import Spotify from "../svg/Spotify";
import Mailchimp from "../svg/Mailchimp";
import Mashable from "../svg/Mashable";

const Companies = () => {
  const companies = [
    { name: "Airbnb", icon: Airbnb },
    { name: "Google", icon: Google },
    { name: "Microsoft", icon: Microsoft },
    { name: "Spotify", icon: Spotify },
    { name: "Mailchimp", icon: Mailchimp },
    { name: "Mashable", icon: Mashable },
  ];

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {companies.map(({ name, icon: Icon }) => (
            <a href="#" key={name} class="flex items-center lg:justify-center">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
