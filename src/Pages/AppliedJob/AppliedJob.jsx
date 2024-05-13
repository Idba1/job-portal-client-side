import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios";

const AppliedJob = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/apply/${user?.email}`
            )
            setJobs(data)
        }
        getData()
    }, [user])
    // console.log(jobs);


    return (

        <div>
            <div className="">
                <div className=" items-center justify-between">
                    <h2 className="text-center mt-7 lg:mt-28 text-2xl tracking-tighter text-sky-700 font-bold">
                    Track Your Career Progress
                    </h2>
                    <div className="space-x-2 text-center text-sky-950 py-2 lg:py-0">
                        <p>Stay organized and informed with JobNest's Applied Jobs feature. <br /> Keep track of your job applications and monitor your career journey effortlessly.</p>
                    </div>
                </div>
                <div className="relative mt-6 lg:mt-11 w-full flex gap-4 py-6 overflow-x-auto">
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/KmjNZXR/pexels-photo-8960464.webp" alt="Image 1" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/0jvdLRX/pexels-photo-4065892.webp" alt="Image 2" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/4mp7S7D/pexels-photo-218863.jpg" alt="Image 3" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/D9yCt7g/pexels-photo-270695.webp" alt="Image 4" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                        src="https://i.ibb.co/Hhg3skQ/pexels-photo-3937174.webp" alt="Image 5" />
                </div>

                <section className='container px-4 mx-auto pt-12'>
                    <div className='flex items-center gap-x-3'>
                        <h2 className='text-lg font-medium text-sky-700 '>Your Applied Job</h2>

                        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                            {jobs.length}
                        </span>
                    </div>

                    <div className='flex flex-col mt-6'>
                        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                    <table className='min-w-full divide-y divide-gray-200'>
                                        <thead className='bg-gray-50'>
                                            <tr>
                                                <th
                                                    scope='col'
                                                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <div className='flex items-center gap-x-3'>
                                                        <span>Name:</span>
                                                    </div>
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <span>Email:</span>
                                                </th>


                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    Resume Link
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200 '>
                                            {
                                                jobs.map(job => (
                                                    <tr key={job._id}>
                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {job.name}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {job.email}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {job.resumeLink}
                                                        </td>

                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div>
            </div>
            )
};

            export default AppliedJob;