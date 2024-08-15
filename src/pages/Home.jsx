import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import VideoGrid from '../components/VideoGrid'
import Categories from '../components/Categories'

const Home = () => {

    return (
        <div className="flex">
            <Navbar />
            <Sidebar />
            <Categories />
            <VideoGrid />
        </div>


    )
}

export default Home
