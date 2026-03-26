import { Star } from "lucide-react";

const Comments = () => {
  return (
    <div className="gradient-primary px-10 py-10">
      <h1 className="inter font-bold text-[30px] text-center">
        What People Say
      </h1>
      <p className="inter text-[14px] opacity-60 text-center mb-10">
        Trusted by thousands of learners and instructors
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="border border-gray-250 shadow p-6 flex flex-col gap-4 rounded-2xl">
          <div className="flex">
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
          </div>
          <div>
            <p className="inter italic text-[14px] opacity-60">
              "SkillHub completely transformed my career. I found amazing
              mentors and tripled my freelance income in just 6 months."
            </p>
          </div>
          <div>
            <h1 className="inter font-bold">Jordan Lee</h1>
            <p className="inter text-[14px] opacity-60">
              Freelance Designer
            </p>
          </div>
        </div>
        <div className="border border-gray-250 shadow p-6 flex flex-col gap-4 rounded-2xl">
          <div className="flex">
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
          </div>
          <div>
            <p className="inter italic text-[14px] opacity-60">
              "The quality of instructors on SkillHub is unmatched. I learned React in weeks and landed my dream job."
            </p>
          </div>
          <div>
            <h1 className="inter font-bold">Priya Sharma</h1>
            <p className="inter text-[14px] opacity-60">
              Software Engineer
            </p>
          </div>
        </div>
        <div className="border border-gray-250 shadow p-6 flex flex-col gap-4 rounded-2xl">
          <div className="flex">
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
            <Star className="text-yellow-300 fill-yellow-300" />
          </div>
          <div>
            <p className="inter italic text-[14px] opacity-60">
              "As both a learner and instructor, SkillHub provides the perfect platform to share knowledge and grow professionally."
            </p>
          </div>
          <div>
            <h1 className="inter font-bold">Marcus Brown</h1>
            <p className="inter text-[14px] opacity-60">
              Marketing Director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
