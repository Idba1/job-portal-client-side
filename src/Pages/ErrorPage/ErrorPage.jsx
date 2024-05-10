import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Oops! Page Not Found</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">We are sorry, but the page you are looking for could not be found. It may have been removed, had its name changed, or is temporarily unavailable. Please check the URL for any errors or return to the homepage.</p>
                    <Link href="/"> <button className="btn text-white bg-green-600">Home </button></Link>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ErrorPage;