import React, { useEffect, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Components
import HomeVideo from "./HomeVideo";

// Spinner
import spinner from "../../assets/spinner.gif";


import { addVideo } from "../../Redux/Slice/VideoSlice";
import InfiniteScroll from 'react-infinite-scroll-component';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function Home() {
    // Retriving Videos
    const videos = useSelector((state) => state.videoReducer.videoArray);
    console.log(videos);

    const dispatch = useDispatch();
    const [pageToken, setPageToken] = useState('')
    // Fetching homepage videos
    const fetchVideos = async (page_token) => {
        try {
            const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&pageToken=${page_token}&key=${ApiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            dispatch(addVideo([...videos, ...data.items]));
            setPageToken(data.nextPageToken);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }
    useEffect(() => {
        fetchVideos('');
    }, [dispatch])

    // handleInfinityScroll
    function handleInfinityScroll() {
        console.warn("Handle Infinity Scroll");
        fetchVideos(pageToken);
    }
    return (
        <InfiniteScroll
            dataLength={videos.length}
            hasMore={!!pageToken}
            next={handleInfinityScroll}
            loader={
                <div className="loading h-[50px] w-[50px] mx-auto" style={{ backgroundImage: `url('${spinner}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
            }
        >
            <div className="home-main h-screen pt-20 overflow-y-scroll relative">
                <div className="home-content">
                    {videos.length === 0 ? (
                        <div className="loading h-[50px] w-[50px] mx-auto" style={{ backgroundImage: `url('${spinner}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {videos.map((video, index) => (
                                <span key={index}>
                                    <HomeVideo video={video} />
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </InfiniteScroll>
    );
}
