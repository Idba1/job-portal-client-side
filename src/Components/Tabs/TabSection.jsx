import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
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
                    <h2>On-Site JOb</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Remote Job</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Hybrid Job</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Part-Time Job</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
};

export default TabSection;