import Link from "next/link";
import HomeLottieIcon from "./icons/HomeLottieIcon";
import ExpertiseLottieIcon from "./icons/SkillsLottieIcon";
import ExperienceLottieIcon from "./icons/ExperienceLottieIcon";
import ContactLottieIcon from "./icons/ContactLottieIcons";

function Nav() {
  return (
    <>
      <div className="sticky mt-36 h-56 w-14 flex items-center justify-center flex-col gap-4 p-4 bg-secondary rounded-full shadow-2xl">
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
      </div>
    </>
  );
}

export default Nav;
