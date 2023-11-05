import Image from "next/image";
import profile from "@/public/jason.png";
import FrontEndSkills from "./components/Skills";
import Language from "./components/Language";
import Tools from "./components/Tools";
import "./styles/TextAnimation.css";

import AllProjects from "./components/Projects";

export default function Home() {
  return (
    <div className="divide-y-[2px] dark:divide-green-300 divide-gray-300 ">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5 ">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight   sm:text-4xl 
   sm:leading-10 md:text-6xl md:leading-14 "
        >
          HOME
        </h1>
      </div>
      <div className="items-center mb-6 space-y-2 relative xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-u-0">
        <div className=".animate-profile flex  flex-col items-center pt-8 ">
          <b>
            <Image
              alt="Picture of Jason"
              src={profile}
              className="object-cover object-top  image-border   border-l-4 border-t-4 rounded-[50%] border-green-400 profile-glass-effect"
            />
          </b>
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Jason Evaristo
          </h3>
          <strong className="text-gray-500 dark:text-gray-300 text-center font-medium">
            Davao City | Software Developer
          </strong>
          <div className=" bg-green-400  px-12 py-3 mt-2 text-gray-100 font-semibold items-center followMe">
            FOLLOW ME
          </div>
          <div className="flex space-x-5 pt-6">
            <a href="" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-green-500 hover:text-teal-600"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-green-500 hover:text-teal-600"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-green-500 hover:text-teal-600"
              >
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-green-500 hover:text-teal-600"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="prose max-w-none prose-lg mb-5 pt-8 pb-7 dark:prose-invert xl:col-span-2 bg-image">
          Software Developer specialized in Frontend Software Engineering design
          patterns.
        </div>
      </div>
      <div className="mb-12">
        <span className="text-gray-600 dark:text-gray-300">2023-8-26</span>
        <h1 className="   lg:text-start dark:text-gray-100 text-gray-700 text-lg md:text-3xl font-semibold mt-6">
          MY SPECIALIZATION IN SOFTWARE DEVELOPMENT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative ">
          <div className="grid-item   col-span-2 ">
            <FrontEndSkills />
            <h1 className="  lg:text-start dark:text-gray-100 text-gray-700 text-lg md:text-3xl font-semibold mt-6">
              PERSONAL PROJECTS
            </h1>
            <div className="lg:pr-3">
              <AllProjects />
            </div>
          </div>
          <div className="grid-item-2  ">
            <div className="flex-item flex flex-col mt-6  sticky top-10">
              <div className="glass-effect px-12 py-3 bg-green-500  text-gray-800 dark:text-gray-100 font-semibold ">
                TOOLS / RESOURCES / DATABASES
              </div>
              <Tools />
              <br />
              <div className="glass-effect px-12 py-3 bg-green-500  text-gray-800 dark:text-gray-100 font-semibold ">
                LANGUAGE / FRAMEWORKS
              </div>
              <Language />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
