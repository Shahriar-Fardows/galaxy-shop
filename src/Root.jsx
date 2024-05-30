import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className=" min-h-screen mx-auto  bg-white z-50 py-2">
                <Outlet/>
            </div>
           <div className="z-10">
           <Footer/>
           </div>
        </div>
    );
};

export default Root;