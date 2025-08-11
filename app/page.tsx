"use client";

import Home from "./sections/home/page";
import MyLinks from "./components/MyLinks";
import Nav from "./components/Nav";
import Skills from "./sections/skills/page";
import Projects from "./sections/projects/page";

export default function Page() {
  return (
    <>
      <div className="md:mt-20 mt-7 md:py md:px-36 p-3 h-[200rem]">
        <Nav />
        <Home />
        <Skills />
        <Projects />
        <MyLinks />
      </div>
    </>
  );
}
