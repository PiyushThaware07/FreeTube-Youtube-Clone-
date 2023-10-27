import React from 'react'
// Icons
import { BiMenu, BiLike, BiSolidMusic } from "react-icons/bi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { HiMiniShoppingBag, HiMiniTrophy } from "react-icons/hi2";
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdLocalMovies, MdAttachEmail } from "react-icons/md";
import { LuHistory, LuRadioTower } from "react-icons/lu";
import { BsFire, BsNewspaper, BsLinkedin } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";
import { SiYoutubegaming, SiReplit } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { ImInstagram } from "react-icons/im";

// React Router DOM
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { googleLogout } from '@react-oauth/google';




// sidebar items 
const itemsList01 = [
    {
        name: "Subscription",
        icon: <MdOutlineSubscriptions className='text-lg' />
    },
    {
        name: "History",
        icon: <LuHistory className='text-lg' />
    },
    {
        name: "watch later",
        icon: <MdOutlineWatchLater className='text-lg' />
    },
    {
        name: "Liked videos",
        icon: <BiLike className='text-lg' />
    },
]
const itemsList02 = [
    {
        name: "Trending",
        icon: <BsFire className='text-lg' />
    },
    {
        name: "Shopping",
        icon: <HiMiniShoppingBag className='text-lg' />
    },
    {
        name: "Music",
        icon: <BiSolidMusic className='text-lg' />
    },
    {
        name: "Movies",
        icon: <MdLocalMovies className='text-lg' />
    },
    {
        name: "Live",
        icon: <FiRadio className='text-lg' />
    },
    {
        name: "Gaming",
        icon: <SiYoutubegaming className='text-lg' />
    },
    {
        name: "News",
        icon: <BsNewspaper className='text-lg' />
    },
    {
        name: "Sports",
        icon: <HiMiniTrophy className='text-lg' />
    },
    {
        name: "Learning",
        icon: <FaLightbulb className='text-lg' />
    },
    {
        name: "Fashion & Beauty",
        icon: <GiClothes className='text-lg' />
    },
    {
        name: "Podcasts",
        icon: <LuRadioTower className='text-lg' />
    },
]
const itemsList03 = [
    {
        name: "Instagram",
        icon: <ImInstagram className='text-[16px] text-purple-600' />
    },
    {
        name: "Linkedin",
        icon: <BsLinkedin className='text-[16px] text-blue-600' />
    },
    {
        name: "Email",
        icon: <MdAttachEmail className='text-[20px] text-red-600' />
    },
    {
        name: "Github",
        icon: <FaSquareGithub className='text-[20px]' />
    },
    {
        name: "Replit",
        icon: <SiReplit className='text-[16px] text-orange-500' />
    },

]

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <>

            <div className="offcanvas offcanvas-start w-4/6 sm:w-1/2 md:w-1/3 lg:w-1/3" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header shadow-md">
                    <div className="section-1 px-6 md:px-6 py-[6px] ">
                        <div className="flex flex-nowrap items-center gap-2 md:gap-5">
                            <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close me-2 h-[20px] w-[20px] rounded-full hover:bg-gray-100 flex flex-nowrap items-center justify-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ><BiMenu className='text-xl' /></button>
                            <div className="cursor-pointer" onClick={() => navigate(`/home`)}><h1 className='flex flex-nowrap items-center gap-1 text-xl font-semibold'><PiMonitorPlayFill className='text-2xl text-purple-600' />FreeTube</h1></div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className="content h-[100%] overflow-y-scroll">
                        <ul>
                            <li className='px-[30px] py-[12px] md:py-[16px] hover:bg-gray-100'><button className='flex flex-nowrap items-center text-sm font-semibold gap-2' onClick={() => navigate('/home')} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><GoHome className='text-[20px] capitalize' /><span className='text-[13px]'>Home</span></button></li>
                            <li className='px-[30px] py-[12px] md:py-[16px] hover:bg-gray-100'><button className='flex flex-nowrap items-center text-sm font-semibold gap-2' onClick={() => navigate('/')} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ><HiOutlineLogout className='text-[20px] capitalize' /><span className='text-[13px]'>Logout</span></button></li>
                            <hr />
                            {
                                itemsList01.map((item, index) => (
                                    <li key={index} className='px-[30px] py-[12px] md:py-[16px] hover:bg-gray-100'><button className='flex flex-nowrap items-center text-[20px] font-semibold gap-2' onClick={() => navigate(`/home/${item.name}`)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >{item.icon}<span className='text-[13px] capitalize'>{item.name}</span></button></li>
                                ))
                            }
                            <h1 className='px-[30px] py-[12px] md:py-[16px] text-[14px] font-semibold bg-gray-100'>Explore</h1>
                            {
                                itemsList02.map((item, index) => (
                                    <li key={index} className='px-[30px] py-[12px] md:py-[16px] hover:bg-gray-100'><button className='flex flex-nowrap items-center text-[20px] font-semibold gap-2' onClick={() => navigate(`/home/${item.name}`)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"  >{item.icon}<span className='text-[13px] capitalize'>{item.name}</span></button></li>
                                ))
                            }
                        </ul>
                        <div className="content h-[40%] mt-6  w-full flex flex-nowrap justify-center items-center">
                            <div className="">
                                <h1 className='text-[13px] font-semibold'>This Project is developed by @Piyush Thaware</h1>
                                <h1 className='py-2 text-[12px] font-semibold border-b border-gray-300'>Follow Me</h1>
                                <ul className='flex flex-nowrap items-center justify-around py-3'>
                                    {
                                        itemsList03.map((item, index) => (
                                            <li className='h-[40px] w-[40px] bg-gray-100  rounded-full flex flex-nowrap items-center justify-center' key={index} ><Link>{item.icon}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
