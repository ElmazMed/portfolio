import ArchitectureIcon from "@mui/icons-material/Architecture";

export default function ToolsSkill() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center h-16 w-80 mt-20 bg-white opacity-85 border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd]">
        <h2 className="text-primary text-2xl font-semibold text-center flex justify-center items-center gap-2">
          <ArchitectureIcon /> Tools
        </h2>
      </div>
      <div className="h-[32rem] w-80 bg-primary p-5 border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd] rounded-br-3xl">
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • FIGMA
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 3 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • REST API's
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • CLOUDINARY
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 1 Year
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • SWAGGER
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 1 Year
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • POSTMAN
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • GIT/GITHUB
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • JEST
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 1 Year
          </span>
        </div>
      </div>
    </div>
  );
}
