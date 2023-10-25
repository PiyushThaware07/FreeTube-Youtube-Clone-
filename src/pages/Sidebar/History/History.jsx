import React from 'react'
// Icons
import { TbWorldSearch } from "react-icons/tb";
import { RiDeleteBinFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import HistoryCard from './HistoryCard';

export default function History() {
  // Showing history
  const history = useSelector((state) => state.HistoryReducer.HistoryArray);
  return (
    <>
      <div className="history-main h-screen w-screen pt-20">
        <div className="history-content h-full w-full">
          <div className="md:flex flex-nowraps w-full h-full">
            {
              history && history.length !== 0 ? (
                <div className="section1 md:w-[65%] lg:w-[60%] md:h-full md:overflow-y-scroll  px-6 sm:px-8 md:px-10 lg:px-18 xl:px-28 pt-12 md:py-12">
                  <h1 className='my-3 font-semibold sm:text-sm md:text-md lg:text-lg'>Watch History</h1>
                  {
                    history.map((video, index) => (
                      <span key={index}>
                        <HistoryCard video={video} index={index} />
                      </span>
                    ))
                  }

                </div>
              )
                : ("No History")
            }











            <div className="section2  lg:w-[40%]  px-6 sm:pe-8 md:pe-10 lg:pe-18 xl:pe-28 py-12">
              <form action="" className='flex flex-nowrap items-center h-[40px]'>
                <input type="text" placeholder='Search watch history' className='my-3 w-full h-full ps-3 focus:outline-none border-[1.8px] border-e-0 border-gray-400' />
                <button type='submit' className='px-[10px] bg-gray-100 h-full border-[1.8px] border-gray-400'><TbWorldSearch /></button>
              </form>
              <div className="mt-3">
                <button className='capitalize flex flex-nowrap items-center gap-2 text-[13px] font-semibold bg-gray-100 px-[17px] py-[12px] rounded-full'><RiDeleteBinFill className='text-[18px]' /> clear watch all history</button>
              </div>

            </div>


          </div>
        </div>
      </div>
    </>
  )
}
