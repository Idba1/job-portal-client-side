import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div  className="container  mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-250px)] mt-2 lg:mt-20 " >
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;