import React from 'react'

const VideoCard = ({ snippet, statistics, contentDetails }) => {

    return (
        <div className="flex flex-col bg-white  overflow-hidden cursor-pointer">
            <img src={snippet?.thumbnails.standard.url} alt="" className="w-full h-44 object-cover rounded-xl" />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-md text-gray-800 font-bold">{snippet?.title.length < 50 ? snippet?.title : snippet?.title.slice(0, 50) + '...'}</h3>
                <p className="text-gray-500 text-sm">{snippet?.channelTitle}</p>
                <p className="text-gray-400 text-xs">{statistics?.viewCount} • {statistics?.likeCount}</p>
            </div>
        </div>
    );
}

export default VideoCard
