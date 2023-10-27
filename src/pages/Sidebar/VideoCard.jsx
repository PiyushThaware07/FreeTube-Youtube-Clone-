import React, { useState, useEffect } from "react";
import moment from "moment";
import { Numeral } from "react-numeral";
// RRD
import { useLocation, useNavigate } from "react-router-dom";
// Icons
import { BsDot } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { FiRadio } from "react-icons/fi";
// Apis
import { fetchChannelDetails } from "../../API/ChannelDetailsFetch";
import { fetchVideoDetails } from "../../API/VideoDetailsFetch";
// redux
import { useDispatch } from "react-redux";
import { removeVideo } from "../../Redux/Slice/HistorySlice";

export default function VideoCard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Channel Handling
    const [channelDetails, setChannelDetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchChannelDetails(props.video.snippet.channelId);
                setChannelDetails(data.items[0]);
            } catch (error) {
                console.error("Error fetching channel details:", error);
            }
        };
        fetchData();
    }, [props.video]);

    // Duration handling
    const duration = moment.duration(props.video.contentDetails?.duration);
    const formatted_duration = duration
        ? `${duration.minutes()}:${duration.seconds()}`
        : "N/A";
    const location = useLocation();

    // videos handling -----------------------------------------
    const [videoDetails, setVideoDetails] = useState(null);
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
    }, [props.video]);

    return (
        <>
            <div className="card h-[230px] md:h-[250px] xl:h-[230px] border-0 mb-4">
                <div className="card-body p-0">
                    <div className="thumbnail h-[60%] md:h-[60%] lg:h-[70%] xl:h-[60%] w-full bg-gray-200 rounded-xl relative cursor-pointer"
                        style={{
                            backgroundImage: `url('${props.video?.snippet?.thumbnails?.maxres?.url ||
                                props.video?.snippet?.thumbnails?.high?.url || props.video?.snippet?.thumbnails?.default?.url}')`,
                            backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover",
                        }}
                        onClick={() =>
                            location.pathname.includes("Live")
                                ? navigate(`/home/watch/${props.video?.id?.videoId}`)
                                : navigate(`/home/watch/${props.video?.id}`)
                        }
                    >
                        {location.pathname.includes("Live") ? (
                            <div className={`bg-red-600 text-white absolute bottom-2 right-2 text-[10px] font-medium px-2 py-1 flex
                    flex-nowrap items-center gap-1 rounded-full`}>
                                Live
                                <FiRadio className="text-[12px]" />
                            </div>
                        ) : (
                            <div className={`${formatted_duration !== "0:0" ? "bg-gray-800" : "bg-red-600"} text-white absolute
                    bottom-2 right-2 text-[10px] font-medium px-2 py-1 rounded-full`}>
                                {formatted_duration !== "0:0" ? (
                                    formatted_duration
                                ) : (
                                    <span className="flex flex-nowrap items-center gap-1">
                                        Live
                                        <FiRadio className="text-[12px]" />
                                    </span>
                                )}
                            </div>
                        )}
                        <div className={`bg-gray-800 text-white absolute top-[-10px] left-[-10px] text-[12px] font-medium h-[30px] w-[30px] rounded-full ${location.pathname.includes("History") ||
                            location.pathname.includes("Live") ? "hidden" : "flex"} flex-nowrap items-center justify-center`}>
                            {props.index + 1}
                        </div>
                    </div>
                    <button className={`bg-gray-800 text-white absolute top-1 right-1 text-sm px-[10px] py-[5px]
                font-medium gap-6 ps-[16px] rounded-full ${location.pathname.includes("History") ? "flex"
                            : "hidden"} flex-nowrap items-center justify-center`} onClick={() =>
                                dispatch(removeVideo(props.video))}
                    >
                        {props.index + 1}
                        <IoCloseSharp className="text-xl" />
                    </button>

                    <div className="details flex flex-nowrap gap-2 mt-2">
                        <div className="channel-logo h-[40px] w-[40px] bg-gray-200 rounded-full cursor-pointer" style={{
                            backgroundImage: `url('${channelDetails && channelDetails.length !== 0 ?
                                channelDetails?.snippet?.thumbnails?.maxres?.url ||
                                channelDetails?.snippet?.thumbnails?.default?.url : ""}')`, backgroundRepeat: "no-repeat",
                            backgroundPosition: "center", backgroundSize: "cover",
                        }} onClick={() =>
                            location.pathname.includes("Live")
                                ? navigate(
                                    `/home/channel/${videoDetails?.snippet?.channelId}`
                                )
                                : navigate(`/home/channel/${props.video?.snippet?.channelId}`)
                        }
                        ></div>
                        <div className="video-details flex-1">
                            <h1 className="text-[13px] sm:text-[12.5px] lg:text-[12px] font-semibold cursor-pointer"
                                onClick={() =>
                                    location.pathname.includes("Live")
                                        ? navigate(`/home/watch/${props.video?.id?.videoId}`)
                                        : navigate(`/home/watch/${props.video?.id}`)
                                }
                            >
                                {props.video?.snippet?.title || "N/A"}
                            </h1>
                            <h1
                                className="text-[12px] sm:text-[11px]  lg:text-[11px] font-semibold mt-[6px] text-gray-600 capitalize cursor-pointer">
                                {props.video?.snippet?.channelTitle}
                            </h1>
                            <div
                                className="text-[11px] sm:text-[9.5px] lg:text-[10px] flex flex-nowrap items-center gap-2 font-semibold mt-[2px] text-gray-600">
                                <h1>
                                    <span className="uppercase">
                                        <Numeral value={props.video?.statistics?.viewCount ||
                                            videoDetails?.statistics?.viewCount || "N/A"} format={"0,a"} />
                                    </span>{" "}
                                    {videoDetails?.statistics?.viewCount ? (
                                        <span> watching</span>
                                    ) : (
                                        <span> views</span>
                                    )}
                                </h1>
                                <BsDot />
                                <h1>
                                    {moment(props.video?.snippet?.publishedAt || "N/A").fromNow()}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}