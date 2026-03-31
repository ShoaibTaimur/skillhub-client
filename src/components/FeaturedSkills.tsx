import { CornerUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
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

const FeaturedSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await fetch("https://skillhub-server-bice.vercel.app/skills");
      const data = await res.json();
      setSkills(data.slice(0, 6));
      setLoading(false);
    };
    loadData();
  }, []);
  return (
    <div className="gradiant-primary px-4 sm:px-10 ">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="inter font-bold text-[25px] md:text-[30px]">
            Featured Skills
          </h1>
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

export default FeaturedSkills;
