import React, { useEffect, useState } from 'react';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function Subscription() {
    /*
    const [subscriptionList, setSubscriptionList] = useState([]);
    async function fetchSubscriptions() {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${ApiKey}`);
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.error("Failed to fetch the subscription", error);
        }
    }
    useEffect(() => {
        fetchSubscriptions();
    },[])
    */

    return (
        <>
            <div className="subscription-main h-screen w-screen pt-20 overflow-y-scroll">
                <div className="subscription-content h-full w-full py-12  sm:px-10 md:px-14 lg:px-16">
                    <div className="card h-auto">
                        <div className="card-body h-full">
                            <div className="h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">


                                <div className="card h-[220px] sm:h-[250px] border-0">
                                    <div className="card-body h-full flex flex-nowrap items-center justify-center">
                                        <div className="">
                                            <div className="thumbnail mx-auto h-[80px] sm:h-[90px] w-[80px] sm:w-[90px] bg-gray-200 rounded-full"></div>
                                            <div className="details mx-auto text-center mt-3">
                                                <h1 className='text-[11px] sm:text-[13px] font-semibold'>Channels Name</h1>
                                                <h1 className='text-[9px] sm:text-[11px] font-semibold mt-1'><span>23M</span> <span>Subscribers</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>






                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
