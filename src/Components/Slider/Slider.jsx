import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
    return (
        <div>
            <style>
                {`
                .text-wrapper {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold; 
                }
                `}
            </style>
            <div className="carousel w-full relative h-screen">
                <div id="item1" className="carousel-item w-full relative">
                    <div className="text-wrapper h-100vh">
                        <Typewriter
                            words={['Hello Everyone. Welcome To JobNest!', 'JobNest connects job seekers with diverse onsite roles, fostering collaboration, growth, and career advancement opportunities.']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img  src="https://i.ibb.co/ynLtcnH/download.webp" className="w-full h-100vh" alt="Banner 2" />
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <div className="text-wrapper">
                        <Typewriter
                            words={['Hello Everyone. Welcome To JobNest!', 'JobNest offers remote job opportunities, allowing individuals to work from anywhere with flexibility and autonomy.']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img src="https://i.ibb.co/mvXRYb7/istockphoto-1337405813-612x612.jpg" className="w-full" alt="Banner 6" />
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <div className="text-wrapper">
                        <Typewriter
                            words={['Hello Everyone. Welcome To JobNest!', 'JobNest offers hybrid job opportunities, combining the flexibility of remote work with the collaboration of onsite presence. ']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img src="https://i.ibb.co/PxBj1Qw/download-1.jpg" className="w-full" alt="Banner 3" />
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <div className="text-wrapper">
                        <Typewriter
                            words={['Hello Everyone. Welcome To JobNest!', 'JobNest presents part-time job opportunities for individuals seeking flexible work arrangements. These roles allow for reduced hours, ideal for students, parents, or those seeking supplementary income. ']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img src="https://i.ibb.co/PxBj1Qw/download-1.jpg" className="w-full" alt="Banner 4" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;