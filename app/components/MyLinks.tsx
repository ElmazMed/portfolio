import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from "@mui/icons-material/RssFeed";

export default function MyLinks() {
  return (
    <>
      <div className="relative flex items-center justify-center flex-col gap-4 p-4 bg-white rounded-full shadow-2xl">
        <Link
          href="/home"
          className="text-secondary transition duration-700 ease-in-out hover:text-primary">
          
            <LinkedInIcon />
          
        </Link>
        <Link href="/skills">
          <GitHubIcon />
        </Link>
        <Link href="/experience">
          <RssFeedIcon />
        </Link>
      </div>
    </>
  );
}
