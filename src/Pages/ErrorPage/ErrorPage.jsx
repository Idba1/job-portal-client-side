import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
      <section className='bg-white '>
        <div className='container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-5'>
          <div className='wf-ull lg:w-1/2'>
            <p className='text-4xl font-medium text-gray- '>404 error</p>
            <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
              Page not found
            </h1>
            <p className=' text-gray-500 dark:text-gray-400'>
              Sorry, the page you are looking for doesnt exist.Here are some
              helpful links:
            </p>
  
            <div className='flex items-center mt-6 gap-x-3'>
              <Link to={"/"} className='btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-sky-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Take me home
              </Link>
            </div>
          </div>
  
          <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>
            <img
              className=' w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover '
              src='https://i.ibb.co/ZG9KHnZ/error-404-6052476-640.png'
              alt=''
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default ErrorPage