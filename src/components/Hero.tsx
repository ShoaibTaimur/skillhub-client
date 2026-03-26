import { Button } from "@/components/ui/button";
import { CornerUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center py-25 md:py-30 gradient-primary">
      <h1 className="inter font-extrabold text-[30px] text-center sm:text-[40px] md:text-[50px] lg:text-[72px]">
        Learn. Earn. <span className="gradient-text">Grow Your Skills.</span>
      </h1>
      <p className="inter text-gray-500 w-80 sm:w-120 md:w-150 lg:w-200 text-center text-[12px] sm:text-[13px] md:text-[18px] mb-7">
        The modern marketplace connecting learners with talented freelancers and
        instructors. Discover skills, hire experts, or share your knowledge.
      </p>
      <div className="flex flex-row gap-5 mb-5 md:mb-10">
        <Button
          onClick={() => navigate("/skills")}
          className="px-4 py-2 sm:px-8 sm:py-5 text-[13px] md:text-[20px]"
          variant="login"
        >
          Explore Skills
          <CornerUpRight />
        </Button>
        <Button
          onClick={() => navigate("/add-skill")}
          className="px-4 py-2 sm:px-8 sm:py-5 text-[13px] md:text-[20px]"
          variant="outline"
        >
          Post your Skill
        </Button>
      </div>
      <InputGroup className="max-w-70 sm:max-w-lg bg-white py-2 sm:py-5 rounded-2xl shadow-2xl">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Hero;
