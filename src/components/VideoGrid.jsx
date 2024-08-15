import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { useGetTrendingVideosQuery } from '../redux/slice/VideosApiSlice'
import Loading from './Loading'


const VideoGrid = () => {

    const { data, error, isLoading } = useGetTrendingVideosQuery()
    console.log(data?.items);




    return (
        <>
            {
                isLoading ? <Loading /> :
                    <main className="ml-60 mt-32 p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                            {data?.items.map((video) => (
                                < VideoCard key={video.id} {...video}
                                />
                            ))}
                        </div>
                    </main >
            }
        </>

    )
}

export default VideoGrid
