import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "./ui/button";
import { CornerUpLeft } from "lucide-react";
import SkillCard from "./SkillCard";
import { Skeleton } from "./ui/skeleton";

type Skill = {
  _id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  title: string;
};
const SkillDetail = () => {
  const navigate = useNavigate();
  const idOBJ = useParams();
  const id = idOBJ.id;
  const [skillDetails, setSkillDetails] = useState<Skill | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://skillhub-server-bice.vercel.app/skills");
      const datas: Skill[] = await res.json();
      const updatedSkills = datas.filter((data) => data._id !== id);
      setSkills(updatedSkills);
    };
    loadData();
  }, [id]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await fetch(`https://skillhub-server-bice.vercel.app/skills/${id}`);
      const data = await res.json();
      setSkillDetails(data);
      setLoading(false);
    };
    loadData();
  }, [id]);
  console.log(id);

  const name = skillDetails?.name;
  const description = skillDetails?.description;
  const category = skillDetails?.category;
  const price = skillDetails?.price;
  const title = skillDetails?.title;

  return (
    <div className="gradiant-primary px-4 sm:px-10">
      <div className=" border-2 rounded-2xl px-5 md:px-10 pt-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <Button
              onClick={() => navigate("/")}
              variant="link"
              className="h-10 w-fit border-none mb-2 cursor-pointer flex justify-start px-0"
            >
              <CornerUpLeft /> Back to Home
            </Button>
            <div className="mt-3">
              <div className="bg-[#ede0fd98] py-0.75 px-3 rounded-2xl w-fit flex items-center mb-2">
                <p className="gradient-text font-bold text-[20px]">
                  {category}
                </p>
              </div>
              <h1 className="inter font-medium text-[25px] lg:text-[40px] mb-4">
                {title}
              </h1>
              <p className="inter font-bold text-[15px] lg:text-[20px]">
                Description
              </p>
              <p className="inter opacity-60 text-[15px] lg:text-[20px] mb-10">
                {description}
              </p>
              <p className="opacity-80 mb-8">
                By-{" "}
                <span className="gradient-text text-[15px] lg:text-[20px] font-extrabold">
                  {name}
                </span>
              </p>
            </div>
          </div>
          <p className="gradient-text font-bold inter text-[15px] sm:text-[20px] lg:text-[25px] mb-7">
            ${price}
          </p>
        </div>
      </div>
      <div className="gradiant-primary px-4 sm:px-10 mt-10">
        <h1 className="inter font-bold text-[25px] md:text-[30px]">
          More Skills
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
    </div>
  );
};

export default SkillDetail;
