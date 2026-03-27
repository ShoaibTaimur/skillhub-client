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
      <Hero />
      <Category />
      <FeaturedSkills />
      <WorkingStep />
      <Comments />
      {user ? "" : <SignupReq />}
    </div>
  );
};

export default Home;
