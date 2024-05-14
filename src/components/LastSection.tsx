"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";

export function LastSection() {
  return (
    <div className="py-12 bg-gray-900"> 
<div>
        <div className="text-center">
          <h2 className="text-base text-teal-700 font-semibold tracking-wide uppercase">
            "Jay Nepal "
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Nepal
          </p>
        </div>
        </div>


    <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Pixel Picasso
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Behold, my digital Mona Lisas. Each pixel meticulously placed, each line of code a stroke of genius. Prepare to have your socks knocked off.
          </p>
        </div>
        <Image
          src="/"
          width={500}
          height={500}
          alt=""
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Code Connoisseur
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Welcome to my kingdom of ones and zeros, where I reign supreme as the mighty Code Overlord. Bugs fear me, browsers bow before me. Let's dive deep into the labyrinth of logic together.


        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Tech Tinkerer
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Ever seen a digital MacGyver in action? That's me. I can turn a pile of circuitry and coffee-stained napkins into a masterpiece of technological ingenuity. Let's get our hands dirty and build something legendary.


          </p>
        </div>
        <Image
          src="/"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    /</div>
  );
}
