
const Newsletter = () => {
    return (
        <div className="lg:my-20 my-10">
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="lg:text-5xl text-3xl font-bold leading-none">Stay Informed with JobNest's Newsletter!</h1>
                        <p className="lg:text-lg text-base">Subscribe to JobNest's newsletter to receive the latest updates on job listings, career advice, industry insights, and exclusive promotions directly to your inbox.</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="self-center font-bold px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75  hover:dark:border-sky-950 hover:dark:bg-sky-100 hover:dark:text-sky-950 dark:text-gray-50 focus:dark:ring-sky-200 dark:ring-sky-950 dark:bg-sky-800">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;