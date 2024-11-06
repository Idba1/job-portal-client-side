import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const LogIn = () => {
    const { signInUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation systems
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const onSubmit = (data) => {
        const { email, password } = data;


        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            });
    };

    return (
        <div className="bg-white dark:bg-gray-300">
            <div className="flex flex-col-reverse lg:flex-row bg-white dark:bg-gray-200 p-7">

                <div className="items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div  className="" >
                                <img className="w-20  lg:w-36 h-12 lg:h-20 mx-auto" src="https://i.ibb.co/hZ9VcF6/logo.png" alt="" />
                            </div>
                            <p className="mt-3 text-sky-700 dark:text-sky-700">Log In to Your Account</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-sky-700 dark:text-sky-700">Email Address</label>
                                    <input type="text" name="email" id="email" placeholder="email" className="block w-full px-4 py-2 mt-2 text-sky-700 placeholder-sky-700 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-sky-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                    <div className="mt-6">

                                        <input  type="password" name="password" id="password" placeholder="Password" className="block w-full px-4 py-2 mt-2 text-sky-700 placeholder-sky-700 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-sky-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"   {...register("password", { required: true })}
                                        />
                                        {errors.password && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign in
                                        </button>
                                    </div>
                                    </div>
                                
                            </form>
                            <p className="mt-4 text-center text-sky-700 dark:text-sky-700">or sign in with</p>
                            <SocialLogin></SocialLogin>
                            <p className="mt-6 text-sm text-center text-sky-700">Don't have an account yet? <Link to={"/register"} className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-cover md:block hidden md:w-2/5 lg:block lg:w-2/5" style={{ backgroundImage: "url(https://i.ibb.co/0jvdLRX/pexels-photo-4065892.webp)" }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Log In to Your Account</h2>
                            <p className="max-w-xl mt-3 text-white">
                            Access your account securely with our user-friendly login interface. Enter your credentials to explore personalized features and manage your profile seamlessly.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogIn;