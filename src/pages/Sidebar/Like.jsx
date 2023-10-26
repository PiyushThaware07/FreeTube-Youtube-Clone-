import React from 'react';
// Icons
import { BiLike } from "react-icons/bi";
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard';

export default function Like() {
    const LikedVideos = useSelector((state) => state.LikeReducer.LikeArray);
    return (
        <>

            <div className="like-main h-screen w-screen pt-20 overflow-y-scroll">
                <div className="like-content w-full h-full px-[30px] md:px-[55px] lg:px-[65px] py-[15px]">
                    <h1 className='my-3 font-semibold text-md pb-2 border-b border-gray-200 flex flex-nowrap items-center gap-2'>Your Liked Videos <BiLike /></h1>


                    {
                        LikedVideos && LikedVideos.length !== 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-[15px]">
                                {
                                    LikedVideos.map((video, index) => (
                                        <span key={index} >
                                            <VideoCard video={video} index={index} />
                                        </span>
                                    ))
                                }

                            </div>
                        ) : (<h1 className='font-semibold text-sm w-full h-[200px] flex flex-nowrap items-center justify-center bg-gray-100'>Empty</h1>)
                    }





                </div>
            </div>
        </>
    )
}
