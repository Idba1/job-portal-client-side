import Slider from "../Slider/Slider";
import TabSection from "../Tabs/TabSection";
import Fquestion from "../../Pages/Queastion/Fquestion";
import Career from "../../Pages/Career/Career";
import { useState, useEffect } from 'react';
import SuccessStory from "../../Pages/SuccessStory/SuccessStory";
import Newsletter from "../../Pages/Newsletter/Newsletter";


const Home = () => {
    const [alljob, setalljob] = useState([]);
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/alljob`)
            .then(response => response.json())
            .then(data => {
                setalljob(data);
            })
            .catch(error => {
                console.error('Error fetching data for Alljob:', error);
            });

        fetch(`${import.meta.env.VITE_API_URL}/career-blog`)
            .then(response => response.json())
            .then(data => {
                setblogs(data);
            })
            .catch(error => {
                console.error('Error fetching data for career-blog:', error);
            });
    }, []);

    return (
        <div>
            <Slider></Slider>
            <TabSection alljob={alljob}></TabSection>
            <Career blogs={blogs}></Career>
            <Fquestion></Fquestion>
            <SuccessStory></SuccessStory>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;