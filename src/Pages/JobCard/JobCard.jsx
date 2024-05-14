import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const JobCard = ({ job }) => {
    // console.log(job);
    const { _id, category,loggedInUserInfo, name, title, postingDate, deadline, salaryRange, applicantsNumber } = job
    return (
        <div>
            <div data-aos="fade-down" data-aos-duration="1000" className="mx-auto mt-7 max-w-3xl  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                {/* <img className="object-cover w-full h-full" src="https://i.ibb.co/p4c5JrX/images-3.jpg" alt="Article" /> */}

                <div className="p-6 dark:text-sky-950 bg-white border border-sky-200 " >
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">category: {category}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-sky-950 hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>
                        {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{loggedInUserInfo.name}</p> */}
                    </div>
                    <div>
                        <p className=" font-semibold text-[#333333] dark:text-sky-950 bg-white">
                            posted this job: {loggedInUserInfo.name}
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">

                            {/* <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{name}</a>
                            </div> */}
                            <span className="mx-1 text-xs text-gray-600 dark:text-sky-950">Posting Date: {postingDate}</span>
                            <span className="mx-1 text-xs text-gray-600 dark:text-sky-950">Deadline: {deadline}</span>
                        </div>
                        <div className="mx-1 text-xs text-gray-600 dark:text-sky-950">
                            <span>Applicants Number: {applicantsNumber}</span>
                        </div>
                        <div className="mx-1 text-xs text-gray-600 dark:text-sky-950">
                            <span>Salary Range: {salaryRange}</span>
                        </div>
                    </div>
                </div>
                <Link to={`/job/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide  dark:bg-[#0077B5] dark:text-gray-50">View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;