import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Numeral } from 'react-numeral';
import { useNavigate } from 'react-router-dom';
// Icons
import { BsDot } from "react-icons/bs";
// API's
import { fetchVideoDetails } from "../../API/VideoDetailsFetch";
import { fetchChannelDetails } from "../../API/ChannelDetailsFetch";

const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function SearchVideo(props) {
    const navigate = useNavigate();

    // fetch video data -----------------------------------------------------------------
    const [videoDetails, setVideoDetails] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchVideoDetails(props.video.id.videoId);
                setVideoDetails(data.items[0]);
            } catch (error) {
                console.error("Error fetching channel details:", error);
            }
        };
        fetchData();
    }, [props.video, props.video.id.videoId]);

    // fetch channel data ---------------------------------------------------------------
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
    }, [props.video, props.video.id.videoId]);




    return (
        <>

            {
                videoDetails && videoDetails.length !== 0 ? (
                    <div className="card mt-[20px] h-[250px] sm:h-[150px] md:h-[200px] w-full border-[0px] sm:border-[0px]">
                        <div className="card-body h-full w-full p-0 sm:flex flex-nowrap items-start">
                            <div
                                className="thumbnail w-full sm:w-[600px] md:w-[500px] lg:w-[400px] cursor-pointer h-[60%] rounded-xl sm:h-full bg-gray-200"
                                style={{
                                    backgroundImage: `url('${props.video.snippet?.thumbnails?.medium?.url || props.video.snippet?.thumbnails?.default?.url}')`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}
                                onClick={() => navigate(`/home/watch/${props.video.id.videoId}`)}
                            ></div>

                            {
                                channelDetails && channelDetails.length !== 0 ? (
                                    <div className="details sm:ms-[30px] my-[10px] sm:my-0 flex flex-nowrap items-start gap-2 w-[400px]">
                                        <div className="channel-logo cursor-pointer h-[40px] w-[40px] bg-gray-200 rounded-full sm:hidden"
                                            style={{
                                                backgroundImage: `url('${channelDetails.snippet?.thumbnails?.high?.url || channelDetails.snippet?.thumbnails?.default?.url}')`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                                backgroundSize: "cover"
                                            }}

                                            onClick={() => navigate(`/home/channel/${channelDetails.id}`)}
                                        ></div>
                                        <div className="flex-1">
                                            <h1 className='text-[13px] md:text-[16px] lg:text-lg font-semibold cursor-pointer' onClick={() => navigate(`/home/watch/${props.video.id.videoId}`)}>
                                                <span className='hidden sm:inline'>{props.video.snippet?.title.slice(0, 80)}</span>
                                                <span className='sm:hidden'>{props.video.snippet?.title.slice(0, 30)}</span>
                                            </h1>
                                            <h1 className='text-[10px] sm:text-[12px] font-semibold mt-2 text-gray-600 sm:hidden'>
                                                {props.video.snippet?.channelTitle}
                                            </h1>
                                            <div className='text-[10px] sm:text-[12px] font-semibold text-gray-600 flex flex-nowrap items-center mt-1 sm:mt-0'>
                                                <h1><Numeral value={videoDetails.statistics?.viewCount} format={"0,a"} /> views</h1>
                                                <h1><BsDot /></h1>
                                                <h1>{moment(props.video.snippet.publishedAt).fromNow()}</h1>
                                            </div>
                                            <div className="channel-details hidden sm:flex flex-nowrap items-center gap-2 mt-[15px]">
                                                <div className="channel-logo sm:h-[30px] md:h-[40px] sm:w-[30px] md:w-[40px] bg-gray-200 rounded-full cursor-pointer"
                                                    style={{
                                                        backgroundImage: `url('${channelDetails.snippet?.thumbnails?.high?.url || channelDetails.snippet?.thumbnails?.default?.url}')`,
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                        backgroundSize: "cover"
                                                    }}
                                                    onClick={() => navigate(`/home/channel/${channelDetails.id}`)}
                                                ></div>
                                                <div className="">
                                                    <h1 className='sm:text-[13px] md:text-sm font-semibold cursor-pointer' onClick={() => navigate(`/home/channel/${channelDetails.id}`)}>{props.video.snippet.channelTitle}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : ""
                            }





                        </div>
                    </div>
                ) : ''
            }





        </>
    )
}
