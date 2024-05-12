import { useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const email = user?.email || 'user@email.com';
    const name = user?.displayName || 'user';


    const handleFormSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const picture_URL = form.picture_URL.value
        const job_title = form.job_title.value
        const fullName = form.fullName.value
        const emailAddress = form.emailAddress.value
        const postingDate = form.postingDate.value
        const deadline = startDate
        const category = form.category.value
        const salary_range = parseFloat(form.salary_range.value)
        const applicantsNumber = parseFloat(form.applicantsNumber.value)
        const description = form.description.value
        const jobData = {
            picture_URL,
            job_title,
            fullName,
            emailAddress,
            postingDate,
            deadline,
            category,
            salary_range,
            applicantsNumber,
            description,
        }
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/add-job`,
                jobData
            )
            console.log(data)
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'successfully Post a Job!',
            });
            navigate('/my-jobs')
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Post a Job
                </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='picture_URL'>
                                Job Banner
                            </label>
                            <input
                                id='picture_URL'
                                name='picture_URL'
                                type='url'
                                placeholder="image url"
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Job Title
                            </label>
                            <input
                                id='job_title'
                                name='job_title'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='fullName'>
                                Name
                            </label>
                            <input
                                id='fullName'
                                type='text'
                                value={name}
                                name='name'
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                value={email}
                                name='email'
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md'
                            >
                                <option value='On-time Job'>On-time Job</option>
                                <option value='Remote Job'>Remote Job</option>
                                <option value='Hybrid Job'>Hybrid Job</option>
                                <option value='Part-time Job'>Part-time Job</option>
                            </select>
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='postingDate'>
                                postingDate
                            </label>
                            <input
                                id='postingDate'
                                name='postingDate'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/* <div>
                            <label className='text-gray-700 ' htmlFor='deadline'>
                            Deadline
                            </label>
                            <input
                                id='deadline'
                                name='deadline'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div> */}

                        <div>
                            <label className='text-gray-700 ' htmlFor='salary_range'>
                                Salary Range
                            </label>
                            <input
                                id='salary_range'
                                name='salary_range'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='applicantsNumber'>
                                Applicate Number
                            </label>
                            <input
                                id='applicantsNumber'
                                name='applicantsNumber'
                                defaultValue={0}
                                disabled
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>

                    </div>

                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='job-description'>
                            Job Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                        ></textarea>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddJob