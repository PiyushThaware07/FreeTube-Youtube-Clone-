import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Numeral } from 'react-numeral';
import { Link, useNavigate } from 'react-router-dom';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function HomeCard(props) {
  const navigate = useNavigate();
  const [channelData, setChannelData] = useState([]);
  const fetchProfile = async () => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.video.snippet.channelId}&key=${ApiKey}`;
      const fetching = fetch(url);
      const request = await fetching;
      const response = await request.json();
      setChannelData(response.items[0])
      // console.log("Home Profile : ", response.items[0]);
    }
    catch (error) {
      console.error("Failed to fetch the home profile data", error);
    }
  }
  useEffect(() => {
    fetchProfile();
  }, [props.video.snippet.channelId])

  const channelThumbnail = channelData.snippet?.thumbnails?.high?.url || channelData.snippet?.thumbnails?.default?.url;

  // Duration handling
  const duration = moment.duration(props.video.contentDetails?.duration);
  const formatted_duration = duration ? `${duration.minutes()}:${duration.seconds()}` : 'N/A';

  return (
    <>
      <div className="video-card h-[280px] p-4 border-0">
        <div className="h-full w-full">
          <Link to={`/home/watch/${props.video.id}`} >
            <div className={`thumbnail bg-gray-200 h-[72%] rounded-2xl relative`} style={{
              backgroundImage: `url('${props.video.snippet.thumbnails && props.video.snippet.thumbnails.maxres ? props.video.snippet.thumbnails.maxres.url : props.video.snippet.thumbnails.default.url}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
              <div className="absolute bottom-1 right-1 text-[10px] font-medium px-2 py-1 rounded-xl bg-gray-900 text-white">{formatted_duration}</div>
            </div>
          </Link>

          <div className="content flex flex-nowrap mt-2">
            <div className="profile h-[35px] w-[35px] bg-gray-200 rounded-full mt-1 cursor-pointer"
              style={{
                backgroundImage: channelData.length === 0 ? '' : `url('${channelThumbnail}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
              onClick={()=>navigate(`/home/channel/${props.video.snippet.channelId}`)}
            ></div>

            <div className="flex-1 ms-3">
              <h1 className='font-semibold text-[12px]'><Link to={`/home/watch/${props.video.id}`} >{props.video.snippet.title}</Link></h1>
              <h1 className='channel-name font-medium text-[11.3px] mt-1'>{props.video.snippet.channelTitle}</h1>
              <div className="flex flex-nowrap items-center gap-2 font-semibold text-[11px] text-gray-700">
                <h1 className='channel-views'><span className='uppercase'><Numeral value={props.video.statistics.viewCount} format={"0,a"} /></span> views</h1>
                <span>.</span>
                <h1 className='channel-date'>{moment(props.video.snippet.publishedAt).fromNow()}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
