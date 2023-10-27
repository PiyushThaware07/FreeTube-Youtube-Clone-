import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// Icons
import { FiRadio } from "react-icons/fi";
// components
import VideoCard from "./VideoCard";
import Loading from "../../components/Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function Live() {
    const [liveStreams, setLiveStreams] = useState([]);
    const [pageToken, setPageToken] = useState('');
    async function fetchLiveStream(page_token) {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&q=news&type=video&pageToken=${page_token}&key=${ApiKey}`);
            const data = await response.json();
            const newLiveStreams = data.items;
            setLiveStreams((prevLiveStreams) => [...prevLiveStreams, ...newLiveStreams]);
            setPageToken(data.nextPageToken);
            console.log("Live Videos : ", data.items);
        }
        catch (error) {
            console.error("Failed to fetch live videos", error);
        }
    }
    useEffect(() => {
        fetchLiveStream('');
    }, [])

    function handleInfinityScroll() {
        console.warn("Infinity scroll trigger");
        fetchLiveStream(pageToken)
    }

    return (
        <>
            <InfiniteScroll
                dataLength={liveStreams.length}
                hasMore={true}
                next={handleInfinityScroll}
                loader={liveStreams && liveStreams.length !== 0 ? <Loading /> : ''}
                className='w-full h-screen pt-20 overflow-y-scroll'
            >
                <div className="like-main">
                    <div className="like-content w-full h-full px-[30px] md:px-[55px] lg:px-[65px] py-[15px]">
                        <div className="flex flex-nowrap items-center justify-between pb-2 border-b border-gray-200">
                            <h1 className='my-3 font-semibold text-md flex flex-nowrap items-center gap-2'>Live Events <FiRadio className='text-[20px] text-[red]' /> </h1>
                        </div>
                        {
                            liveStreams && liveStreams.length !== 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-[15px]">
                                    {
                                        liveStreams.map((video, index) => (
                                            <span key={index} >
                                                <VideoCard video={video} index={index} />
                                            </span>
                                        ))
                                    }

                                </div>
                            ) : (<h1 className='font-semibold text-sm w-full h-[200px] flex flex-nowrap items-center justify-center'><Loading /></h1>)
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
