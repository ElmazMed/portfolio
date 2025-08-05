import Image from "next/image";
import myAvatar from "../../assets/myAvatar.png";

export default function page() {
  return (
    <div className="h-44 w-44">
      <Image src={myAvatar} alt="My avatar image" className="rounded-full" />
    </div>
  );
}
