
const BlogPage = () => {
    return (
        <>
            <div className="container px-6 py-16 mx-auto text-center">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Understanding Authentication and Server-Side Frameworks</h1>
                    <p className="mt-6 text-gray-500 dark:text-gray-300">Explore the essentials of authentication with a focus on access and refresh tokens in web apps. Learn about Express.js and Nest.js, two powerful server frameworks, and their capabilities for building scalable applications.</p>
                    <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Start Learn With JobNest
                    </button>
                </div>

                <div className="flex justify-center mt-10">
                    <img className="object-cover w-full h-full rounded-xl lg:w-4/5" src="https://i.ibb.co/yPQkHkV/Modern-Minimalist-Simple-Technology-Banner.png" alt="App Screenshot" />
                </div>
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                            pie.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-2">
                        <div>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/6n8x5Lj/download-1.png" alt="" />

                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                                    <img className="object-cover object-center w-10 h-10 rounded-full" src="https://i.ibb.co/mqkcQXf/black-dev.jpg" alt="" />

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Idba Islam</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Creative Developer</p>
                                    </div>
                                </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                                Access Token and Refresh Token
                            </h1>

                            <hr className="w-32 my-6 text-blue-500" />

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                <br />
                                <span className="text-base underline">Access Token:</span>
                                <br />

                                An access token is a credential used to access protected resources on behalf of a user. It is commonly used in authentication protocols like OAuth 2.0. Once a user successfully authenticates, the server issues an access token, which is then sent with each subsequent request to access protected resources. Access tokens typically have a limited lifespan to enhance security.
                                <br />
                                <span className="text-base underline">Refresh Token:</span>
                                <br />

                                A refresh token is also part of the OAuth 2.0 protocol. While access tokens are short-lived, refresh tokens are long-lived and are used to obtain new access tokens once the current one expires. This helps maintain user sessions without requiring them to re-enter their credentials frequently.
                                <br />
                                <span className="text-base underline">Where to Store:</span>
                                <br />
                                Access tokens should be stored securely on the client side, typically in memory or a secure storage mechanism such as browser session storage or HTTP-only cookies. Refresh tokens should be stored securely as well, often in a secure HTTP-only cookie to prevent them from being accessed by client-side scripts.
                            </p>

                            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
                        </div>
                        <div>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/27gFySF/download-2.png" alt="" />

                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                                    <img className="object-cover object-center w-10 h-10 rounded-full" src="https://i.ibb.co/mqkcQXf/black-dev.jpg" alt="" />

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Idba Islam</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Creative Developer</p>
                                    </div>
                                </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                                Express.js and Nest.js:
                            </h1>

                            <hr className="w-32 my-6 text-blue-500" />

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                <br />
                                <span className="text-base underline">Express.js:</span>
                                <br />
                                
                                Express.js is a popular web application framework for Node.js. It provides a robust set of features for building web and mobile applications, including routing, middleware support, template engines, and more. Express.js simplifies the process of building web servers and APIs in Node.js by providing a minimal and flexible framework.
                                <br />
                                <span className="text-base underline">Nest.js:</span>
                                <br />
                                
                                Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is heavily inspired by Angular, utilizing TypeScript and object-oriented programming principles to enhance code maintainability and developer productivity. Nest.js builds on top of Express.js, providing additional features
                            </p>

                            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
                        </div>
                        <div>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/4WgMzGs/1-Yjmcd5su9v-ETLPQQUOa-O0-A.jpg" alt="" />

                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                                    <img className="object-cover object-center w-10 h-10 rounded-full" src="https://i.ibb.co/mqkcQXf/black-dev.jpg" alt="" />

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Idba Islam</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Creative Developer</p>
                                    </div>
                                </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                            Explaining Code:
                            </h1>

                            <hr className="w-32 my-6 text-blue-500" />

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                            When explaining code, it's essential to dissect it into smaller parts and describe the purpose of each component. This includes variables, functions, control flow structures, and any external dependencies or libraries used.
                            </p>

                            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
                        </div>

                        {/* Repeat the same structure for other blog entries */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;