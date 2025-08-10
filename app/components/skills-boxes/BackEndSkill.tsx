import DnsIcon from "@mui/icons-material/Dns";

export default function BackEndSkill() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center md:h-16 md:w-80 h-12 w-full bg-white opacity-85 border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd]">
        <h2 className="text-primary text-2xl h-[20rem] font-semibold text-center flex justify-center items-center gap-2">
          <DnsIcon /> Back-End
        </h2>
      </div>
      <div className="md:w-80 bg-primary p-5 border md:h-[28rem] mb-10 border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd] rounded-br-3xl">
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • NODE JS
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • EXPRESS JS
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • NEST JS
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 1 Year
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • MONGO DB
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 2 Years
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white opacity-85 text-xl tracking-widest">
            • POSTGRE SQL
          </p>
          <span className="bg-[#132f49] text-effect text-[.65rem] rounded-full p-2">
            + 1 Year
          </span>
        </div>
      </div>
    </div>
  );
}
