import { TrendingUp, Upload, Users } from "lucide-react";

const WorkingStep = () => {
  return (
    <div className="gradient-primary px-10 py-10">
      <h1 className="inter font-bold text-[30px] text-center">How it works</h1>
      <p className="inter text-[14px] opacity-60 text-center mb-10">Three simple steps to get started</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="p-6 flex flex-col gap-2 justify-center items-center rounded-xl">
          <div className="gradient-secondary h-14 w-14 rounded-2xl flex items-center justify-center">
            <Upload size={30} color="white" />
          </div>
          <h1 className="inter sm:text-[14px] font-bold">Post Your Skill</h1>
          <p className="inter sm:text-[12px] opacity-60 text-center">Share your expertise and set your own pricing.</p>
        </div>
        <div className="p-6 flex flex-col gap-2 justify-center items-center rounded-xl">
          <div className="gradient-secondary h-14 w-14 rounded-2xl flex items-center justify-center">
            <Users size={30} color="white" />
          </div>
          <h1 className="inter sm:text-[14px] font-bold">Connect</h1>
          <p className="inter sm:text-[12px] opacity-60 text-center">Find learners or instructors that match your needs.</p>
        </div>
        <div className="p-6 flex flex-col gap-2 justify-center items-center rounded-xl">
          <div className="gradient-secondary h-14 w-14 rounded-2xl flex items-center justify-center">
            <TrendingUp size={30} color="white" />
          </div>
          <h1 className="inter sm:text-[14px] font-bold">Grow</h1>
          <p className="inter sm:text-[11px] md:text-[12px] opacity-60 text-center">Build your reputation and expand your network.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
