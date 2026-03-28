import { Eye, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

type Skill = {
  _id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  name: string;
};

type SkillCardProps = {
  skill: Skill;
};
const SkillCard = ({ skill }: SkillCardProps) => {
  const title = skill.title;
  const name = skill.name;
  const category = skill.category;
  const price = skill.price;
  const id=skill._id;

  const navigate=useNavigate();

  return (
    <div className="bg-white p-4 rounded-3xl shadow flex flex-col gap-5">
      <div className="mt-3 h-[70%]">
        <div className="bg-[#ede0fd98] py-0.75 px-3 rounded-2xl w-fit flex items-center mb-2">
          <p className="gradient-text font-bold text-[12px]">{category}</p>
        </div>
        <h1 className="inter font-medium text-[16px] mb-1">{title}</h1>
        <p className="opacity-80">
          By- <span className="gradient-text font-extrabold">{name}</span>
        </p>
      </div>
      <div className="flex justify-between items-center h-[15%]">
        <p className="gradient-text inter font-bold">${price}</p>
        <div className="flex gap-2">
          <div className="flex opacity-60 gap-1">
            <Heart />
            <p>123</p>
          </div>
          <div className="flex opacity-60 gap-1">
            <Eye />
            <p>189</p>
          </div>
        </div>
      </div>
      <Button onClick={()=>navigate(`/skills/${id}`)} variant="login" className="w-full h-10">
        View Deatils
      </Button>
    </div>
  );
};

export default SkillCard;
