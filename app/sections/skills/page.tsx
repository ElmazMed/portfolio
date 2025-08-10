import CodeOffIcon from "@mui/icons-material/CodeOff";

import FrontEndSkill from "@/app/components/skills-boxes/FrontEndSkill";
import BackEndSkill from "@/app/components/skills-boxes/BackEndSkill";
import ToolsSkill from "@/app/components/skills-boxes/ToolsSkill";
import SoftSkill from "@/app/components/skills-boxes/SoftSkill";

export default function Skills() {
  return (
    <div className="md:mt-48 mt-28">
      <h1 className="text-white md:text-5xl mb-20 text-3xl font-extrabold opacity-80 text-center">
        <CodeOffIcon style={{ fontSize: "40px" }} /> My Skills
      </h1>
      <div className="md:flex gap-8">
        <FrontEndSkill />
        <BackEndSkill />
        <ToolsSkill />
        <SoftSkill />
      </div>
    </div>
  );
}
