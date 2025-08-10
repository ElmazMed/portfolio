import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

export default function FrontEndSkill() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center md:h-16 md:w-80 h-12 w-full bg-white opacity-85 border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd]">
        <h2 className="text-primary md:text-2xl font-semibold text-center flex justify-center items-center gap-2">
          <ImportantDevicesIcon /> Front-End
        </h2>
      </div>
      <div className="flex flex-col md:w-80 w-full md:h-[28rem] mb-10 bg-primary p-5 border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd] rounded-br-3xl">
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • HTML5/CSS3
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 3 Years
          </span>
        </div>

        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • JAVASCRIPT
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 3 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • REACT JS
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • NEXT JS
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • TAILWIND CSS
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • BOOTSTRAP
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 3 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • MATERIAL UI
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
      </div>
    </div>
  );
}
