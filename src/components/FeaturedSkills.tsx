import { CornerUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
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


const FeaturedSkills = () => {
    const [skills,setSkills]=useState<Skill[]>([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const loadData= async()=>{
        const res=await fetch("https://skillhub-server-bice.vercel.app/skills");
        const data=await res.json();
        setSkills(data);
    };
    loadData();
  },[])
  console.log(skills);
  return (
    <div className="gradiant-primary px-4 sm:px-10 ">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="inter font-bold text-[25px] md:text-[30px]">Featured Skills</h1>
          <p className="inter opacity-60 text-[16px]">
            Hand-picked by our community
          </p>
        </div>
        <Button
          onClick={() => navigate("/skills")}
          variant="link"
          className="h-10 w-fit border-none mb-2 cursor-pointer flex justify-start px-0"
        >
          View All
          <CornerUpRight />
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                skills.map((skill)=><SkillCard key={skill._id} skill={skill}></SkillCard>)
            }
      </div>
    </div>
  );
};

export default FeaturedSkills;
