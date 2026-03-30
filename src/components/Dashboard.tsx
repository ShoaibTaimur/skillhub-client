import { AuthContext } from "@/Context/AuthContext";
import { Eye, Heart, Newspaper } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import SkillTab from "./SkillTab";
import Swal from "sweetalert2";

type Skill = {
  _id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  name: string;
};

const Dashboard = () => {
  const info = useContext(AuthContext);
  const user = info?.user;
  const name = user?.displayName;
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`https://skillhub-server-bice.vercel.app/skills/${name}`);
      const data = await res.json();
      setSkills(data);
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
            <h1 className="inter text-[18px] md:text-[24px] font-bold">{skills.length}</h1>
            <p className="inter text-[12px] md:text-[15px] opacity-60">Total Posts</p>
          </div>
        </div>
        <div className="flex items-center gap-12 border border-blue-100 rounded-lg p-4 ">
          <div className="w-[10%]">
            <div className="p-2 sm:p-3 rounded-lg w-fit bg-blue-100">
              <Heart />
            </div>
          </div>
          <div className="w-[90%]">
            <h1 className="inter text-[18px] md:text-[24px] font-bold">{skills.length}</h1>
            <p className="inter text-[12px] md:text-[15px] opacity-60">Total Like</p>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-12 border border-blue-100 rounded-lg p-4 col-span-2 md:col-span-1">
          <div className="w-[10%]">
            <div className="p-2 sm:p-3 rounded-lg w-fit bg-blue-100">
              <Eye />
            </div>
          </div>
          <div className="w-[90%]">
            <h1 className="inter text-[18px] md:text-[24px] font-bold">{skills.length}</h1>
            <p className="inter text-[12px] md:text-[15px] opacity-60">Total Views</p>
          </div>
        </div>
      </div>
      <h1 className="inter font-bold text-[16px] md:text-[22px]">My skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <SkillTab key={skill._id} skill={skill} handleDelete={handleDelete}></SkillTab>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
