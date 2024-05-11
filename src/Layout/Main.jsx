import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-250px)]" >
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;