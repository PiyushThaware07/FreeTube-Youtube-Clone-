import React, { useState } from 'react';
// Icons
import { GrFormClose } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
import { LiaSave } from "react-icons/lia";



export default function History() {
    const [cardHovered, setCardHovered] = useState(Array(2)); // Assuming 2 cards in this example.

    const handleCardHover = (index, isHovered) => {
        const newCardHovered = [...cardHovered];
        newCardHovered[index] = isHovered;
        setCardHovered(newCardHovered);
    };
    return (
        <>
            <div className="history-main h-screen w-screen pt-20">
                <div className="history-content px-6 sm:px-12 lg:px-24 py-12">
                    <h1 className='text-xl font-semibold'>Watch history</h1>
                    <div className="md:flex flex-nowrap items-start gap-3 my-5">



                        <div className="section-1 col-md-7">
                            {[0, 1].map((index) => (
                                <div
                                    key={index}
                                    className="card h-[260px] sm:h-[160px] md:h-[150px] lg:h-[170px] relative mb-3"
                                    onMouseEnter={() => handleCardHover(index, true)}
                                    onMouseLeave={() => handleCardHover(index, false)}>
                                    <div className="card-body h-full p-0 sm:flex flex-nowrap items-start gap-[6px]">
                                        <div className="thumbanil bg-gray-200 w-full sm:w-[400px] md:w-[350px] h-[63%] sm:h-full relative cursor-pointer">
                                            <div className="absolute bottom-2 right-2 text-[10px] font-medium px-2 py-1 rounded-xl bg-gray-700 text-white">00:00</div>
                                        </div>
                                        <div className="content p-3">
                                            <h1 className='md:text-[13px] lg:text-[16px] font-semibold cursor-pointer'>Lorem ipsum dolor sit amet consectetur.</h1>
                                            <div className="my-2 flex flex-nowrap items-center gap-[8px] text-gray-600">
                                                <h1 className='text-[12px] sm:text-[14px] md:text-[12px] lg:text-[13px] font-semibold'>Channel Name</h1>
                                                <h1><BsDot /></h1>
                                                <h1 className='text-[12px] sm:text-[14px] md:text-[12px] lg:text-[12px] font-semibold'>200K views</h1>
                                            </div>
                                            <p className='md:text-[9px] lg:text-[11.4px] font-semibold mt-3 hidden md:inline'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, illum...
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`absolute top-3 right-3 flex flex-nowrap flex-col gap-2 items-center transition-opacity transform duration-300 ${cardHovered[index] ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>
                                        <button className='p-2 bg-gray-200 rounded-full'><GrFormClose className='text-md' /></button>
                                        <button className='p-2 bg-gray-200 rounded-full'><LiaSave className='text-md' /></button>
                                    </div>
                                </div>
                            ))}
                        </div>





                        <div className="section-2 col-md-4 bg-gray-300 mt-5 md:mt-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui distinctio officia omnis voluptas veniam dolore, sequi voluptatum. Inventore ex aperiam, obcaecati delectus odit voluptatum blanditiis, explicabo quisquam ratione quasi nulla quas maiores ipsum illo, recusandae adipisci deserunt illum nesciunt culpa?</div>
                    </div>
                </div>
            </div>
        </>
    )
}
