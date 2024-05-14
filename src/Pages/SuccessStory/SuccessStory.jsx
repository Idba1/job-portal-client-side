import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SuccessStory = () => {
    const stories = [

        {
            id: 1,
            imageUrl: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            name: 'John Doe',
            companyName: 'TechSolutions Inc.',
        },
        {
            id: 2,
            imageUrl: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
            name: 'Jane Smith',
            companyName: 'GlobalTech Ltd.',
        },
        {
            id: 3,
            imageUrl: 'https://i.ibb.co/3pvyPq7/pexels-photo-774909.webp',
            name: 'Michael Johnson',
            companyName: 'Innovate Systems',
        },
        {
            id: 4,
            imageUrl: 'https://i.ibb.co/rGZj9yN/pexels-photo-1680172.webp',
            name: 'Emily Brown',
            companyName: 'WebWorks Solutions',
        },
        {
            id: 5,
            imageUrl: 'https://i.ibb.co/gZmtr83/pexels-photo-91227.webp',
            name: 'David Wilson',
            companyName: 'DataDriven Enterprises',
        },
        {
            id: 6,
            imageUrl: 'https://i.ibb.co/2dTfr42/pexels-photo-762020.webp',
            name: 'Sarah Martinez',
            companyName: 'SmartSoft Innovations',
        },
        {
            id: 7,
            imageUrl: 'https://i.ibb.co/s98GyMd/pexels-photo-3768894.webp',
            name: 'Robert Taylor',
            companyName: 'TechBridge Solutions',
        },
        {
            id: 8,
            imageUrl: 'https://i.ibb.co/0GMRFss/pexels-photo-2379004.jpg',
            name: 'Jennifer Lee',
            companyName: 'DataStream Technologies',
        },
        {
            id: 9,
            imageUrl: 'https://i.ibb.co/SfcxwhC/pexels-photo-3727463.webp',
            name: 'William Clark',
            companyName: 'CloudWorks Innovations',
        },
        {
            id: 10,
            imageUrl: 'https://i.ibb.co/2dTfr42/pexels-photo-762020.webp',
            name: 'Amanda Rodriguez',
            companyName: 'AgileTech Solutions',
        },
    ];

    const containerRef = useRef(null);

    const scrollCards = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 2;
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollCards, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='my-10 md:my-14 lg:my-20'>
            <div className="">
                <h2 className="text-2xl text-center font-semibold sm:text-4xl text-[#0077B5]">Heroes In Top Companies_</h2>
                <p className="mt-4 text-center mb-8 dark:text-sky-950"> Unveiling the stories of exceptional individuals from industry-leading <br /> organizations, motivating job seekers on JobNest.</p>
            </div>
            <div className="overflow-hidden relative">
                <div className="flex" ref={containerRef} style={{ minHeight: '100%', whiteSpace: 'nowrap', overflowX: 'hidden' }}>
                    {stories.map((story) => (
                        <motion.div
                            key={story.id}
                            className="inline-block w-full max-w-sm mx-auto my-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: 'inline-block', margin: '0 10px' }}
                        >
                            <motion.div
                                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                                style={{ backgroundImage: `url(${story.imageUrl})` }}
                            ></motion.div>

                            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{story.name}</h3>
                                <p className="px-3 py-2 text-center text-gray-700 dark:text-gray-300">{` ${story.companyName}`}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;
