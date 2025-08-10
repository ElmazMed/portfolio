import CodeOffIcon from "@mui/icons-material/CodeOff";

import FrontEndSkill from "@/app/components/icons/skills-boxes/FrontEndSkill";
import BackEndSkill from "@/app/components/icons/skills-boxes/BackEndSkill";

export default function Skills() {
  return (
    <div className="mt-16">
      <h1 className="text-white text-5xl font-extrabold opacity-80 text-center">
        <CodeOffIcon style={{ fontSize: "40px" }} /> My Skills
      </h1>
      <div className="flex gap-8">
        <FrontEndSkill />
        <BackEndSkill />
      </div>
    </div>
  );
}
