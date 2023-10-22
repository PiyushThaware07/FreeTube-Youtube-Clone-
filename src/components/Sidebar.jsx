import React from 'react'
// Icons
import { BiMenu } from "react-icons/bi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';



export default function Sidebar() {
    const navigate = useNavigate();
    return (
        <>

            <div className="offcanvas offcanvas-start w-4/6 sm:w-1/2 md:w-1/3 lg:w-1/3" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header shadow-md">
                    <div className="section-1 px-6 md:px-6 py-[6px] ">
                        <div className="flex flex-nowrap items-center gap-2 md:gap-5">
                            <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close me-2 h-[20px] w-[20px] rounded-full hover:bg-gray-100 flex flex-nowrap items-center justify-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ><BiMenu className='text-xl' /></button>
                            <div className="cursor-pointer" onClick={()=>navigate(`/home`)}><h1 className='flex flex-nowrap items-center gap-1 text-xl font-semibold'><PiMonitorPlayFill className='text-2xl text-purple-600' />FreeTube</h1></div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-body">

                </div>
            </div>
        </>
    )
}
