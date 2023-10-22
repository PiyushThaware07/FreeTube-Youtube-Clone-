import React from 'react'
// Spinner
import spinner from "../assets/spinner.gif";

export default function Loading() {
    return (
        <>
            <div className="loading h-[50px] w-[50px] mx-auto" style={{ backgroundImage: `url('${spinner}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
        </>
    )
}
