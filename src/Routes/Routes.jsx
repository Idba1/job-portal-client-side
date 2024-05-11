import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Register from '../Pages/RegisterPage/Register';
import LogIn from '../Pages/LogInPage/LogIn';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
           
        ],
    },
])


export default Routes;