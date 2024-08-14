import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import VideoGrid from '../components/VideoGrid'
import { useGetVideoCategoriesQuery } from '../redux/slice/VideosApiSlice'
import Categories from '../components/Categories'

const Home = () => {
    const { data, error } = useGetVideoCategoriesQuery()
    console.log(data, 'categ');


    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <Categories />
                <div className="overflow-y-auto p-4 relative h-screen">
                    <VideoGrid />
                </div>
            </div>

        </div>
    )
}

export default Home
