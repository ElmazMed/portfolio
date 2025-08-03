import Link from "next/link";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ExtensionIcon from "@mui/icons-material/Extension";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

function Nav() {
  return (
    <>
      <div className="relative flex items-center justify-center flex-col gap-4 p-4 bg-white rounded-full shadow-2xl">
        <Link href="/home" className="text-secondary transition duration-700 ease-in-out hover:text-primary">
        <div className="flex flex-col items-center">

          <ExtensionIcon />
          <p className="hidden">Home</p>
        </div>
        </Link>
        <Link href="/expertise">
          <DataObjectIcon className="text-secondary"/>
        </Link>
        <Link href="/experience">
          <BusinessCenterIcon className="text-secondary"/>
        </Link>
        <Link href="/contact">
          <ConnectWithoutContactIcon className="text-secondary"/>
        </Link>
      </div>
    </>
  );
}

export default Nav;
