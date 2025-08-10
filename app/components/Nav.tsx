import Link from "next/link";
import HomeLottieIcon from "./icons/HomeLottieIcon";
import ExpertiseLottieIcon from "./icons/SkillsLottieIcon";
import ExperienceLottieIcon from "./icons/ExperienceLottieIcon";
import ContactLottieIcon from "./icons/ContactLottieIcons";

import MyLinks from "./MyLinks";

function Nav() {
  return (
    <>
      <div className="md:fixed md:left-12 md:mt-36 md:h-56 md:w-14 mb-8 h-14 w-full flex items-center justify-center md:flex-col gap-4 p-4 bg-secondary rounded-full shadow-2xl">
        <Link href="" className="bg-white opacity-95 p-1 rounded-full">
          <HomeLottieIcon />
        </Link>
        <Link href="/skills">
          <ExpertiseLottieIcon />
        </Link>
        <Link href="/experience">
          <ExperienceLottieIcon />
        </Link>
        <Link href="/contact">
          <ContactLottieIcon />
        </Link>
        <div className="flex items-center gap-3 md:hidden">
          <div className="bg-effect opacity-20 h-8 w-[2px] rounded-full" />
          <MyLinks />
        </div>
      </div>
    </>
  );
}

export default Nav;
