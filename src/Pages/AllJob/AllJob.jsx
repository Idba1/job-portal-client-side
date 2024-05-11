import { Link } from "react-router-dom";

const AllJob = () => {
    return (
        <div className="grid grid-cols-1 mx-auto gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 p-6">
            <div className=" rounded-md shadow-md bg-gray-950 dark:text-white">
               
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Web Development</h2>
                        <p className="dark:text-white">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <Link to={"/job-details"}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details Button
                        </button>
                    </Link>
                </div>
            </div>
            <div className=" rounded-md shadow-md bg-gray-950 dark:text-white">
               
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Web Development</h2>
                        <p className="dark:text-white">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <Link to={"/job-details"}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details Button
                        </button>
                    </Link>
                </div>
            </div>
            <div className=" rounded-md shadow-md bg-gray-950 dark:text-white">
               
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Web Development</h2>
                        <p className="dark:text-white">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <Link to={"/job-details"}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details Button
                        </button>
                    </Link>
                </div>
            </div>
            <div className=" rounded-md shadow-md bg-gray-950 dark:text-white">
               
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Web Development</h2>
                        <p className="dark:text-white">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <Link to={"/job-details"}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details Button
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllJob;