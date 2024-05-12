import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../../Pages/JobCard/JobCard';

const TabSection = ({ alljob }) => {
// console.log(alljob);
    return (
        <div className='my-16'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                Explore Different Job Types
            </h1>

            <p className='max-w-2xl mx-auto mt-3 mb-9 text-center text-gray-500 '>
                Discover the strength and flexibility of our platform, empowering you to explore diverse opportunities.
            </p>
            <Tabs>
                <TabList>
                    <Tab>On-Site JOb</Tab>
                    <Tab>Remote Job</Tab>
                    <Tab>Hybrid Job</Tab>
                    <Tab>Part-Time Job</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {alljob.filter(j => j.category === 'On Site')
                            .map(job => (
                                <JobCard key={job._id} job={job} />
                            ))}
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {alljob.filter(j => j.category === 'Remote')
                            .map(job => (
                                <JobCard key={job._id} job={job} />
                            ))}
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {alljob.filter(j => j.category === 'Hybrid')
                            .map(job => (
                                <JobCard key={job._id} job={job} />
                            ))}
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {alljob.filter(j => j.category === 'Part-Time')
                            .map(job => (
                                <JobCard key={job._id} job={job} />
                            ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
};

export default TabSection;