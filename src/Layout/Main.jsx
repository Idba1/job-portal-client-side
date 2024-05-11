import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet ></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;