import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Register from '../Pages/RegisterPage/Register';
import LogIn from '../Pages/LogInPage/LogIn';
import BlogPage from '../Pages/BlogPage/BlogPage';
import Home from '../Components/Home/Home';
import AllJob from '../Pages/AllJob/AllJob';

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
                path: '/blogs',
                element: <BlogPage></BlogPage>,
            },
           
        ],
    },
])


export default Routes;