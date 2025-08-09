import Link from "next/link";
import HomeLottieIcon from "./icons/HomeLottieIcon";
import ExpertiseLottieIcon from "./icons/SkillsLottieIcon";
import ExperienceLottieIcon from "./icons/ExperienceLottieIcon";
import ContactLottieIcon from "./icons/ContactLottieIcons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from "@mui/icons-material/RssFeed";

function Nav() {
  return (
    <>
      <div className="sticky md:mt-36 md:h-56 md:w-14 mb-8 h-14 w-full flex items-center justify-center md:flex-col gap-4 p-4 bg-secondary rounded-full shadow-2xl">
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
          <div className="bg-effect opacity-20 h-8 w-[2px] rounded-full"></div>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/elmazgour/"
            className="text-[#2ee2cd] transition duration-700 ease-in-out hover:text-[#0b66c3] hover:scale-110">
            <LinkedInIcon style={{ fontSize: "32px" }} />
          </Link>
          <Link
            href="https://github.com/ElmazMed"
            className="text-[#2ee2cd] transition duration-700 ease-in-out hover:text-white hover:scale-110"
            target="_blank">
            <GitHubIcon style={{ fontSize: "32px" }} />
          </Link>
          <Link
            href="https://wordpress.com/"
            className="text-[#2ee2cd] transition duration-700 ease-in-out hover:text-orange-400 hover:scale-110"
            target="_blank">
            <RssFeedIcon style={{ fontSize: "32px" }} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
