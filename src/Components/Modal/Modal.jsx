import { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Modal = ({ onClose, deadline, loggedInUserInfo }) => {
    const { user } = useContext(AuthContext)
    const [resumeLink, setResumeLink] = useState('');
    const [email, setEmail] = useState(user?.email || 'user@email.com');
    const [name, setName] = useState(user?.displayName || 'user');

    const isEmailMatch = () => {
        const userEmail = user?.email;
        console.log(userEmail);
        const postEmail = loggedInUserInfo?.email;
        console.log(postEmail);
        return userEmail === postEmail;
    };

    const isDeadlinePassed = () => {
        const deadlineDate = new Date(deadline);
        // console.log(deadline);
        const currentDate = new Date();
        // console.log(currentDate);
        return currentDate > deadlineDate;
    };




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isEmailMatch()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops....',
                text: 'You cannot apply your own job!',
            });
            return;
        }
        if (isDeadlinePassed()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The deadline passed :(',
            });
            return;
        }
        try {
            // send data to server
            const response = await axios.post('https://job-nest-server-zeta.vercel.app/apply', {
                name: name,
                email: email,
                resumeLink: resumeLink
            });
            console.log('Server response:', response.data);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your application has been submitted successfully!',
            });
            onClose();
        } catch (error) {
            console.error('Error sending data:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
            });
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleResumeLinkChange = (event) => {
        setResumeLink(event.target.value);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-xl font-semibold mb-4">Apply for this job</h2>
                <form onSubmit={handleSubmit}>


                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Resume Link:</label>
                        <input type="url" value={resumeLink} onChange={handleResumeLinkChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                    </div>


                    <div className="flex justify-between">

                        <button type="button" onClick={handleClose} className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none">Cancel</button>

                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>

                    </div>


                </form>
            </div>
        </div>
    );
};

export default Modal;
