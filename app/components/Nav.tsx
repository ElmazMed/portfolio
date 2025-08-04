import Link from "next/link";
import HomeLottieIcon from "./icons/HomeLottieIcon";
import ExpertiseLottieIcon from "./icons/SkillsLottieIcon";
import ExperienceLottieIcon from "./ExperienceLottieIcon";
import ContactLottieIcon from "./icons/ContactLottieIcons";

function Nav() {
  return (
    <>
      <div className="relative flex items-center justify-center flex-col gap-4 p-4 bg-white rounded-full shadow-2xl">
        <Link
          href="/home"
          className="text-secondary transition duration-700 ease-in-out hover:text-primary">
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
