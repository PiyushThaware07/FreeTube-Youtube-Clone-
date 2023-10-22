import React, { useEffect, useState } from 'react';
import ShowMoreText from "react-show-more-text";
import ReactMarkdown from 'react-markdown';
// Icons
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import { useNavigate, useParams } from 'react-router-dom';
import { Numeral } from 'react-numeral';
import moment from 'moment';
import Loading from "../../components/Loading";
import { useSelector } from 'react-redux';
import WatchSidebar from './WatchSidebar';
import WatchCommet from './WatchCommet';



const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function Watch() {
    const navigate = useNavigate();
    // handeling video details
    const { video_id } = useParams();
    const [watchDetail, setWatchDetail] = useState('');
    async function fetchVideoDetails() {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${ApiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setWatchDetail(data.items[0])
        }
        catch (error) {
            console.error("failed to fetch the video details", error);
        }
    }
    useEffect(() => {
        fetchVideoDetails();
    }, [video_id])
    console.table("Video details : ", watchDetail);

    // Handeling channel details
    const [channelDetails, setChannelDetails] = useState('');
    async function fetchChannelDetails() {
        if (watchDetail.snippet) { // Check if watchDetail has snippet information
            try {
                const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${watchDetail.snippet.channelId}&key=${ApiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                setChannelDetails(data.items[0]);
            } catch (error) {
                console.error("Failed to fetch channel details", error);
            }
        }
    }
    useEffect(() => {
        fetchChannelDetails();
    }, [watchDetail])
    console.table("Channel Details: ", channelDetails);
    const channelThumbnail = channelDetails.snippet?.thumbnails?.high?.url || channelDetails.snippet?.thumbnails?.default?.url;

    // Handle sidebar videos
    const videos = useSelector((state) => state.videoReducer.videoArray);
    console.table("Sidebar Videos : ", videos);


    // comment handling
    const [comments, setComments] = useState('');
    async function handleComments() {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${video_id}&key=${ApiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setComments(data.items);
        }
        catch (error) {
            console.error("failed to fetch the video details", error);
        }
    }
    useEffect(() => {
        handleComments();
    }, [video_id])
    console.log("Comments : ", comments);



    // Toggle Comments
    const [toggleComment, setToggleComment] = useState(false);
    function handleToggleComent() {
        setToggleComment((value) => !value);
    }


    
    return (
        <>
            <div className="watch-main h-screen pt-20 overflow-y-scroll relative">
                {
                    watchDetail.length === 0 ? (<Loading />)
                        :
                        (
                            <div className="watch-content md:flex flex-nowrap items-start">
                                <div className=" watch-content-section-1  w-full md:w-[60%] lg:w-[65%] p-4 sm:p-8">
                                    <div className="thumbnail h-[180px] sm:h-[300px] md:h-[250px] lg:h-[360px] w-full bg-gray-300 rounded-2xl">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${watchDetail.id}`}
                                            frameBorder="0"
                                            allowFullScreen
                                            title='My Video'
                                            className='h-full w-full'>
                                        </iframe>
                                    </div>
                                    <div className="content my-2 p-2">
                                        <h1 className='font-semibold text-[14px] sm:text-[15px]'>{watchDetail.snippet.title}</h1>

                                        {
                                            channelDetails.length === 0 ? "" : (
                                                <div className="flex flex-nowrap items-center justify-between my-2">
                                                    <div className="section-1 flex flex-nowrap items-center">
                                                        <div className="profile-image h-[40px] w-[40px] rounded-full bg-gray-200"
                                                            style={{
                                                                backgroundImage: `url('${channelThumbnail}')`,
                                                                backgroundRepeat: "no-repeat",
                                                                backgroundPosition: "center",
                                                                backgroundSize: "cover"
                                                            }}
                                                        ></div>
                                                        <div className="profile-data ms-2">
                                                            <h1 className='text-[12px] font-semibold'>{channelDetails.brandingSettings.channel.title}</h1>
                                                            {
                                                                channelDetails.statistics.hiddenSubscriberCount ? "" : (
                                                                    <h1 className='text-[12px] font-medium uppercase'><Numeral value={channelDetails.statistics.subscriberCount} format={"0,a"} /></h1>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="section-2 flex flex-nowrap items-center">
                                                        <div className="hidden lg:flex flex-nowrap items-center">
                                                            <button className='flex flex-nowrap items-center text-sm font-medium border-[1.4px] border-e-0 border-gray-300 p-2 rounded-s-full'><span><BiLike className='text-lg me-1' /></span><Numeral value={watchDetail?.statistics?.likeCount || 'N/A'} format={"0,a"} /></button>
                                                            <button className='flex flex-nowrap items-center text-sm font-medium border-[1.4px] bg-gray-100 border-gray-300 p-2 border-e-0'><span><BiDislike className='text-lg me-1' /></span><span>Dislike</span></button>
                                                            <button className='flex flex-nowrap items-center text-sm font-medium border-[1.4px] border-gray-300 p-2 rounded-e-full'><span><PiShareFat className='text-lg me-1' /></span><span>Share</span></button>
                                                        </div>
                                                        <button type='button' className='bg-purple-600 ms-2 lg:ms-3 px-4 py-[8px] rounded-full text-white text-sm font-semibold'>Subscribe</button>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        <div className="responsive-like mt-3">
                                            <div className="flex lg:hidden flex-nowrap items-center">
                                                <button className='flex flex-1 flex-nowrap items-center text-sm font-medium border-[1.4px] border-e-0 border-gray-300 p-2 rounded-s-full'><span><BiLike className='text-lg me-1' /></span><Numeral value={watchDetail?.statistics?.likeCount || 'N/A'} format={"0,a"} /></button>
                                                <button className='flex flex-1 flex-nowrap items-center text-sm font-medium border-[1.4px] bg-gray-100 border-gray-300 p-2'><span><BiDislike className='text-lg me-1' /></span><span>Dislike</span></button>
                                                <button className='flex flex-1 flex-nowrap items-center text-sm font-medium border-[1.4px] border-s-0 border-gray-300 p-2'><span><PiShareFat className='text-lg me-1' /></span><span>Share</span></button>
                                                <button className='flex flex-1 flex-nowrap items-center text-sm font-medium border-[1.4px] border-s-0 border-gray-300 p-2 rounded-e-full'><span><AiOutlineSave className='text-lg me-1' /></span><span>Save</span></button>
                                            </div>
                                        </div>

                                        <div className="watch-description mt-3 lg:mt-0">
                                            <div className="card bg-gray-50">
                                                <div className="card-body">
                                                    <h1 className='text-[11px] font-semibold'><span className='uppercase'><Numeral value={watchDetail?.statistics?.viewCount || 'N/A'} format={"0,a"} /></span>views <span className='mx-2'>.</span><span className='capitalize'>{moment(watchDetail.snippet.publishedAt).fromNow()}</span><span className='ms-2 text-[14px] text-slate-500'>@{watchDetail.snippet.channelTitle}</span></h1>
                                                    <div className="text-[13px] font-medium my-3">
                                                        <ShowMoreText
                                                            lines={3}
                                                            more={<div className="text-blue-600"><br /><h1>Show more</h1></div>}
                                                            less={<div className="text-blue-600"><br /><h1>Show less</h1></div>}
                                                            anchorClass="show-more-less-clickable"
                                                            expanded={false}
                                                            truncatedEndingComponent={"... "}
                                                        >
                                                            <ReactMarkdown>
                                                            {watchDetail.snippet.description}
                                                            </ReactMarkdown>
                                                        </ShowMoreText>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            comments.length === 0 ? "Loading" : (
                                                <div className="comment-section pt-6 md:py-6 mt-4 border-t ">
                                                    <div className="comment-content card">
                                                        <div className="card-body">
                                                            <h1 className='text-sm font-semibold pb-2 border-b'><span className='uppercase'><Numeral value={watchDetail?.statistics?.commentCount || 'N/A'} format={"0,a"} /></span> Comments</h1>
                                                            <div className="text-sm flex flex-nowrap items-center my-3">
                                                                <input type="text" placeholder='Add a comment' className='w-full focus:outline-none ps-4 py-[8.5px] rounded-s-full border-[1.5px] border-e-0 border-gray-400' />
                                                                <button className='h-[40px] px-3 text-gray-600 text-sm font-semibold bg-gray-100 border-[1.5px] border-gray-400 flex flex-nowrap items-center justify-center rounded-e-full'>Comment</button>
                                                            </div>
                                                            <button type='button' className='bg-gray-100 px-5 py-2 rounded-full text-sm font-semibold mx-auto block md:hidden' onClick={() => handleToggleComent()}><span className='flex flex-nowrap items-center gap-1'>{toggleComment?(<BsFillCaretUpFill/>):(<BsFillCaretDownFill/>)} show comments</span></button> 
                                                            {
                                                                comments.map((comment, index) => (
                                                                    <span key={index}>
                                                                        <WatchCommet comment={comment} toggleComment={toggleComment} />
                                                                    </span>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>)
                                        }

                                    </div>
                                </div>
                                <div className="watch-content-section-2  w-full md:w-[40%] lg:w-[35%] px-[27px] pb-[27px] sm:p-[27px] sm:pe-4 sm:py-7">
                                    {
                                        videos.length === 0 ? "" : (
                                            <div className="card">
                                                {
                                                    videos.map((video, index) => (
                                                        <span key={index}>
                                                            <WatchSidebar video={video} />
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}
