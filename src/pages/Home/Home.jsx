// Library
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addVideo } from "../../Redux/Slice/VideoSlice";
// Components
import Loading from "../../components/Loading";
import HomeCard from "../Home/HomeCard";
// API's
import { FetchVideos } from "../../API/FetchVideos";



export default function Home() {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.videoReducer.videoArray);
    const [pageToken, setPageToken] = useState('');
    async function fetchData(page_token) {
        try {
            const data = await FetchVideos(page_token);
            // console.log("Home Page Data : ", data);
            dispatch(addVideo([...videos, ...data.items]));
            setPageToken(data.nextPageToken);
        } catch (error) {
            console.error("Error fetching channel details:", error);
        }
    }
    useEffect(() => {
        fetchData('');
    }, [dispatch]);

    async function handleInfinityScroll() {
        console.warn("Infinity scroll trigger");
        await fetchData(pageToken);
    }

    return (
        <InfiniteScroll
            dataLength={videos.length}
            hasMore={true}
            next={handleInfinityScroll}
            loader={<Loading />}
            className='w-full h-screen pt-20 overflow-y-scroll'
        >
            <div className="home-main">
                <div className="home-content">
                    {videos && videos.length !== 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {videos.map((video, index) => (
                                <span key={index}>
                                    <HomeCard video={video} />
                                </span>
                            ))}
                        </div>
                    ) : <Loading />}
                </div>
            </div>
        </InfiniteScroll>
    );
}
