import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Register from '../Pages/RegisterPage/Register';
import LogIn from '../Pages/LogInPage/LogIn';
import BlogPage from '../Pages/BlogPage/BlogPage';
import Home from '../Components/Home/Home';
import AllJob from '../Pages/AllJob/AllJob';
import AppliedJob from '../Pages/AppliedJob/AppliedJob';
import AddJob from '../Pages/AddJob/AddJob';
import MyJob from '../Pages/MyJob/MyJob';
import JobDetails from '../Pages/JobDetails.jsx/JobDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateJob from '../Pages/UpdateJob/UpdateJob';
import Career from '../Pages/Career/Career';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: ({alljob}) => fetch(`${import.meta.env.VITE_API_URL}/alljob`),
                // loader: ({blogs}) => fetch(`${import.meta.env.VITE_API_URL}/career-blog`),
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/alljob',
                element: <AllJob></AllJob>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/alljob`)
            },

            {
                path: '/job/:id',
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)

            },
            {
                path: '/applied-jobs',
                element: <PrivateRoute>
                    <AppliedJob></AppliedJob>
                </PrivateRoute>,
            },
            {
                path: '/add-job',
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>,
            },
            {
                path: '/my-jobs',
                element: <PrivateRoute>
                    <MyJob></MyJob>
                </PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <UpdateJob></UpdateJob>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)

            },
            {
                path: '/blogs',
                element: <BlogPage></BlogPage>,
            },

            {
                path: '/career-blog',
                element: <Career></Career>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/career-blog`)
            },
            {
                path: '/career-blog/:id',
                element:
                    <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/career-blog/${params.id}`)
            },

        ],
    },
])


export default Routes;