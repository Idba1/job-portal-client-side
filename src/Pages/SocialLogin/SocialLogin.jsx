import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const { githubLogin } = useContext(AuthContext)

    // navigation systems
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || "/";
    const handleSocialLogin = (socialProvider) => {
        socialProvider().then((result) => {
            if (result.user) {
                navigate(from);
            }
            const email = result.user?.email;
            const createdAt = result.user?.metadata?.creationTime;
            const user = { email: email, createdAt: createdAt };
            fetch('https://job-nest-server-zeta.vercel.app', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your Account Created Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        })
            .catch(error => {
                // console.error(error)

            });
    };


    return (

        <>
            <a  onClick={() => handleSocialLogin(googleLogin)} href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-sky-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-sky-950hover:bg-sky-50 dark:hover:bg-sky-600 dark:hover:text-white">
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>
                <span className="mx-2">Sign in with Google</span>
            </a>
            <a onClick={() => handleSocialLogin(githubLogin)} href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-sky-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-sky-950hover:bg-sky-50 dark:hover:bg-sky-600 dark:hover:text-white">
                <svg className="w-6 h-6 mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.573 5.313 20.413 9.964 21.303C10.78 21.469 11 21.031 11 20.689V18.629C7.057 19.268 5.824 17.612 5.824 17.612C5.417 16.829 4.674 16.531 4.674 16.531C3.662 15.918 4.758 15.952 4.758 15.952C5.883 16 6.474 17.142 6.474 17.142C7.346 19.048 9.066 18.535 9.683 18.256C9.806 17.522 10.106 17.044 10.446 16.754C7.766 16.469 4.858 15.332 4.858 11.042C4.858 9.763 5.365 8.763 6.161 8.038C5.98 7.671 5.36 6.274 6.177 4.685C6.177 4.685 7.221 4.33 9.975 5.827C10.997 5.55 12.023 5.411 13.045 5.406C14.067 5.411 15.093 5.55 16.115 5.827C18.869 4.33 19.912 4.685 19.912 4.685C20.729 6.274 20.109 7.671 19.928 8.038C20.724 8.763 21.231 9.763 21.231 11.042C21.231 15.347 18.319 16.484 15.639 16.769C15.999 17.149 16.321 18.007 16.321 19.148V20.689C16.321 21.031 16.54 21.469 17.356 21.303C22.013 20.413 25.327 16.573 25.327 12C25.327 6.475 20.852 2 15.327 2H12Z" fill="#000000" />
                </svg>
                <span className="mx-2">Sign in with GitHub</span>
            </a>
        </>
    );
};

export default SocialLogin;