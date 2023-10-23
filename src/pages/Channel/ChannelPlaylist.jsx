import React, { useState } from 'react';
import Channel from "../Channel/Channel";
// Icons
import { CgPlayList } from "react-icons/cg";
import { BsFillPlayFill } from "react-icons/bs";

export default function ChannelPlaylist() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="channel-playlist h-screen pt-18 overflow-y-scroll relative">
                <Channel />
                <div className="channel-content px-[25px] sm:px-6 md:px-12 py-6 bg-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="card h-[100px] sm:h-[150px] w-full">
                            <div className="card-body h-full w-full p-0 relative">
                                <div className="thumbnail h-full w-full bg-gray-400 relative">
                                    <div className={`bg-gray-700 w-full absolute bottom-0 flex flex-nowrap items-center justify-between px-3 py-2`}>
                                        <h1><CgPlayList className='text-[15px] sm:text-[20px] text-white' /></h1>
                                        <h1 className='text-[10px] sm:text-[12px] sm:font-medium text-white tracking-[1px]'>4 videos</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card h-[100px] sm:h-[150px] w-full">
                            <div className="card-body h-full w-full p-0 relative">
                                <div className="thumbnail h-full w-full bg-gray-400 relative">
                                    <div className={`bg-gray-700 w-full absolute bottom-0 flex flex-nowrap items-center justify-between px-3 py-2`}>
                                        <h1><CgPlayList className='text-[15px] sm:text-[20px] text-white' /></h1>
                                        <h1 className='text-[10px] sm:text-[12px] sm:font-medium text-white tracking-[1px]'>4 videos</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card h-[100px] sm:h-[150px] w-full">
                            <div className="card-body h-full w-full p-0 relative">
                                <div className="thumbnail h-full w-full bg-gray-400 relative">
                                    <div className={`bg-gray-700 w-full absolute bottom-0 flex flex-nowrap items-center justify-between px-3 py-2`}>
                                        <h1><CgPlayList className='text-[15px] sm:text-[20px] text-white' /></h1>
                                        <h1 className='text-[10px] sm:text-[12px] sm:font-medium text-white tracking-[1px]'>4 videos</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card h-[100px] sm:h-[150px] w-full">
                            <div className="card-body h-full w-full p-0 relative">
                                <div className="thumbnail h-full w-full bg-gray-400 relative">
                                    <div className={`bg-gray-700 w-full absolute bottom-0 flex flex-nowrap items-center justify-between px-3 py-2`}>
                                        <h1><CgPlayList className='text-[15px] sm:text-[20px] text-white' /></h1>
                                        <h1 className='text-[10px] sm:text-[12px] sm:font-medium text-white tracking-[1px]'>4 videos</h1>
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
