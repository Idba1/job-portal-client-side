import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import TabSection from "../Tabs/TabSection";
import Fquestion from "../../Pages/Queastion/Fquestion";

const Home = () => {
    const alljob = useLoaderData();
    // console.log(alljob);
    return (
        <div>
            <Slider></Slider>
            <TabSection alljob={alljob}></TabSection>
            <Fquestion></Fquestion>
        </div>
    );
};

export default Home;