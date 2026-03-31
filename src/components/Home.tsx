import { useContext } from "react";
import Category from "./Category";
import Comments from "./Comments";
import FeaturedSkills from "./FeaturedSkills";
import Hero from "./Hero";
import SignupReq from "./SignupReq";
import WorkingStep from "./WorkingStep";
import { AuthContext } from "@/Context/AuthContext";

const Home = () => {
  const info = useContext(AuthContext);
  const user = info?.user;
  return (
    <div className="px-4 sm:px-10 gradient-primary">
      <div className="fade-in">
        <Hero />
      </div>
      <div className="fade-in">
        <Category />
      </div>
      <div className="fade-in">
        <FeaturedSkills />
      </div>
      <div className="fade-in">
        <WorkingStep />
      </div>
      <div className="fade-in">
        <Comments />
      </div>
      <div className="fade-in">{user ? "" : <SignupReq />}</div>
    </div>
  );
};

export default Home;
