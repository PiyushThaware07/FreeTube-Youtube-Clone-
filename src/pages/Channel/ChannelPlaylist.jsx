import React, { useEffect, useState } from 'react';
import Channel from "../Channel/Channel";
import Loading from "../../components/Loading";
// Icons
import { CgPlayList } from "react-icons/cg";
import { BsFillPlayFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function ChannelPlaylist() {
    const { channel_id } = useParams();
    const [playlist, setPlaylist] = useState([]);
    const [pageToken, setPageToken] = useState('')
    async function fetchPlaylist(page_token) {
        try {
            const url = `https://www.googleapis.com/youtube/v3/playlists?key=${ApiKey}&channelId=${channel_id}&part=snippet,contentDetails&maxResults=10&pageToken=${page_token}`;
            const response = await fetch(url);
            const data = await response.json();
            setPlaylist(prevData => [...prevData, ...data.items]);
            setPageToken(data.nextPageToken);
        }
        catch (error) {
            console.error("Failed to fetch channel details", error);
        }
    }
    useEffect(() => {
        fetchPlaylist('');
    }, [channel_id])
    console.log("Channel playlist : ", playlist);

    // Handle Infinity Scroll
    function handleInfinityScroll() {
        console.warn("Infinity Scroll Trigger");
        fetchPlaylist(pageToken);
    }


    return (
        <>
            <InfiniteScroll
                dataLength={playlist.length}
                hasMore={true}
                next={handleInfinityScroll}
                loader={<Loading />}
                className='w-full h-screen pt-20 overflow-y-scroll overflow-x-hidden'
            >
                <div className="channel-playlist">
                    <Channel />
                    {
                        playlist && playlist.length !== 0 ? (
                            <div className="channel-content px-[25px] sm:px-6 md:px-12 py-6 bg-gray-100">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">


                                    {
                                        playlist.map((item, index) => (
                                            <div className="card h-[100px] sm:h-[150px] w-full" key={index}>
                                                <div className="card-body h-full w-full p-0 relative">
                                                    <div className="thumbnail h-full w-full bg-gray-400 relative"
                                                        style={{
                                                            backgroundImage: `url('${item.snippet?.thumbnails?.maxres?.url || item.snippet?.thumbnails?.default?.url}')`,
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundPosition: "center",
                                                            backgroundSize: "cover"
                                                        }}
                                                    >
                                                        <div className={`bg-[#000000c1] w-full absolute bottom-0 flex flex-nowrap items-center justify-between px-3 py-2`}>
                                                            <h1><CgPlayList className='text-[15px] sm:text-[20px] text-white' /></h1>
                                                            <h1 className='text-[10px] sm:text-[12px] sm:font-medium text-white tracking-[1px]'>{item.contentDetails?.itemCount || "N/A" } videos</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
