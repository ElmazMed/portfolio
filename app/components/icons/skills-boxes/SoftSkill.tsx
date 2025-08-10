import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function SoftSkill() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center h-16 w-80 mt-20 bg-white opacity-85 border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd]">
        <h2 className="text-primary text-2xl font-semibold text-center flex justify-center items-center gap-2">
          <WorkspacePremiumIcon /> Soft Skills
        </h2>
      </div>
      <div className="h-[32rem] w-80 bg-primary p-5 border border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd] rounded-br-3xl">
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white uppercase opacity-85 text-xl tracking-widest">
            • Communication
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white uppercase opacity-85 text-xl tracking-widest">
            • Problem-Solving
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white uppercase opacity-85 text-xl tracking-widest">
            • Adaptability
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white uppercase opacity-85 text-xl tracking-widest">
            • Teamwork & Collaboration
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white uppercase opacity-85 text-xl tracking-widest">
            • Time Management
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white uppercase opacity-85 text-xl tracking-widest">
            • Attention to Detail
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 mb-6">
          <p className="text-white uppercase opacity-85 text-xl tracking-widest">
            • Empathy & User-Centered Thinking
          </p>
        </div>
      </div>
    </div>
  );
}
