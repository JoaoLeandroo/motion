"use client"
import ButtonAnimate from "@/components/ButtonAnimate";
import Image from "next/image";
import { motion } from "motion/react";


export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <motion.div 
        className="w-full max-w-[1920px] mx-auto overflow-hidden h-[340px] bg-red-400"
        initial={{ x: -1000 }}
        animate={{x: 0}}
        transition={{ duration: 2 }}
      >
        <Image
          src={"/bg.jpg"}
          width={3000}
          height={0}
          alt="background"
          className="w-full object-contain"
        />
      </motion.div>
      <div className="w-full h-[340px] bg-blue-300"></div>
      <div className="w-full h-[340px] bg-blue-200"></div>
      <div className="w-full h-[340px] bg-blue-100 flex items-center justify-center"
      >
        <ButtonAnimate />
      </div>
    </div>
  );
}
