import moment from 'moment';
import React from 'react'
import { Numeral } from 'react-numeral';
import { useNavigate } from 'react-router-dom';

export default function WatchSidebar(props) {
  const navigate = useNavigate();
  // Duration handling
  const duration = moment.duration(props.video.contentDetails.duration);
  const formatted_duration = duration ? `${duration.minutes()}:${duration.seconds()}` : 'N/A';
  return (
    <>
      <div className="card h-[100px] p-2 border-0">
        <div className="card-body p-0 flex flex-nowrap items-start">
          <div className="thumbnail bg-gray-300 w-[200px] cursor-pointer md:w-[50%] lg:w-[45%] h-full relative"
            style={{
              backgroundImage: `url('${props.video?.snippet?.thumbnails?.maxres?.url || props.video?.snippet?.thumbnails?.default?.url}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}            
            onClick={() => navigate(`/home/watch/${props.video.id}`)}>
            <div className="absolute bottom-1 right-1 text-[10px] font-medium px-2 py-1 rounded-xl bg-gray-900 text-white">
              {formatted_duration}
            </div>
          </div>
          <div className="content ms-3">
            <h1 className='text-[13px] md:text-[11px] lg:text-[13px] font-semibold mb-2'>{props.video.snippet.title.length > 20 ? props.video.snippet.title.slice(0, 20) : props.video.snippet.title}</h1>
            <h1 className='text-[11px] md:text-[10px] lg:text-[11px] font-medium'>{props.video.snippet.channelTitle}</h1>
            <h1 className='text-[11px] md:text-[10px] lg:text-[11px] font-medium mt-1'><span className='uppercase'><Numeral value={props.video.statistics.viewCount} format={"0,a"} /></span> views . <span>{moment(props.video.snippet.publishedAt).fromNow()}</span></h1>
            {/* <h1 className='text-[10px] p-1 font-medium bg-purple-600 text-white inline'>New</h1> */}
          </div>
        </div>
      </div>
    </>
  )
}
