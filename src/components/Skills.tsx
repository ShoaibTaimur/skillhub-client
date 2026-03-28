import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";


type Skill = {
  _id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  name:string;
};

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(()=>{
    const loadData=async()=>{
        const res=await fetch("https://skillhub-server-bice.vercel.app/skills");
        const data=await res.json();
        setSkills(data);
    }
    loadData();
  },[])

  return (
    <div className="gradiant-primary px-4 sm:px-10">
        <h1 className="inter font-bold text-[25px] md:text-[30px]">Browse Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
