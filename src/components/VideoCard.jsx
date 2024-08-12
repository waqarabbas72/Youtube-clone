import React from 'react'

const VideoCard = ({ thumbnail, title, channel, views, date }) => {
    return (
        <div className="flex flex-col bg-white shadow-sm rounded-lg overflow-hidden">
            <img src={thumbnail} alt={title} className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-500 text-sm">{channel}</p>
                <p className="text-gray-400 text-xs">{views} • {date}</p>
            </div>
        </div>
    );
}

export default VideoCard
