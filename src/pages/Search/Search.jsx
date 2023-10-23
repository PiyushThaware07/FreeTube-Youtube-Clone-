import React from 'react';
// React Router DOM
import { useParams } from 'react-router-dom';
// Icons
import { BsDot } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";

export default function Search() {
    const { search_id } = useParams()
    return (
        <>
            <div className="search-main w-full h-screen pt-20 overflow-y-scroll relative">
                <div className="search-content w-full sm:py-6 px-[0px] sm:px-4 md:px-8 lg:px-16">
                    <div className="card p-6 border-[0px] sm:border-[1.2px] ">
                        <h1 className='text-md font-semibold flex flex-nowrap items-center gap-2 pb-2 border-b-[1.9px] capitalize'><TbWorldSearch className='text-xl' />Results : {search_id}</h1>

                        <div className="card  mt-[20px] h-[250px] sm:h-[150px] md:h-[200px] w-full  border-[0px] sm:border-[0px] ">
                            <div className="card-body h-full w-full p-0 sm:flex flex-nowrap items-start">
                                <div className="thumbnail w-full sm:w-[600px] md:w-[500px] lg:w-[400px] h-[60%] rounded-xl  sm:h-full bg-gray-200"></div>
                                <div className="details sm:ms-[30px] my-[10px] sm:my-0 flex flex-nowrap items-start gap-2">
                                    <div className="channel-logo h-[40px] w-[40px] bg-gray-200 rounded-full sm:hidden"></div>
                                    <div className="flex-1">
                                        <h1 className='text-[13px] md:text-[16px] lg:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, velit.</h1>
                                        <h1 className='text-[10px] sm:text-[12px] font-semibold mt-2 text-gray-600 sm:hidden'>Channel Name</h1>
                                        <div className='text-[10px] sm:text-[12px] font-semibold text-gray-600 flex flex-nowrap items-center mt-1 sm:mt-0'>
                                            <h1>400K views</h1>
                                            <h1><BsDot /></h1>
                                            <h1>2 Months ago</h1>
                                        </div>

                                        <div className="channel-details hidden sm:flex flex-nowrap items-center gap-2 mt-[15px]">
                                            <div className="channel-logo sm:h-[30px] md:h-[40px] sm:w-[30px] md:w-[40px] bg-gray-200 rounded-full"></div>
                                            <div className="">
                                                <h1 className='sm:text-[13px] md:text-sm font-semibold'>Channel Name</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card  mt-[20px] h-[250px] sm:h-[150px] md:h-[200px] w-full  border-[0px] sm:border-[0px] ">
                            <div className="card-body h-full w-full p-0 sm:flex flex-nowrap items-start">
                                <div className="thumbnail w-full sm:w-[600px] md:w-[500px] lg:w-[400px] h-[60%] rounded-xl  sm:h-full bg-gray-200"></div>
                                <div className="details sm:ms-[30px] my-[10px] sm:my-0 flex flex-nowrap items-start gap-2">
                                    <div className="channel-logo h-[40px] w-[40px] bg-gray-200 rounded-full sm:hidden"></div>
                                    <div className="flex-1">
                                        <h1 className='text-[13px] md:text-[16px] lg:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, velit.</h1>
                                        <h1 className='text-[10px] sm:text-[12px] font-semibold mt-2 text-gray-600 sm:hidden'>Channel Name</h1>
                                        <div className='text-[10px] sm:text-[12px] font-semibold text-gray-600 flex flex-nowrap items-center mt-1 sm:mt-0'>
                                            <h1>400K views</h1>
                                            <h1><BsDot /></h1>
                                            <h1>2 Months ago</h1>
                                        </div>

                                        <div className="channel-details hidden sm:flex flex-nowrap items-center gap-2 mt-[15px]">
                                            <div className="channel-logo sm:h-[30px] md:h-[40px] sm:w-[30px] md:w-[40px] bg-gray-200 rounded-full"></div>
                                            <div className="">
                                                <h1 className='sm:text-[13px] md:text-sm font-semibold'>Channel Name</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
