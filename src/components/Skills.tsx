import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { Skeleton } from "./ui/skeleton";

type Skill = {
  _id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  name: string;
};

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await fetch("https://skillhub-server-bice.vercel.app/skills");
      const data = await res.json();
      setSkills(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="gradiant-primary px-4 sm:px-10">
      <h1 className="inter font-bold text-[25px] md:text-[30px]">
        Browse Skills
      </h1>
      {loading ? (
        <div className="flex justify-center h-60 items-center">
          <div className="flex w-full max-w-4xl flex-col gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="flex gap-4" key={index}>
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill}></SkillCard>
        ))}
      </div>
      )}
    </div>
  );
};

export default Skills;
