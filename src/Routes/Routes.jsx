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

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                path: '/alljobs',
                element: <AllJob></AllJob>,
            },
            {
                path: '/job-details',
                element: <JobDetails></JobDetails>,
            },
            {
                path: '/applied-jobs',
                element: <AppliedJob></AppliedJob>,
            },
            {
                path: '/add-job',
                element: <AddJob></AddJob>,
            },
            {
                path: '/my-jobs',
                element: <MyJob></MyJob>,
            },
            {
                path: '/blogs',
                element: <BlogPage></BlogPage>,
            },
           
        ],
    },
])


export default Routes;