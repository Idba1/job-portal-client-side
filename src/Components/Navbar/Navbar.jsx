import { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import './Navbar.css';

const Navbar = () => {
    const { logout, user } = useContext(AuthContext);
    // console.log(user);

    // theme controlar
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    // update state on toggle
    const handleTheme = (event) => {
        if (event.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="z-50 bg-white">
            <nav className={isSticky ? 'navbar fixed' : 'navbar' }>
                <div className="navbar z-10  shadow-lgn">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                          
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to={"/"}>Home</NavLink>

                                <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to={"/alljob"}>ALL JOBS</NavLink>
                                {user && <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to="/applied-jobs">APPLIED JOBS</NavLink>}

                                {user && <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to="/add-job">ADD A JOB</NavLink>}

                                {user && <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to="/my-jobs">MY JOBS</NavLink>}

                                <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to={"/blogs"}>BLOGS</NavLink>

                            </ul>
                        </div>
                        <a href='/' className="btn btn-ghost text-[#0077B5] font-bold lg:text-2xl dark:text-[#0077B5]">JobNest</a>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-lg">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' }
                                to={"/"}>HOME</NavLink>

                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to={"/alljob"}>ALL JOBS</NavLink>
                            {user && <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to="/applied-jobs">APPLIED JOBS</NavLink>}

                            {user && <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to="/add-job">ADD A JOB</NavLink>}

                            {user && <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to="/my-jobs">MY JOBS</NavLink>}

                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#0077B5]' : theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#333333]' } to={"/blogs"}>BLOGS</NavLink>

                        </ul>
                    </div>
                    <div className="navbar-end gap-1 lg:gap-3 md:gap-3">
                        {/* <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" onChange={handleTheme} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label> */}

                        <div className='flex'>

                            {
                                user ? <div>
                                    <a id="clickable">
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user?.photoURL || "https://i.ibb.co/0GMRFss/pexels-photo-2379004.jpg"} />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li>
                                                    <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user'}</button>

                                                </li>
                                                <li>
                                                    <button
                                                        onClick={logout}
                                                        className="btn btn-sm  btn-ghost">Logout</button>

                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                    <Tooltip anchorSelect="#clickable" clickable>
                                        <button>{user?.displayName || 'user'}</button>
                                    </Tooltip>
                                </div>
                                    :
                                    <NavLink className="btn text-white  lg:font-bold bg-[#0E46A3]" to={"/login"}>LogIn</NavLink>
                            }
                            {/* {
                                user ? <div>
                                    <NavLink className="btn hidden text-white  lg:font-bold bg-[#0E46A3]" to={"/register"}>Register</NavLink>
                                </div> :
                                    <div>
                                        <NavLink className="btn text-white visible lg:font-bold bg-[#0E46A3]" to={"/register"}>Register</NavLink>
                                    </div>
                            } */}

                        </div>

                    </div>

                </div>
            </nav>

        </div >
    );
};

export default Navbar;