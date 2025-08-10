"use client";
import { motion } from "framer-motion";
export default function AnimatedText() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.8, ease: "easeOut" }}>
        <p className="text-white opacity-70 font-light text-justify md:text-base text-xs md:w-3/5 mt-2 leading-7 hover:opacity-90 transition ease-in-out duration-700">
          I am a web developer based in Vilnius, Lithuania, with hands-on
          experience as a full-stack developer. I specialize in building robust,
          scalable, and user-friendly web applications using modern technologies
          such as React, Next.js, Node.js, and MongoDB. I am passionate about
          creating seamless digital experiences and continuously improving my
          skill set with the latest tools and frameworks.
        </p>
      </motion.div>
    </>
  );
}
