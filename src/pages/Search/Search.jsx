import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// React Router DOM
import { useParams } from 'react-router-dom';
// Icons
import { TbWorldSearch } from "react-icons/tb";
// Components
import Loading from "../../components/Loading";
import SearchVideo from './SearchVideo';

const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function Search() {

    const { search_id } = useParams();
    const [pageToken, setPageToken] = useState('')

    // fetch search list:
    const [searchArray, setSearchArray] = useState([]);
    async function fetchSearchVideos(page_token) {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search_id}&pageToken=${page_token}&key=${ApiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setSearchArray((prevData) => page_token && search_id ? [...prevData, ...data.items] : data.items);
            setPageToken(data.nextPageToken);
        } catch (error) {
            console.error('Error fetching search videos:', error);
        }
    }
    useEffect(() => {
        fetchSearchVideos('');
    }, [search_id]);
    // Handle Infinity Scroll
    function handleInfinityScroll() {
        console.warn("Infinity Scroll Trigger");
        fetchSearchVideos(pageToken);
    }



    return (
        <>
            {searchArray.length === 0 ? '' : (
                <InfiniteScroll
                    dataLength={searchArray.length}
                    hasMore={true}
                    next={handleInfinityScroll}
                    loader={<Loading />}
                    className='w-full h-screen pt-20 overflow-y-scroll overflow-x-hidden'
                >
                    <div className="search-main">
                        <div className="search-content w-full sm:py-6 px-[0px] sm:px-4 md:px-8 lg:px-16">
                            <div className="card p-6 border-[0px] sm:border-[1.2px]">
                                <h1 className='text-md font-semibold flex flex-nowrap items-center gap-2 pb-2 border-b-[1.9px] capitalize'>
                                    <TbWorldSearch className='text-xl' /> Results : {search_id}
                                </h1>
                                {searchArray.map((video, index) => (
                                    <span key={index}>
                                        <SearchVideo video={video} />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </InfiniteScroll>
            )}
        </>

    )
}
