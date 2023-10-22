import React from 'react';
// Icons
import { PiMonitorPlayFill } from "react-icons/pi";

// React Router DOM
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-screen flex flex-nowrap items-center justify-center">
        <div className="content flex flex-nowrap flex-col items-center justify-center">
          <h1 className='text-3xl font-semibold my-3 flex flex-nowrap items-center gap-2'><PiMonitorPlayFill className='text-purple-500' /> FreeTube</h1>
          <button className='py-[14px] px-6 border-2 border-purple-500 text-purple-500 rounded-full text-sm font-semibold' onClick={() => navigate(`/home`)}>Go To Home</button>
        </div>
      </div>
    </>
  )
}
