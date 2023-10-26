import React from 'react';
// icons
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsDot, BsCalendar2DateFill } from "react-icons/bs";

export default function Movies() {
  return (
    <>
      <div className="movies-main h-screen w-screen pt-20">
        <div className="movies-content px-[30px] sm:px-[60px] md:px-[60px] py-8">
          <div className="flex flex-nowrap items-center gap-3 pb-[20px] border-b mb-[30px]">
            <h1 className='h-[40px] sm:h-[50px] md:h-[70px] w-[40px] sm:w-[50px] md:w-[70px] bg-gradient-to-r text-white from-purple-500 to-blue-500 flex flex-nowrap items-center justify-center rounded-full'><BiSolidMoviePlay className='h-[45%] w-[45%]' /></h1>
            <h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>Movies</h1>
          </div>
          <div className="my-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <div className="card h-[250px] md:h-[350px] p-0">
              <div className="card-body p-0">
                <div className="thumbnail h-[80%] w-full bg-gray-200 cursor-pointer"
                  style={{
                    backgroundImage: `url('https://images4.alphacoders.com/909/909185.jpg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                ></div>
                <div className="h-[20%] flex flex-nowrap flex-col justify-center items-center">
                  <h1 className='flex flex-nowrap items-center gap-2 text-[11px] font-semibold pb-2 border-b border-gray-300'><BsCalendar2DateFill /> <span className='mt-[2px]'>29 Aug 2023</span></h1>
                  <h1 className='text-[12px] font-semibold my-[5px]'>Movie Name</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
