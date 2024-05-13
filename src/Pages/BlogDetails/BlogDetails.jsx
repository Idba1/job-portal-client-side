import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const details = useLoaderData()
    // console.log(details);


    return (
        <div>
            <div className="w-3/4 my-10 lg:w-3/4 mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{details.author}</a>
                    </div>
                    <a rel="noopener noreferrer" href="/career-blog">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={details.bannerUrl} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>{details.date}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{details.title}</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600">{details.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;