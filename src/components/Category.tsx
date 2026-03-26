import { Brush, Code, Film, GraduationCap, Megaphone } from "lucide-react";

const Category = () => {
  return (
    <div className="gradient-primary px-10 py-10">
      <h1 className="inter text-center font-bold text-[25px] md:text-[30px] mb-2">Browse by Category</h1>
      <p className="text-center inter opacity-60">Find the perfect skill in your area of interest</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-7 sm:gap-10 mt-10 px-8">
        <div className="p-6 bg-white flex flex-col gap-2 justify-center items-center shadow rounded-xl">
          <div className="bg-linear-to-br from-pink-500 to-rose-500 h-12 w-12 rounded-2xl flex items-center justify-center">
            <Brush size={25} color="white" />
          </div>
          <h1 className="inter text-[14px] font-bold">Design</h1>
          <p className="inter text-[12px] opacity-60">234 skills</p>
        </div>
        <div className="p-6 bg-white flex flex-col gap-2 justify-center items-center shadow rounded-xl">
          <div className="bg-linear-to-br from-blue-500 to-cyan-500 h-12 w-12 rounded-2xl flex items-center justify-center">
            <Code size={25} color="white" />
          </div>
          <h1 className="inter text-[14px] font-bold">Programming</h1>
          <p className="inter text-[12px] opacity-60">234 skills</p>
        </div>
        <div className="p-6 bg-white flex flex-col gap-2 justify-center items-center shadow rounded-xl">
          <div className="bg-linear-to-br from-orange-500 to-amber-500 h-12 w-12 rounded-2xl flex items-center justify-center">
            <Megaphone size={25} color="white" />
          </div>
          <h1 className="inter text-[14px] font-bold">Marketing</h1>
          <p className="inter text-[12px] opacity-60">234 skills</p>
        </div>
        <div className="p-6 bg-white flex flex-col gap-2 justify-center items-center shadow rounded-xl">
          <div className="bg-linear-to-br from-green-500 to-emerald-500 h-12 w-12 rounded-2xl flex items-center justify-center">
            <GraduationCap size={25} color="white" />
          </div>
          <h1 className="inter text-[14px] font-bold">Teaching</h1>
          <p className="inter text-[12px] opacity-60">234 skills</p>
        </div>
        <div className="p-6 bg-white flex flex-col gap-2 justify-center items-center shadow rounded-xl">
          <div className="bg-linear-to-br from-purple-500 to-violet-500 h-12 w-12 rounded-2xl flex items-center justify-center">
            <Film size={25} color="white" />
          </div>
          <h1 className="inter text-[14px] font-bold">Video Editing</h1>
          <p className="inter text-[12px] opacity-60">234 skills</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
