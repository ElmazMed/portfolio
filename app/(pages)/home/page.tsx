import Image from "next/image";
import myAvatar from "../../assets/myAvatar.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex gap-3">
          <div className="w-1/2 flex justify-end">
            <Image
              src={myAvatar}
              alt="My avatar image"
              className="rounded-full h-64 w-44"
            />
          </div>
          <div className="w-10/12">
            <h2 className="text-white opacity-75 text-3xl font-bold mb-3">
              Mohamed El Mazgour
            </h2>

            <p className="text-white opacity-85 text-2xl font-light">
              <Typewriter
                words={["Full-Stack Javascript web developer."]}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.8, ease: "easeOut" }}>
              <p className="text-white opacity-70 font-light text-justify w-1/2 leading-7 hover:opacity-90 transition ease-in-out duration-700">
                I'm a web developer based in Vilnius, Lithuania, with hands-on
                experience as a full-stack developer. I specialize in building
                robust, scalable, and user-friendly web applications using
                modern technologies such as React, Next.js, Node.js, and
                MongoDB. I'm passionate about creating seamless digital
                experiences and continuously improving my skill set with the
                latest tools and frameworks.
              </p>
            </motion.div>
            <div
              className="relative h-80 w-1/2 mt-7 bg-primary  border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd]
 rounded-lg">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-primary text-white px-4">
                Work Experience
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <h1 className="text-transparent bg-gradient-to-r from-white via-slate-400 bg-clip-text opacity-75 font-extrabold text-8xl">
            About me.
          </h1>
        </div>
      </div>
    </>
  );
}
