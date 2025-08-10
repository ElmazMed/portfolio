import Image from "next/image";
import myAvatar from "../../assets/myAvatar.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function Home() {
  return (
    <>
      <div className="relative ">
        <div className="md:flex gap-3">
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              src={myAvatar}
              alt="My avatar image"
              className="rounded-full md:h-64 h-44 w-44"
            />
          </div>
          <div className="md:w-10/12 w-full">
            <h2 className="text-white md:text-justify text-center opacity-75 md:text-3xl text-md font-bold mb-3 mt-3 ">
              Mohamed El Mazgour
            </h2>

            <p className="text-white opacity-85 md:text-2xl md:text-justify text-center text-md font-light">
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
              <p className="text-white opacity-70 font-light text-justify md:text-base text-xs md:w-3/5 mt-2 leading-7 hover:opacity-90 transition ease-in-out duration-700">
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
              className="relative md:w-3/5 w-full mt-20 bg-primary  border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd]
 rounded-lg">
              <span className="absolute left-1/2 -translate-x-1/2 md:text-base text-sm -top-3 bg-primary text-white font-medium opacity-80 px-4">
                <WorkOutlineIcon /> Work Experience
              </span>
              <div className="md:px-5 px-2 py-8">
                <div className="relative flex gap-11">
                  <span className="absolute left-0 md:-translate-x-2/3 -translate-y-5 md:-translate-y-0 top-0 text-white text-xs opacity-85 font-light">
                    2024 - 2025
                  </span>
                  <div className="md:ml-11 ml-8">
                    <h1 className="text-white md:mb-5 mb-3 opacity-85 font-bold">
                      Full-Stack Web Developer{" "}
                      <span className="text-white bg-primary opacity-75 font-semibold">
                        • Pubsilon
                      </span>
                    </h1>
                    <p className="text-white opacity-75 md:mb-3 mb-2 text-sm">
                      • Developing and maintaining both frontend and backend
                      features of a large-scale web application.
                    </p>
                    <p className="text-white opacity-75 md:mb-3 mb-2 text-sm">
                      • Designing responsive user interfaces with Tailwind CSS
                      and Material UI.
                    </p>
                    <p className="text-white opacity-75 md:mb-3 mb-2 text-sm">
                      • Building RESTful APIs and integrating third-party
                      services like Twilio, Stripe and Firebase.
                    </p>
                    <p className="text-white opacity-75 md:mb-3 mb-2 text-sm">
                      • Implementing authentication and user management systems
                      (JWT, OAuth).
                    </p>
                    <p className="text-white opacity-75 md:mb-3 mb-2 text-sm">
                      • Collaborating closely with UI/UX designers and other
                      developers in an agile team environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-12">
          <h1 className="text-transparent bg-gradient-to-r from-white via-slate-400 bg-clip-text opacity-75 font-extrabold md:text-8xl text-3xl">
            About me.
          </h1>
        </div>
      </div>
    </>
  );
}
