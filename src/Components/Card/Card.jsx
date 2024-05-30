import laptop from "../../assets/Image/laptop.png";
import mobile from "../../assets/Image/mobile.png";
import headphone from "../../assets/Image/headphone.png";
import { Link } from "react-router-dom";


const Card = () => {
    return (
        <div className="grid  lg:grid-cols-3 ">
            
            <div className="overflow-hidden  bg-[#1E1F1C] text-slate-500 shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure className="relative">
                    <img
                        src={laptop}
                        alt="card image"
                        className="aspect-video w-full"
                    />
                    <figcaption className="absolute top-4 left-4 w-full  p-6 text-white">
                        <h3 className="text-lg font-medium text-[#A68B65] ">NEW ARRIVAL</h3>
                        <h3 className="text-3xl font-medium my-5">Latest Qpad <br />  with Keyboard</h3>
                        <Link to='' className="text-lg font-medium underline"> By Now</Link>
                    </figcaption>
                    
                </figure>
            </div>
            <div className="overflow-hidden  bg-gradient-to-tr from-[#372557] to-[#42234f] text-slate-500 shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure className="relative">
                    <img
                        src={mobile}
                        alt="card image"
                        className="aspect-video w-full"
                    />
                    <figcaption className="absolute top-4 left-4 w-full  p-6 text-white">
                        <h3 className="text-lg font-medium text-[#A68B65] ">GET UP TO 30% OFF</h3>
                        <h3 className="text-3xl font-medium my-5"> And then there <br />  was Pro versions </h3>
                        <Link to='' className="text-lg font-medium underline"> By Now</Link>
                    </figcaption>
                    <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white"/>
                </figure>
            </div>
            <div className="overflow-hidden  bg-[#3A454A] text-slate-500 shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure className="relative">
                    <img
                        src={headphone}
                        alt="card image"
                        className="aspect-video w-full"
                    />
                    <figcaption className="absolute top-4 left-4 w-full  p-6 text-white">
                        <h3 className="text-lg font-medium text-[#A68B65] ">HURRY UP </h3>
                        <h3 className="text-3xl font-medium my-5">Modern & Style <br />   Headphone</h3>
                        <Link to='' className="text-lg font-medium underline"> By Now</Link>
                    </figcaption>
                    <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white"/>
                       
                    
                </figure>
            </div>
        </div>
    );
};

export default Card;