import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider"
import axios from "axios"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"

const MyJob = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])

    // useEffect(() => {
    //     const getData = async () => {
    //         const { data } = await axios(
    //             `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`
    //         )
    //         setJobs(data)
    //     }
    //     getData()
    // }, [user])
    // console.log(jobs);

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`
        )
        setJobs(data)
    }

    const handleDelete = async id => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });

            if (result.isConfirmed) {
                const { data } = await axios.delete(
                    `${import.meta.env.VITE_API_URL}/job/${id}`
                );

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                // Refresh your data
                getData();
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });
        }
    }

    return (
        <div>

            <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50" style={{ backgroundImage: "url('https://i.ibb.co/PYqt3cr/pexels-photo-1089842.jpg') ", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", height: "300px", }}>
                <div className="container mx-auto">
                    <div className=" items-center justify-between">
                        <h2 className="text-center text-2xl tracking-tighter text-sky-700 font-bold">
                            Unlock Your Career Potential with JobNest
                        </h2>
                        <div className="space-x-2 text-center text-sky-950 py-2 lg:py-0">
                            <p>Explore diverse job opportunities tailored to your skills and interests on JobNest. <br /> Discover fulfilling roles, grow your career, <br /> and achieve your professional aspirations.</p>
                        </div>
                        <div className="mt-4 items-center justify-between">
                            <button href="#" rel="noreferrer noopener" className="mt-5 mx-auto px-5  lg:mt-0 py-3 rounded-md border block dark:bg-sky-700 dark:text-sky-100">Apply</button>
                        </div>
                    </div>
                </div>
            </div>


            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        {jobs.length} Jobs
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
                                                    <span>Title</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Deadline</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Price Range</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Category
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Description
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Edit
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>

                                        {
                                            jobs.map(job => (
                                                <tr key={job._id}>
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {job.title}
                                                    </td>

                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {job.deadline}
                                                    </td>

                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {job.salaryRange}
                                                    </td>
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <p
                                                                className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                             text-xs'
                                                            >
                                                                {job.category}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td
                                                        title=''
                                                        className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                                                    >
                                                        {job.description}
                                                    </td>
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-6'>
                                                            <button
                                                                onClick={() => handleDelete(job._id)}
                                                                className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                                <svg
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                    fill='none'
                                                                    viewBox='0 0 24 24'
                                                                    strokeWidth='1.5'
                                                                    stroke='currentColor'
                                                                    className='w-5 h-5'
                                                                >
                                                                    <path
                                                                        strokeLinecap='round'
                                                                        strokeLinejoin='round'
                                                                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <Link to={`/update/${job._id}`}>
                                                                <button className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                                                                    <svg
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        fill='none'
                                                                        viewBox='0 0 24 24'
                                                                        strokeWidth='1.5'
                                                                        stroke='currentColor'
                                                                        className='w-5 h-5'
                                                                    >
                                                                        <path
                                                                            strokeLinecap='round'
                                                                            strokeLinejoin='round'
                                                                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </Link>

                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default MyJob