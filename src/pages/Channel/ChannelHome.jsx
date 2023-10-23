import React from 'react';
import Channel from './Channel';
import ShowMoreText from "react-show-more-text";



export default function ChannelHome() {
    return (
        <>
            <div className="channel-home h-screen pt-18 overflow-y-scroll relative">
                <Channel />
                <div className="channel-content px-4 sm:px-12 md:px-16 lg:px-20 py-6">
                    <div className="card p-5 bg-gray-50">
                        <div className="card-body md:flex flex-nowrap items-start p-0 md:p-2">
                            <div className="section-1 w-full md:w-[70%] me-5">
                                <h1 className='text-lg font-semibold'>Description</h1>
                                <ShowMoreText
                                    lines={3}
                                    more={<div className="text-blue-600"><br /><h1>Show more</h1></div>}
                                    less={<div className="text-blue-600"><br /><h1>Show less</h1></div>}
                                    anchorClass="show-more-less-clickable"
                                    expanded={false}
                                    truncatedEndingComponent={"... "}
                                    className='text-[13px]  mt-2 text-gray-700'
                                >
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eius hic amet animi? Voluptatibus dolorum, totam dolorem mollitia, odio inventore, vero id aut corrupti incidunt expedita? Obcaecati enim quidem laudantium!
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eius hic amet animi? Voluptatibus dolorum, totam dolorem mollitia, odio inventore, vero id aut corrupti incidunt expedita? Obcaecati enim quidem laudantium!
                                </ShowMoreText>
                            </div>
                            <div className="section-2 w-full md:w-[30%] mt-[40px] md:mt-0">
                                <h1 className='text-lg font-semibold pb-2 border-b border-gray-300'>Stats</h1>
                                <div className="border-b border-gray-300">
                                    <h1 className='text-sm font-[600] my-3'>Joined Sep 2, 2014</h1>
                                    <h1 className='text-sm font-[600] my-3'>545,952,668 views</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
