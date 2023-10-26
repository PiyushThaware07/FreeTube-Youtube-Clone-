import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function WatchCommet(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className={`my-2 md:flex flex-nowrap items-start p-3  ${props.toggleComment ? "flex" : "hidden"} `}>
                <div className="profile bg-gray-200 h-[40px] w-[40px] rounded-full cursor-pointer"
                    style={{
                        backgroundImage: `url('${props.comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || ""}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                    onClick={() => navigate(`/home/channel/${props.comment?.snippet?.topLevelComment?.snippet?.channelId}`)}
                ></div>
                <div className="ms-3 flex-1">
                    <div className="flex flex-nowrap items-center gap-3">
                        <h1 className='text-[14px] font-semibold'>@{props.comment.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                        <h1 className='text-[11px] font-medium'>{moment(props.comment?.snippet?.topLevelComment?.snippet?.publishedAt || "N/A").fromNow()}</h1>
                    </div>
                    <h1 className="text-[12px] font-medium mt-2">
                        {props.comment?.snippet?.topLevelComment?.snippet?.textOriginal || "N/A"}
                    </h1>
                    {/* <button className='mt-2 px-3 py-2 rounded-full text-[12px] font-medium bg-gray-100 border-[1.5px] border-gray-600'>Reply</button> */}
                </div>
            </div>

        </>
    )
}
