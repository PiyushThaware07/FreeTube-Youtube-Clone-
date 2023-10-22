import React from 'react';
import Channel from './Channel';
// Icons
import { BsDot } from "react-icons/bs";

export default function ChannelVideos() {
    return (
        <>
            <div className="channel-videos h-screen pt-18 overflow-y-scroll relative">
                <Channel />
                <div className="channel-content p-2 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <div className="card h-[280px] border-0">
                            <div className="card-body">
                                <div className="thumbnail h-[65%] md:h-[55%] lg:h-[70%] w-full bg-gray-200 rounded-lg relative cursor-pointer">
                                    <div className="absolute bottom-2 right-2 text-[10px] font-medium px-2 py-1 rounded-xl bg-gray-900 text-white">00:00</div>
                                </div>
                                <div className="details my-3">
                                    <h2 className='text-sm font-semibold cursor-pointer'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor.</h2>
                                    <div className="flex flex-nowrap items-center text-[11px] font-medium my-2">
                                        <p>300K views</p>
                                        <span className='mx-1'><BsDot /></span>
                                        <p>3 Month ago</p>
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
