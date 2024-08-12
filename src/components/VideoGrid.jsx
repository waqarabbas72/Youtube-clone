import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = ({ videos }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-y-scroll">
            {videos.map((video) => (
                < VideoCard key={video.id} {...video}
                />
            ))}
        </div>

    )
}

export default VideoGrid
