import React from 'react'
// icons
import { RiFileMusicFill } from "react-icons/ri";
import { CgDisc } from "react-icons/cg";
import { TbWorldSearch } from "react-icons/tb";

export default function Music() {
    return (
        <>
            <div className="movies-main h-screen w-screen pt-20">
                <div className="movies-content px-[30px] sm:px-[60px] md:px-[60px] py-8">
                    <div className="sm:flex flex-nowrap items-center justify-between pb-[20px] border-b mb-[30px] sm:mb-[0px]">
                        <div className="mb-3 sm:mb-0 flex flex-nowrap items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                            <h1 className=' h-[40px] sm:h-[50px] md:h-[70px] w-[40px] sm:w-[50px] md:w-[70px] bg-gradient-to-r text-white from-purple-500 to-blue-500 flex flex-nowrap items-center justify-center rounded-full'><RiFileMusicFill className='h-[45%] w-[45%]' /></h1>
                            <h1 className='text-xl sm:text-3xl md:text-4xl  font-bold'>Music</h1>
                        </div>
                        <div className="h-[40px]">
                            <form action="" className='h-full flex flex-nowrap items-center border-b border-gray-400 px-2 sm:px-4 pb-2'>
                                <input type="text" placeholder='Search Music' className='focus:outline-none flex-1' />
                                <button><TbWorldSearch className='text-xl text-purple-500' /></button>
                            </form>
                        </div>
                    </div>
                    <div className="my-3 sm:flex flex-wrap items-center justify-between gap-3">
                        <div className="w-full sm:w-[48%]">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-success-emphasis text-2xl">Bollywood Hits</strong>
                                    <div className="mb-1 text-md font-semibold flex flex-nowrap items-center gap-2">70 tracks <CgDisc className='text-xl' /></div>
                                    <p className="mb-auto mt-3 font-medium text-sm">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="purple"></rect></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[48%]">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-success-emphasis text-2xl">Hollywood Hits</strong>
                                    <div className="mb-1 text-md font-semibold flex flex-nowrap items-center gap-2">24 tracks <CgDisc className='text-xl' /></div>
                                    <p className="mb-auto mt-3 font-medium text-sm">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="purple"></rect></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
