import React from 'react'
import Facebook from '../svg/Facebook'
import Instagram from '../svg/Instagram'
import Twitter from '../svg/Twitter'
import Dribble from '../svg/Dribble'
import logo from "../../assets/logo.svg"
import FooterGithub from '../svg/FooterGithub'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">About</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Brand Center</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Blog</a>
            </li>
          </ul>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">Discord Server</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Twitter</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
          </ul>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Licensing</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Terms</a>
            </li>
          </ul>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">About</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Brand Center</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Blog</a>
            </li>
          </ul>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">iOS</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Android</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Windows</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">MacOS</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Learn with Sumit Logo" />Learn with Sumit </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 Learn with Sumit. All Rights Reserved. Built with <a href="#" target="_blank"
            className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a href="#"
            className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <Facebook/>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <Instagram/>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <Twitter/>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <FooterGithub/>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <Dribble/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer