import React, { useEffect, useState } from 'react'
import { BsDot } from "react-icons/bs";
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import { Numeral } from 'react-numeral';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function ChannelVideoItem(props) {
    const navigate = useNavigate();

    // Handle Views From videos id provided by fetchSearch
    const [videoData, setVideoData] = useState([]);
    async function fetchVideos() {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.video.id.videoId}&key=${ApiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setVideoData(data.items[0])
        }
        catch (error) {
            console.error("failed to fetch views, channel icons ", error);
        }
    }
    useEffect(() => {
        fetchVideos()
    }, [props.video, props.video.id.videoId])

    // Duration handling
    let formatted_duration = 'N/A'; // Declare formatted_duration here with a default value
    const contentDetails = videoData?.contentDetails;
    if (contentDetails) {
        const duration = moment.duration(contentDetails.duration);
        formatted_duration = `${duration.minutes()}:${duration.seconds()}`;
    }



    // console.log("Remaining video details : ", videoData);
    return (
        <>
            <div className="card h-[280px] border-0">
                <div className="card-body">
                    <div className="thumbnail h-[65%] md:h-[55%] lg:h-[70%] w-full bg-gray-200 rounded-lg relative cursor-pointer"
                        style={{
                            backgroundImage: `url('${props.video.snippet?.thumbnails?.high?.url || props.video.snippet?.thumbnails?.default?.url}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}
                        onClick={() => navigate(`/home/watch/${props.video.id.videoId}`)}
                    >
                        <div className="absolute bottom-2 right-2 text-[10px] font-medium px-2 py-1 rounded-xl bg-gray-900 text-white">{formatted_duration}</div>
                    </div>
                    <div className="details my-3">
                        <h2 className='text-sm font-semibold cursor-pointer' onClick={() => navigate(`/home/watch/${props.video.id.videoId}`)}>{props.video.snippet?.title || "N/A"}</h2>
                        <div className="flex flex-nowrap items-center text-[11px] font-medium my-2">
                            <p><span className="uppercase"><Numeral value={videoData?.statistics?.viewCount || "N/A"} format={"0,a"} /></span> views</p>
                            <span className='mx-1'><BsDot /></span>
                            <p>{moment(props.video.snippet?.publishedAt || "N/A").fromNow()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
