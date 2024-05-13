import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
            console.log(passwordValidation);
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
                console.error(error)
            })
    }



    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div className="bg-cover md:block md:w-2/5 lg:block lg:w-2/5" style={{ backgroundImage: "url('https://i.ibb.co/F7Rqv0N/register.png')" }}>
                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your free account now.
                            </h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </p>

                            <div className="mt-6">
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                    <input type="text" name="username" id="username" placeholder="your name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("FullName", { required: true })}
                                    />
                                    {errors.FullName && (
                                        <span className="text-red-500">This field is required</span>
                                    )}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Photo URL</label>
                                    <input type="text" name="photo_url" id="photo_url" placeholder="photo_url" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("photo_url", { required: true })}
                                    />
                                    {errors.photo_url && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>


                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email"  name="email" id="email" placeholder="email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input type={showPassword ? "text" : "password"}name="password" id="password" placeholder="Password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("password", { required: true })}
                                    />
                                    <span className="absolute top-7 right-2" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                    {errors.password && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <button className="flex items-center  justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Sign Up </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <Toaster> </Toaster>
                                </button>
                            </form>
                            <div>
                                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>
                              <SocialLogin></SocialLogin>
                                <div>
                                    <p className="mt-4 text-center text-gray-600 dark:text-gray-400">If you have an accout?
                                        <Link to={"/login"} rel="noopener noreferrer"  className="underline text-gray-600 dark:text-gray-400">Log In</Link>
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