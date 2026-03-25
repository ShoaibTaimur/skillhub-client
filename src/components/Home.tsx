import Category from "./Category";
import Comments from "./Comments";
import FeaturedSkills from "./FeaturedSkills";
import Footer from "./Footer";
import Hero from "./Hero";
import SignupReq from "./SignupReq";
import WorkingStep from "./WorkingStep";

const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <FeaturedSkills />
            <WorkingStep />
            <Comments />
            <SignupReq />
            <Footer />
        </div>
    );
};

export default Home;