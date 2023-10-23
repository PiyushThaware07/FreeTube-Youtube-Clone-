import React, { useEffect, useState } from 'react';
import Channel from './Channel';
// Icons
import { useParams } from 'react-router-dom';
import Loading from "../../components/Loading";
import ChannelVideoItem from './ChannelVideoItem';
import InfiniteScroll from 'react-infinite-scroll-component';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function ChannelVideos() {
    const { channel_id } = useParams();
    const [channelVideos, setChannelVideos] = useState([]);
    const [pageToken, setPageToken] = useState('')
    async function fetchChannelVideos(page_token) {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=10&pageToken=${page_token}&key=${ApiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setChannelVideos(prevData => [...prevData, ...data.items]);
            setPageToken(data.nextPageToken);
            console.log("Channel videos : ", data.items);
        }
        catch (error) {
            console.error("Failed to fetch channel details", error);
        }
    }
    useEffect(() => {
        fetchChannelVideos('');
    }, [channel_id])
    // Handle Infinity Scroll
    function handleInfinityScroll() {
        console.warn("Infinity Scroll Trigger");
        fetchChannelVideos(pageToken);
    }

    return (
        <>
            <InfiniteScroll
                dataLength={channelVideos.length}
                hasMore={true}
                next={handleInfinityScroll}
                loader={<Loading />}
                className='w-full h-screen pt-20 overflow-y-scroll overflow-x-hidden'
            >
                <div className="channel-videos">
                    <Channel />

                    {
                        channelVideos && channelVideos.length !== 0 ? (
                            <div className="channel-content p-2 sm:p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                    {
                                        channelVideos.map((video, index) => (
                                            <span key={index}>
                                                <ChannelVideoItem video={video} />
                                            </span>
                                        ))
                                    }

                                </div>
                            </div>
                        ) : (<Loading />)
                    }

                </div>
            </InfiniteScroll>

        </>
    )
}
