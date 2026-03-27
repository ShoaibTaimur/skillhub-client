import { useNavigate } from "react-router";
import { Button } from "./ui/button";

const SignupReq = () => {
    const navigate=useNavigate();
  return (
    <div className="gradient-secondary px-4 sm:px-10 py-10">
      <h1 className="inter text-center text-white text-[30px] sm:text-[40px] font-bold">
        Ready to Get Started?
      </h1>
      <p className="inter text-center text-white text-[13px] sm:text-[15px]">
        Join thousands of learners and instructors already using SkillHub to
        grow their careers.
      </p>
      <div className="flex justify-center mt-8">
        <Button onClick={()=>navigate("/signup")} variant="create" className="inter text-[15px] sm:text-[20px] p-4 sm:p-6 rounded-2xl">Create Free Account</Button>
      </div>
    </div>
  );
};

export default SignupReq;
