import { AuthContext } from "@/Context/AuthContext";
import { Eye, Heart, Newspaper } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import SkillTab from "./SkillTab";
import Swal from "sweetalert2";
import { Skeleton } from "./ui/skeleton";
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

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const info = useContext(AuthContext);
  const user = info?.user;
  const name = user?.displayName;
  const [skills, setSkills] = useState<Skill[]>([]);
  const navigate =useNavigate();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://skillhub-server-bice.vercel.app/skills/user/${name}`,
      );
      const data = await res.json();
      setSkills(data);
      setLoading(false);
    };
    loadData();
  }, [name]);
  const handleDelete = (id: string) => {
    fetch(`https://skillhub-server-bice.vercel.app/skills/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged || data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Skill has been deleted.",
            icon: "success",
          });

          const remain = skills.filter((skill) => skill._id !== id);
          setSkills(remain);
        }
      });
  };
  return (
    <div className="gradiant-primary px-4 sm:px-10">
      <h1 className="inter font-bold text-[25px] md:text-[30px]">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-3">
        <div className="flex items-center gap-12 border border-blue-100 rounded-lg p-4 ">
          <div className="w-[10%]">
            <div className="p-2 sm:p-3 rounded-lg w-fit bg-blue-100">
              <Newspaper />
            </div>
          </div>
          <div className="w-[90%]">
            <h1 className="inter text-[18px] md:text-[24px] font-bold">
              {skills.length}
            </h1>
            <p className="inter text-[12px] md:text-[15px] opacity-60">
              Total Posts
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12 border border-blue-100 rounded-lg p-4 ">
          <div className="w-[10%]">
            <div className="p-2 sm:p-3 rounded-lg w-fit bg-blue-100">
              <Heart />
            </div>
          </div>
          <div className="w-[90%]">
            <h1 className="inter text-[18px] md:text-[24px] font-bold">
              {skills.length}
            </h1>
            <p className="inter text-[12px] md:text-[15px] opacity-60">
              Total Like
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-12 border border-blue-100 rounded-lg p-4 col-span-2 md:col-span-1">
          <div className="w-[10%]">
            <div className="p-2 sm:p-3 rounded-lg w-fit bg-blue-100">
              <Eye />
            </div>
          </div>
          <div className="w-[90%]">
            <h1 className="inter text-[18px] md:text-[24px] font-bold">
              {skills.length}
            </h1>
            <p className="inter text-[12px] md:text-[15px] opacity-60">
              Total Views
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="inter font-bold text-[16px] md:text-[22px]">
          My skills
        </h1>
        <Button
          onClick={() => navigate("/add-skill")}
          className="px-4 py-2 sm:px-8 sm:py-5 text-[11px] md:text-[17px]"
          variant="login"
        >
          Add Skill
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
            <SkillTab
              key={skill._id}
              skill={skill}
              handleDelete={handleDelete}
            ></SkillTab>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
