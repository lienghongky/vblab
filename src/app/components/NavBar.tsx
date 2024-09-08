import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { NotificationIcon, SunIcon, HomeIcon } from "./Icons";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";

export default function App() {
  const navItems = [
    { name: "People", href: "/people", active: false },
    {
      name: "Research",
      href: "/research",
      active: true,
      className: "text-warning",
    },
    { name: "Publication", href: "/publication", active: false },
    { name: "Course", href: "/course", active: false },
    { name: "Resources", href: "/resuorces", active: false },
    { name: "Seminar", href: "/labseminar", active: false },
  ];
  const quickLinks = [
    {
      name: "People",
      href: "/people",
      active: false,
      image: "https://img.icons8.com/ios-filled/50/badge.png",
    },
    {
      name: "Research",
      href: "/research",
      active: true,
      className: "text-warning",
      image:
        "https://img.icons8.com/?size=100&id=38761&format=png&color=000000",
    },
    {
      name: "Publication",
      href: "/publication",
      active: false,
      image: "https://img.icons8.com/ios-filled/50/strategy-news.png",
    },
    {
      name: "Course",
      href: "/course",
      active: false,
      image:
        "https://img.icons8.com/?size=100&id=uP5fC3MGjmzM&format=png&color=000000",
    },
  ];

  return (
    <nav className="relative z-40 w-full h-[40rem] sm:h-[30rem] dark:bg-black bg-white ">
      <img
        className="absolute w-full h-full object-cover  rounded-3xl"
        src="https://img.freepik.com/premium-photo/generative-ai-flowing-light-apricot-crush-smoke-with-splashes-soft-fluid-banner_93150-7306.jpg"
        alt=""
      />
      <div className="absolute inset-0 p-4 flex flex-col justify-between border-10 border-white dark:border-gray-800 rounded-3xl shadow-inner-xl">
        <div className="flex items-start justify-between">
          <div className="flex justify-start items-center space-x-4">
            <Link href="/">
              <HomeIcon className="w-10 h-10 dark:bg-gray-900 bg-white  rounded-full p-2 dark:text-white text-black shadow-xl" />
            </Link>
            {/* <div className="absolute inset-x-0 top-10 flex flex-col justify-start items-start">
              {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`dark:text-white text-black font-main ${
                      item.active ? "font-bold" : ""
                    } ${item.className ? item.className : ""}`}
                  >
                    {item.name}{" "}
                  </Link>
                ))} 
            </div> */}
            <div className="flex items-center justify-between gap-4 h-10 dark:bg-gray-900 bg-white rounded-full px-4 shadow-xl w-48 sm:w-full overflow-scroll scrollbar-hide">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`dark:text-white text-black font-main ${
                    item.active ? "font-bold" : ""
                  } ${item.className ? item.className : ""}`}
                >
                  {item.name}{" "}
                </Link>
              ))}
            </div>
          </div>
          <div className="h-full flex flex-col justify-between items-end">
            <ThemeSwitcher />
          </div>
        </div>
        <div className="sm:w-2/3 rounded-2xl  py-6 flex items-center ">
          <h1
            // className="drop-shadow-xl text-white dark:text-black hero glitch layers"
            className="text-3xl sm:text-5xl drop-shadow-xl text-white dark:text-black stroke-1 stroke-slate-200 glitchx floating-sm"
            data-text="Visual computing & Biometrics LAB"
          >
           Visual computing & Biometrics LAB
          </h1>
        </div>
        <div className="flex flex-wrap items-center sm:items-end justify-center sm:justify-between  space-y-2">
        <div className=" w-64 h-40 rounded-2xl bg-opacity-30 dark:bg-opacity-30 bg-gray-900 dark:bg-white p-2 ">
          <div className="w-full h-full rounded-xl bg-opacity-30 grid grid-cols-2 grid-rows-2 gap-[1px] overflow-clip bg-white dark:bg-gray-900  ">
            {quickLinks.slice(0, 4).map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-white dark:bg-opacity-15  dark:bg-gray-900 flex flex-col justify-center items-center pt-2"
              >
                <img
                  className="w-8 h-8 filter  dark:invert"
                  src={item.image}
                  alt=""
                />
                <p className="font-main text-xs dark:text-white text-black pb-1">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className=" w-96  rounded-2xl bg-opacity-30 dark:bg-opacity-30 bg-gray-900 dark:bg-white p-2 space-y-1 ">
        <Link 
        href="/resuorces"
        className="flex justify-center py-1 transform duration-100 hover:-translate-y-1">
          <div className="h-2 w-8 bg-white dark:bg-gray-900 bg-opacity-80 rounded-full "></div>
        </Link>
        <Link className="w-full h-full flex items-center  rounded-xl  overflow-clip bg-white dark:bg-gray-900 p-2 mt-0 ">
            <div className="relative h-14 w-14  bg-gray-300 rounded-xl flex justify-center items-center">
              <p className="absolute -top-1 -right-2 px-1 text-xs bg-red-600 text-white rounded-full">
                New
              </p>
              <NotificationIcon className="mx-auto my-auto w-8 h-8 text-red-600" />
            </div>
            <div className="flex flex-col justify-start dark:text-white text-black pl-4">
              <p className="text-xs font-semibold">
                {" "}
                2019 ICSCA, Penang, Malaysia
              </p>
              <p className="text-xs text-opacity-80">2024 09 01</p>
              <p className="text-xs text-ellipsis">
                CarePro - Property Insurance Landing Page
              </p>
            </div>
          </Link>
          
        </div>
      </div>
      </div>

      
    </nav>
  );
}
