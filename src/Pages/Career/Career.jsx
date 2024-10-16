// import { Link, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Career = ({ blogs }) => {

    // const blogs = useLoaderData();
    // console.log(blogs);

    // fetch(`${import.meta.env.VITE_API_URL}/career-blog`)
    //     .then(response => response.json())
    //     .then(data => {
    //         const responseData = data;
    //         console.log(responseData);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });

    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 mb-8 lg:mb-24">
                <div className=" p-6 mx-auto space-y-6 sm:space-y-12">
                    <div data-aos="flip-up" data-aos-duration="1000"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src="https://i.ibb.co/yPQkHkV/Modern-Minimalist-Simple-Technology-Banner.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <Link to={'/blogs'} className="text-2xl font-semibold text-[#0077B5] sm:text-4xl group-hover:underline group-focus:underline"> Hello Everyone. Welcome To JobNest Learning!</Link>
                            <p>
                               JobNest offers remote job opportunities, allowing individuals to work from anywhere with flexibility and autonomy.
                            </p>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


                        {
                            blogs.map(blog => (
                                <Link to={`/career-blog/${blog._id}`} key={blog._id} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                    <img data-aos="zoom-in" data-aos-duration="2000"  role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.bannerUrl} />
                                    <div className="p-6 space-y-2">
                                        <h3  className="text-2xl font-semibold text-sky-950 group-hover:underline group-focus:underline">{blog.title}</h3>
                                        <span className="text-xs dark:text-gray-600">{blog.date}</span>
                                        {blog.content && <p>{blog.content.substring(0, 85)}.... </p>}
                                    </div>
                                    <Link to={`/career-blog/${blog._id}`}>
                                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-sky-950 dark:text-sky-100 ">Read More...</button>
                                    </Link>
                                </Link>
                            ))
                        }



                    </div>
                    <div className="flex justify-center">

                    </div>
                </div>
            </section >
        </div >
    );
};

export default Career;