import Link from "next/link";
import HomeLottieIcon from "./icons/HomeLottieIcon";
import ExpertiseLottieIcon from "./icons/SkillsLottieIcon";
import ExperienceLottieIcon from "./icons/ExperienceLottieIcon";
import ContactLottieIcon from "./icons/ContactLottieIcons";

function Nav() {
  return (
    <>
      <div className="sticky mt-36 h-56 w-14 flex items-center justify-center flex-col gap-4 p-4 bg-[#122b39] rounded-full shadow-2xl">
        <Link href="">
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
