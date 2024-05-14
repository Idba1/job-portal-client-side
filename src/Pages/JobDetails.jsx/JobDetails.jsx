import { useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import { useLoaderData, } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    // console.log(job);
    const { bannerUrl, category, description, loggedInUserInfo, title, postingDate, deadline, salaryRange, applicantsNumber } = job;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [price, setPrice] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleApplyClick = () => {
        setIsModalOpen(true);
        
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 
        setIsModalOpen(false);
       
    };

    return (
        <div>
            <div className="mx-auto mt-9 max-w-3xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-sky-50">
                <div className="mx-auto mt-9 max-w-3xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-sky-50">
                    <img className="object-cover h-52 max-w-2xl mx-auto" src={bannerUrl} alt="Article" />

                    <div className="p-6">
                        <div>
                            <span className="text-xs font-medium text-sky-950 uppercase dark:text-sky-950">{category}</span>
                            <a href="#" className="block mt-2 text-xl font-semibold text-sky-700 transition-colors duration-300 transform dark:text-sky-700 hover:text-sky-900 hover:underline" tabIndex="0" role="link">{title}</a>
                            <p className="mt-2 text-sm text-sky-950 dark:text-sky-950">{description}</p>
                            <p className="mt-2 text-sm text-sky-950 dark:text-sky-950">Salary Range:{salaryRange}</p>
                            <p className="mt-2 text-sm text-sky-950 dark:text-sky-950">Applicants Number:{applicantsNumber}</p>

                        </div>
                        <div className=' flex space-x-5'>
                            <p className="mt-2 text-sm text-sky-950 dark:text-sky-950">postingDate:{postingDate}</p>
                            <p className="mt-2 text-sm text-sky-950 dark:text-sky-950">deadline:{deadline}</p>
                        </div>

                    </div>

                    <button onClick={handleApplyClick} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-sky-700 dark:text-gray-50">
                        Apply Button
                    </button>
                </div>

            </div>

            {isModalOpen && (
                <Modal onClose={closeModal} deadline={deadline} loggedInUserInfo={loggedInUserInfo}>
                    <h2 className="text-xl font-semibold">Apply for this job</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="price" className="text-gray-700">Price</label>
                                <input type="text" id="price" className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-950" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-gray-700">Email</label>
                                <input type="email" id="email" className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-950" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="comment" className="text-gray-700">Comment</label>
                                <textarea id="comment" className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-950" value={comment} onChange={(e) => setComment(e.target.value)} />
                            </div>
                        </div>
                        <button type="submit" className="mt-6 w-full bg-sky-700 text-white rounded-md py-2">Submit Application</button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default JobDetails;
