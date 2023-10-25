import React from 'react'
import { useState } from 'react';
import { BsDot } from "react-icons/bs";
import { LiaSave } from "react-icons/lia";
import { GrFormClose } from "react-icons/gr";
import { Numeral } from "react-numeral"
import { useEffect } from 'react';
import moment from 'moment';
// APi call
import { fetchChannelDetails } from "../../../API/ChannelDetailsFetch"
import { useDispatch } from 'react-redux';
import { removeVideo } from '../../../Redux/Slice/HistorySlice';
import { useNavigate } from 'react-router-dom';

export default function HistoryCard(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    // Channel Handling 
    const [channelDetails, setChannelDetails] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchChannelDetails(props.video.snippet.channelId);
                setChannelDetails(data.items[0])
            } catch (error) {
                console.error("Error fetching channel details:", error);
            }
        };
        fetchData();
    }, [props.video]);

    // Duration handling
    const duration = moment.duration(props.video.contentDetails?.duration);
    const formatted_duration = duration ? `${duration.minutes()}:${duration.seconds()}` : 'N/A';

    return (
        <>
            <div className="card border-0 h-[95px] sm:h-[120px] md:h-[130px] lg:h-[150px] p-2 mb-3 sm:mb-4"
                onMouseEnter={() => handleMouseEnter(props.index)}
                onMouseLeave={() => handleMouseLeave()} >
                <div className="card-body p-0 relative">
                    <div className="flex flex-nowrap h-full w-full gap-[10px]">
                        <div className="thumbnail w-[50%] bg-gray-600 h-full rounded-xl relative cursor-pointer"
                            style={{
                                backgroundImage: `url("${props.video?.snippet?.thumbnails?.maxres?.url || props.video?.snippet?.thumbnails?.default?.url}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                            onClick={()=>navigate(`/home/watch/${props.video.id}`)}
                            >
                            <div className="bg-gray-800 text-white absolute bottom-2 right-2 text-[10px] font-medium px-2 py-1 rounded-xl">{formatted_duration}</div>
                        </div>
                        <div className="details flex-1">
                            <h1 className='text-[10px] sm:text-[11px] md:text-[14px] lg:text-[15px] font-semibold cursor-pointer'  onClick={()=>navigate(`/home/watch/${props.video.id}`)}>{props.video?.snippet?.title || 'Title Not Available'}</h1>
                            <div className="text-[9px] sm:text-[9.5px] md:text-[10.5px] lg:text-[12px] font-medium flex flex-nowrap items-center mt-2">
                                {
                                    channelDetails && channelDetails.length !== 0 ? (<h1><span>{channelDetails?.snippet?.title || "N/A"}</span></h1>) : ""
                                }

                                <h1><BsDot /></h1>
                                <h1><span><Numeral value={props.video?.statistics?.viewCount || "N/A"} format={"0,a"} /></span><span> views</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className={`absolute top-0 right-0 ${hoveredCard === props.index ? "flex" : "hidden"}  flex-col gap-2`}>
                        <button type='button' className='bg-gray-200 p-2 rounded-full' onClick={() => dispatch(removeVideo(props.video))}><GrFormClose className='text-[18px] font-bold' /></button>
                        <button type='button' className='bg-gray-200 p-2 rounded-full'><LiaSave className='text-[18px] font-bold' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
