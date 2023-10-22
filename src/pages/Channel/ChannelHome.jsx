import React from 'react';
import Channel from './Channel';

export default function ChannelHome() {
    return (
        <>
            <div className="channel-home h-screen pt-18 overflow-y-scroll relative">
                <Channel />
                <div className="channel-content p-6">
                    hello home
                </div>
            </div>
        </>
    )
}
