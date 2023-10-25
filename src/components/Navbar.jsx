import React, { useState } from 'react';
// Icons ----------------------------------
import { BiMenu, BiSearch } from "react-icons/bi";
import { PiMonitorPlayFill, PiUserCircleDuotone } from "react-icons/pi";
import { IoNotificationsCircleOutline, IoSearchCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar() {
    const navigate = useNavigate();

    // Handle Search Functionality
    const [toggleSearch, setToggleSearch] = useState(false);
    const [inputQuery, setInputQuery] = useState('');
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submit", inputQuery);
        if (inputQuery) {
            navigate(`/home/search/${inputQuery}`)
            setToggleSearch(false);
        }
    }

    // Google auth redux setup
    const userDetails = useSelector((state) => state.loginReducer);
    console.log(userDetails.user);

    return (
        <>
            <div className="navbar-main px-6 md:px-12 py-3 shadow-md text-gray-700  fixed w-full top-0 z-50  bg-white">
                <div className="navbar-content flex flex-nowrap items-center justify-between">
                    <div className="section-1">
                        <div className="flex flex-nowrap items-center gap-2 md:gap-5">
                            <button className="h-[40px] w-[40px] rounded-full hover:bg-gray-100 flex flex-nowrap items-center justify-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ><BiMenu className='text-xl' /></button>
                            <div className="cursor-pointer" onClick={() => navigate(`/home`)}><h1 className='flex flex-nowrap items-center gap-1 text-xl font-semibold'><PiMonitorPlayFill className='text-2xl text-purple-600' />FreeTube</h1></div>
                        </div>
                    </div>
                    <div className="section-2">
                        <div className="flex flex-nowrap items-center gap-8">
                            <form action="" className='md:inline hidden' onSubmit={handleFormSubmit}>
                                <div className="flex flex-nowrap items-center h-[40px]">
                                    <input type="text" placeholder='Search' className='h-full ps-6 focus:outline-none rounded-s-full border-[1.5px] border-e-0 border-gray-500' onChange={(event) => setInputQuery(event.target.value)} />
                                    <button type='submit' className='h-full px-[15px] rounded-e-full border-[1.5px] border-gray-500 bg-gray-200'><BiSearch className='text-xl' /></button>
                                </div>
                            </form>
                            <div className="flex flex-nowrap items-center  gap-[5px] md:gap-[20px]">
                                <h1 className='h-[35px] w-[35px] flex md:hidden flex-nowrap items-center justify-center rounded-full hover:bg-gray-100' onClick={() => setToggleSearch((value) => !value)}><IoSearchCircleOutline className='text-3xl' /></h1>
                                <h1 className='h-[35px] w-[35px] flex flex-nowrap items-center justify-center rounded-full hover:bg-gray-100'><IoNotificationsCircleOutline className='text-3xl' /></h1>
                                <h1 className={`${userDetails && userDetails.user ? "h-[25px] w-[25px]" : "h-[35px] w-[35px]"} flex flex-nowrap items-center justify-center rounded-full hover:bg-gray-100`}
                                    style={{
                                        backgroundImage: `url('${userDetails?.user?.picture || "N/A"}')`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                    }}
                                >
                                    {
                                        userDetails && userDetails.user ? "" : (<PiUserCircleDuotone className='text-3xl' />)
                                    }
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`my-5 md:hidden ${toggleSearch ? "" : "hidden"}`}>
                    <form action="" className='flex flex-nowrap items-center h-[40px]' onSubmit={handleFormSubmit}>
                        <input type="text" placeholder='Search' className='h-full w-full border-[1.8px] border-e-0 border-gray-400 rounded-s-full ps-4 focus:outline-none' onChange={(event) => setInputQuery(event.target.value)} />
                        <button type='submit' className='h-full px-3 bg-gray-200 border-[1.8px] border-gray-400 rounded-e-full' ><BiSearch /></button>
                    </form>
                </div>
            </div >
        </>
    )
}
