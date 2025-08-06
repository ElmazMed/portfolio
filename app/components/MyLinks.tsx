import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from "@mui/icons-material/RssFeed";

export default function MyLinks() {
  return (
    <>
      <div className="sticky mt-36 flex h-56 w-14 items-center justify-center flex-col gap-4 p-4 bg-[#122b39] rounded-full shadow-2xl">
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
    </>
  );
}
