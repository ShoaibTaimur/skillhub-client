import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "./ui/button";
import { CornerUpLeft } from "lucide-react";

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

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`http://localhost:8000/skills/${id}`);
      const data = await res.json();
      setSkillDetails(data);
    };
    loadData();
  }, [id]);

  const name = skillDetails?.name;
  const description = skillDetails?.description;
  const category = skillDetails?.category;
  const price = skillDetails?.price;
  const title = skillDetails?.title;

  return (
    <div className="gradiant-primary px-4 sm:px-10 border-2 rounded-2xl mx-4 md:mx-10 mt-10">
      <div className="flex justify-between items-center">
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
              <p className="gradient-text font-bold text-[20px]">{category}</p>
            </div>
            <h1 className="inter font-medium text-[40px] mb-4">{title}</h1>
            <p className="inter font-bold text-[20px]">Description</p>
            <p className="inter opacity-60 mb-10">{description}</p>
            <p className="opacity-80 mb-8">
              By- <span className="gradient-text font-extrabold">{name}</span>
            </p>
            <p></p>
          </div>
        </div>
          <p className="gradient-text font-bold inter text-[25px]">${price}</p>
      </div>
    </div>
  );
};

export default SkillDetail;
