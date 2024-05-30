import { useEffect } from "react"
import Glide from "@glidejs/glide"
import img from '../../assets/Image/home.png'
// import img1 from '../../assets/Image/home1.png';
import { Link } from "react-router-dom";
const Banner = () => {


    const sliderImg = <>
        <li className="bg-gradient-to-r from-slate-900 to-slate-700 grid grid-cols-1 lg:grid-cols-2 items-center h-[45rem]">
            <div className=" text-center lg:text-left lg:ml-80">
                <h1 className="text-yellow-800 text-2xl">Let&apos;s be smarter</h1><br />
                <h1 className="text-7xl font-bold  text-white">Enjoy your Daily life Smart way....</h1><br />
                <p className=" text-xl text-white">Smartwatches provide quick access to notifications, calls, messages, and apps right on your wrist, reducing the constantly check your phone.
                    Pre-Order View More</p><br />
                <div>
                    <Link to='' className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Pre-Order</span>
                    </Link>
                   
                    <Link to='' className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">View More</span>
                    </Link>
                </div>
            </div>
            <div>
                <img
                    src={img}
                    className="lg:h-[36rem] mt-20  lg:mt-36 -ml-12 lg:-ml-64 m-auto"
                />
            </div>
        </li>
        {/* <li className="bg-gradient-to-r from-slate-900 to-slate-700 grid grid-cols-2">
            <div>
                <h1 className="text-4xl font-bold text-center text-white">Welcome to our website</h1>
                <p className="text-center text-white">We provide the best quality product</p>
            </div>
            <div>
                <img
                    src={img1}
                    className=" m-auto"
                />
            </div>
        </li> */}

    </>

    // slider code 

    useEffect(() => {
        const slider = new Glide(".glide-03", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3000,
            animationDuration: 700,
            gap: 0,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])



    return (
        <div className="relative w-full glide-03">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                    {sliderImg}
                </ul>
            </div>
            {/*    <!-- Controls --> */}
            <div
                className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
                data-glide-el="controls"
            >
                <button
                    className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                    data-glide-dir="<"
                    aria-label="prev slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <title>prev slide</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                </button>
                <button
                    className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                    data-glide-dir=">"
                    aria-label="next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <title>next slide</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </div>
            {/*    <!-- Indicators --> */}
            <div
                className="absolute bottom-0 flex items-center justify-center w-full gap-2"
                data-glide-el="controls[nav]"
            >
                <button
                    className="p-4 group"
                    data-glide-dir="=0"
                    aria-label="goto slide 1"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                    className="p-4 group"
                    data-glide-dir="=1"
                    aria-label="goto slide 2"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                    className="p-4 group"
                    data-glide-dir="=2"
                    aria-label="goto slide 3"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                    className="p-4 group"
                    data-glide-dir="=3"
                    aria-label="goto slide 4"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
            </div>
        </div>
    );
};

export default Banner;