"use client";

import Home from "./(pages)/home/page";
import MyLinks from "./components/MyLinks";
import Nav from "./components/Nav";

export default function Page() {
  return (
    <>
      <div className="flex justify-between mt-20 md:p-12 p-3">
        {/* <Nav /> */}
        <Home />
        {/* <MyLinks /> */}
      </div>
    </>
  );
}
