import React, { useEffect, useState } from 'react';
import Channel from './Channel';
import ShowMoreText from "react-show-more-text";
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import moment from 'moment/moment';
import { Numeral } from 'react-numeral';
const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default function ChannelHome() {
    const { channel_id } = useParams();
    const [channelDetails, setChannelDetails] = useState([]);
    async function fetchChannelDetails() {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${channel_id}&key=${ApiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setChannelDetails(data.items[0]);
        }
        catch (error) {
            console.error("Failed to fetch channel details", error);
        }
    }
    useEffect(() => {
        fetchChannelDetails();
    }, [channel_id])

    console.log("Channel Details : ", channelDetails);

    return (
        <>
            {
                channelDetails && channelDetails.length !== 0 ? (
                    <div className="channel-home h-screen pt-18 overflow-y-scroll relative">
                        <Channel />
                        <div className="channel-content px-4 sm:px-12 md:px-16 lg:px-20 py-6">
                            <div className="card p-5 bg-gray-50">
                                <div className="card-body md:flex flex-nowrap items-start p-0 md:p-2">
                                    <div className="section-1 w-full md:w-[70%] me-5">
                                        <h1 className='text-lg font-semibold'>Description</h1>
                                        <ShowMoreText
                                            lines={3}
                                            more={<div className="text-blue-600"><br /><h1>Show more</h1></div>}
                                            less={<div className="text-blue-600"><br /><h1>Show less</h1></div>}
                                            anchorClass="show-more-less-clickable"
                                            expanded={false}
                                            truncatedEndingComponent={"... "}
                                            className='text-[13px]  mt-2 text-gray-700'
                                        >
                                            {channelDetails.brandingSettings?.channel?.description || channelDetails.snippet?.description}
                                        </ShowMoreText>
                                    </div>
                                    <div className="section-2 w-full md:w-[30%] mt-[40px] md:mt-0">
                                        <h1 className='text-lg font-semibold pb-2 border-b border-gray-300'>Stats</h1>
                                        <div className="border-b border-gray-300">
                                            
                                        {/* <span className=''>{moment(channelDetails.snippet?.publishedAt || "N/A").fromNow()} */}
                                            <h1 className='text-sm font-[600] my-3'>Joined <span className='ms-2 capitalize'>{moment(channelDetails.snippet?.publishedAt || "N/A").format("MMM D, YYYY")}</span></h1>
                                            <h1 className='text-sm font-[600] my-3'>
                                                <span className='uppercase'>
                                                    <span className='uppercase me-2'>{channelDetails.statistics?.viewCount || "N/A"} -</span> 
                                                    [<Numeral value={channelDetails.statistics?.viewCount || "N/A"} format={"0,a"} />]
                                                    </span> views</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<Loading />)
            }

        </>
    )
}
