import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const navLinks = ["Home", "Videos", "Playlist", "Live"]

export default function Channel() {
  const { channel_id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="channel-main">
        <div className="channel-content">
          <div className="channel-section-1 channel-banner h-[280px] bg-gray-200"></div>
          <div className="channel-section-2 sm:flex flex-nowrap items-start gap-6 p-8 md:p-5 lg:p-16">
            <div className="channel-logo shadow-sm block mx-auto h-[140px] w-[140px] rounded-full bg-gray-200 mt-[15px] lg:mt-0"></div>
            <div className="md:flex flex-nowrap items-start flex-1">
              <div className="channel-details md:me-5 mt-3 sm:mt-0">
                <h1 className='text-2xl font-semibold flex flex-nowrap items-center justify-center sm:justify-start'>Channel Name</h1>
                <div className="channel-counts flex flex-nowrap flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-4 text-sm font-medium mt-1 mb-3">
                  <div>
                    <p>@Ownersname</p>
                  </div>
                  <div className="flex flex-nowrap items-center gap-2 sm:ms-2">
                    <p className='flex flex-nowrap items-center gap-1'><span className='uppercase'>25M</span> Subscribers</p>
                    <p className='flex flex-nowrap items-center gap-1'><span className="uppercase">600</span> videos</p>
                  </div>
                </div>
                <p className='text-sm font-medium hidden sm:inline'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rerum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rerum.
                </p>
                <p className='text-sm font-medium block text-center sm:hidden'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rerum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rerum.
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

    </>
  )
}
