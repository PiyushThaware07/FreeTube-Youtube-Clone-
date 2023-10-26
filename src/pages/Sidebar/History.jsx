import React from 'react'
// Icons
import { useDispatch, useSelector } from 'react-redux';
import { clearVideo } from '../../Redux/Slice/HistorySlice';
import VideoCard from './VideoCard';

export default function History() {
  const dispatch = useDispatch();
  // Showing history
  const history = useSelector((state) => state.HistoryReducer.HistoryArray);
  return (
    <>
      <div className="like-main h-screen w-screen pt-20 overflow-y-scroll">
        <div className="like-content w-full h-full px-[30px] md:px-[55px] lg:px-[65px] py-[15px]">
          <div className="flex flex-nowrap items-center justify-between pb-2 border-b border-gray-200">
            <h1 className='my-3 font-semibold text-md flex flex-nowrap items-center gap-2'>Watch History</h1>
            <button type='button' className="text-[12px] font-semibold bg-gray-200 px-[15px] py-[8px] rounded-full" onClick={() => dispatch(clearVideo())}>Clear History</button>
          </div>
          {
            history && history.length !== 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-[15px]">
                {
                  history.map((video, index) => (
                    <span key={index} >
                      <VideoCard video={video} index={index} />
                    </span>
                  ))
                }

              </div>
            ) : (<h1 className='font-semibold text-sm w-full h-[200px] flex flex-nowrap items-center justify-center bg-gray-100'>Empty</h1>)
          }
        </div>
      </div>
    </>
  )
}
