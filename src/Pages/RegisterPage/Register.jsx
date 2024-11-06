import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    // const Successfully = () => toast('Register Successful!');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation systems
    const navigate = useNavigate();
    const from = "/";

    const validatePassword = (password) => {
        if (password.length < 6) {
            toast.error('Password must contain at least 6 character');
            return;

        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return;
        }
        return true;
    };

    const onSubmit = (data) => {
        const { email, password } = data;


        const passwordValidation = validatePassword(password);
        if (passwordValidation !== true) {
            // console.log(passwordValidation);
            return;
        }

        createUser(email, password)
            .then((result) => {
                navigate(from);
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt: createdAt };
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
            })
    }



    return (
        <div>
            <section className="bg-white dark:bg-gray-200">
                <div className="flex justify-center min-h-screen">
                    <div className="bg-cover md:block md:w-2/5 lg:block lg:w-2/5" style={{ backgroundImage: "url('https://i.ibb.co/vxkh78P/pexels-photo-7034393.webp')" }}>
                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-sky-800 capitalize dark:text-sky-700">
                            Sign Up for Free
                            </h1>

                            <p className="mt-4 text-sky-950 dark:text-sky-950">
                            Start your journey with us by creating a new account. Sign up now to unlock exclusive features, connect with opportunities, and elevate your career path.
                            </p>

                            <div className="mt-6">
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Name</label>
                                    <input type="text" name="username" id="username" placeholder="your name" className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600   dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("FullName", { required: true })}
                                    />
                                    {errors.FullName && (
                                        <span className="text-red-500">This field is required</span>
                                    )}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Photo URL</label>
                                    <input type="text" name="photo_url" id="photo_url" placeholder="photo_url" className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600   dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("photo_url", { required: true })}
                                    />
                                    {errors.photo_url && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>


                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Email address</label>
                                    <input type="email"  name="email" id="email" placeholder="email" className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600   dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Password</label>
                                    <input type={showPassword ? "text" : "password"}name="password" id="password" placeholder="Password" className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600   dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("password", { required: true })}
                                    />
                                    <span className="absolute top-96 right-24" onClick={() => setShowPassword(!showPassword)}>
                                        {/* {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        } */}
                                    </span>
                                    {errors.password && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <button className="flex items-center  justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Sign Up </span>
                                    <svg xmlns="http://www.w3.org/9500/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <Toaster> </Toaster>
                                </button>
                            </form>
                            <div>
                                <p className="mt-4 text-center text-sky-950 dark:text-sky-950">or sign in with</p>
                              <SocialLogin></SocialLogin>
                                <div>
                                    <p className="mt-4 text-center text-sky-950 dark:text-sky-950">If you have an accout?
                                        <Link to={"/login"} rel="noopener noreferrer"  className="underline text-sky-950 dark:text-sky-950">Log In</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Register;