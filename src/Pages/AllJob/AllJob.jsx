import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllJob = () => {

    const alljob = useLoaderData();
    console.log(alljob);

    const [searchTittle, setSearchTittle] = useState('');

    const filteredJobs = alljob.filter(job =>
        job.title.toLowerCase().includes(searchTittle.toLowerCase())
    );


    return (

        <div className="mx-auto w-2/3 my-14">
            <div className="mb-10">
                <h1 className="">If you locking any specific job! Search here...</h1>
                <input
                    className="block w-2/3 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    placeholder="Search by Job Title"
                    value={searchTittle}
                    onChange={(e) => setSearchTittle(e.target.value)}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Job Posting Date</th>
                        <th>Application Deadline</th>
                        <th>Salary Range</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredJobs.map(job => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.postingDate}</td>
                            <td>{job.deadline}</td>
                            <td>{job.salaryRange}</td>
                            <td>
                                <Link to={"/job-details"}> <button className="btn">View Details</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllJob;