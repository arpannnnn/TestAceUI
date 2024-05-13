"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { Button } from "../components/ui/moving-border";
export function HeroNew() {
    const images = [
        "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1655827660902-fd200443d7b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Explore Nepal's captivating beauty,<br />where every corner tells a tale.
                </motion.p>
                <div className="mt-9">
                    <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white 
                        border-neutral-200 dark:border-slate-800 from-transparent via-emerald-500 to-transparent">
                        Explore More </Button> </div>
            </motion.div>
        </ImagesSlider>
    );
}
