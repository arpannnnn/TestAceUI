"use client";
import Link from "next/link";

import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";

import Image from "next/image";

export default function SecondPage() {
  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-700 font-semibold tracking-wide uppercase">"Focus Powers Mastery! "</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Projects</p>

        </div>
      </div>

      <div className=" mx-20 mt-5 grid grid-cols-3 sm:grid-cols-3 gap-60 justify-center">
        <div>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image src="/Sallu.jpg" 
            alt="Pics" 
            height="400"
             width="400" 
             className="object-contain" />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Salman Khan</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore non reprehenderit nemo odio quidem itaque amet temporibus, nostrum earum, necessitatibus ipsum quas nisi consequuntur eius maiores sed sunt rem!
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Explore </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">More</span>
            </button>
          </BackgroundGradient>
        </div>
        <div>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image src="/Sallu.jpg" alt="pics" height="400" width="400" className="object-contain" />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Salman Khan</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore non reprehenderit nemo odio quidem itaque amet temporibus, nostrum earum, necessitatibus ipsum quas nisi consequuntur eius maiores sed sunt rem!
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Explore </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">More</span>
            </button>
          </BackgroundGradient>
        </div>
        <div>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image src="/Sallu.jpg" alt="pics" height="400" width="400" className="object-contain" />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Salman Khan</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore non reprehenderit nemo odio quidem itaque amet temporibus, nostrum earum, necessitatibus ipsum quas nisi consequuntur eius maiores sed sunt rem!
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Explore </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">More</span>
            </button>
          </BackgroundGradient>
        </div>
      </div>



      <div className="mt-20 text-center">
        <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-500 text-neutral-600 bg-white hover:bg-gray-100 transition duration-200">
          View More
        </Link>
      </div>
    </div>

  )
}

