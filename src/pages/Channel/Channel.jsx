import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from "../../components/Loading";
import { Numeral } from 'react-numeral';
const navLinks = ["Home", "Videos", "Playlist", "Live"]

const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function Channel() {
  const { channel_id } = useParams();
  const navigate = useNavigate();

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

  return (
    <>
      {
        channelDetails && channelDetails.length !== 0 ? (
          <div className="channel-main">
            <div className="channel-content">
              <div className="channel-section-1 channel-banner h-[280px] bg-gray-200"
                style={{
                  backgroundImage: `url('${channelDetails.brandingSettings?.image?.bannerExternalUrl || channelDetails.snippet?.thumbnails?.default?.url}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              ></div>
              <div className="channel-section-2 sm:flex flex-nowrap items-start gap-6 p-8 md:p-5 lg:p-16">
                <div className="channel-logo shadow-sm block mx-auto h-[140px] w-[140px] rounded-full bg-gray-200 mt-[15px] lg:mt-0"
                  style={{
                    backgroundImage: `url('${channelDetails.snippet?.thumbnails?.high?.url || channelDetails.snippet?.thumbnails?.default?.url}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                ></div>
                <div className="md:flex flex-nowrap items-start flex-1">
                  <div className="channel-details md:me-5 mt-3 sm:mt-0">
                    <h1 className='text-2xl font-semibold flex flex-nowrap items-center justify-center sm:justify-start'>{channelDetails.snippet?.title || "N/A"}</h1>
                    <div className="channel-counts flex flex-nowrap flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-4 text-sm font-medium mt-1 mb-3">
                      <div>
                        <p className='font-semibold capitalize'>{channelDetails.snippet?.customUrl || "N/A"}</p>
                      </div>
                      <div className="flex flex-nowrap items-center gap-2 sm:ms-2">
                        <p className={`flex flex-nowrap items-center gap-1 ${channelDetails.statistics?.hiddenSubscriberCount ? "hidden" : ""}`}><span className='uppercase'><Numeral value={channelDetails.statistics?.subscriberCount || "N/A"} format={"0,a"} /></span> Subscribers</p>
                        <p className='flex flex-nowrap items-center gap-1'><span className="uppercase"><Numeral value={channelDetails.statistics?.videoCount || "N/A"} format={"0,a"} /></span> videos</p>
                      </div>
                    </div>
                    <p className='text-sm font-medium hidden sm:inline'>
                      {channelDetails.brandingSettings?.channel?.description.slice(0, 100) || channelDetails.snippet?.description?.slice(0, 100)} ...
                    </p>
                    <p className='text-sm font-medium block text-center sm:hidden'>
                      {channelDetails.brandingSettings?.channel?.description.slice(0, 100) || channelDetails.snippet?.description?.slice(0, 100)} ...
                    </p>
                  </div>
                  <div className="channel-btns flex sm:flex-nowrap items-center gap-2 mt-3 md:mt-0">
                    <button type='button' className='py-[12px] flex-1 px-4 rounded-full capitalize text-sm font-medium bg-purple-500 text-white'>Subscribe</button>
                    <button type='button' className='py-[12px] flex-1 px-4 rounded-full capitalize text-sm font-medium bg-gray-100 border-2 border-slate-300'>Join</button>
                  </div>
                </div>
              </div>
              <div className="channel-section-3">
                <div className="content flex flex-nowrap items-center border-b-[1.2px] border-gray-300 font-semibold text-sm">
                  {
                    navLinks.map((link, index) => (
                      <button type='button' key={index} className={`flex-1 uppercase tracking-[1.3px]  py-3`} onClick={() => navigate(`/home/channel/${channel_id}/${link === "Home" ? "" : link}`)}>{link}</button>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        ) : (<Loading />)
      }


    </>
  )
}
