import CodeOffIcon from "@mui/icons-material/CodeOff";

import FrontEndSkill from "@/app/components/skills-boxes/FrontEndSkill";
import BackEndSkill from "@/app/components/skills-boxes/BackEndSkill";
import ToolsSkill from "@/app/components/skills-boxes/ToolsSkill";
import SoftSkill from "@/app/components/skills-boxes/SoftSkill";

export default function Skills() {
  return (
    <div className="md:mt-48 mt-28 relative">
      <h1 className="text-white md:text-5xl mb-20 text-3xl font-extrabold opacity-80 text-center">
        <CodeOffIcon style={{ fontSize: "40px" }} /> My Skills
      </h1>
      <div className="md:flex gap-8">
        <FrontEndSkill />
        <BackEndSkill />
        <ToolsSkill />
        <SoftSkill />
      </div>
      <div className="absolute bottom-0 -translate-x-12">
        <h1 className="text-transparent bg-gradient-to-r from-white via-slate-400 bg-clip-text opacity-75 font-extrabold md:text-8xl text-3xl">
          Skills.
        </h1>
      </div>
    </div>
  );
}
