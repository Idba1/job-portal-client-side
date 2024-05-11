import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import TabSection from "../Tabs/TabSection";

const Home = () => {
    const alljob = useLoaderData();
    console.log(alljob);
    return (
        <div>
            <Slider></Slider>
            <TabSection></TabSection>
        </div>
    );
};

export default Home;