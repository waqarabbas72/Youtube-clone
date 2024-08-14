import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import VideoGrid from '../components/VideoGrid'

const Home = () => {
    const videos = [
        {
            id: 1,
            thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
            title: "Never Gonna Give You Up",
            channel: "Rick Astley",
            views: 1500000000,
            date: "3 years ago"
        },
        {
            id: 2,
            thumbnail: "https://i.ytimg.com/vi/3tmd-ClpJxA/hqdefault.jpg",
            title: "Shape of You",
            channel: "Ed Sheeran",
            views: 2900000000,
            date: "6 years ago"
        },
        {
            id: 3,
            thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
            title: "Perfect",
            channel: "Ed Sheeran",
            views: 3400000000,
            date: "5 years ago"
        },
        {
            id: 4,
            thumbnail: "https://i.ytimg.com/vi/Lo2q8T_0UEk/hqdefault.jpg",
            title: "Despacito",
            channel: "Luis Fonsi",
            views: 8100000000,
            date: "7 years ago"
        },
        {
            id: 5,
            thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
            title: "Despacito (Remix)",
            channel: "Luis Fonsi",
            views: 7400000000,
            date: "6 years ago"
        },
        {
            id: 6,
            thumbnail: "https://i.ytimg.com/vi/5Mz70EYj0hI/hqdefault.jpg",
            title: "Uptown Funk",
            channel: "Mark Ronson",
            views: 4200000000,
            date: "8 years ago"
        },
        {
            id: 7,
            thumbnail: "https://i.ytimg.com/vi/Km8WvzmST1Y/hqdefault.jpg",
            title: "Havana",
            channel: "Camila Cabello",
            views: 2600000000,
            date: "5 years ago"
        },
        {
            id: 8,
            thumbnail: "https://i.ytimg.com/vi/4aEHzB5s3F0/hqdefault.jpg",
            title: "Bad Guy",
            channel: "Billie Eilish",
            views: 2300000000,
            date: "5 years ago"
        },
        {
            id: 9,
            thumbnail: "https://i.ytimg.com/vi/CW1FYV8D1XI/hqdefault.jpg",
            title: "Old Town Road",
            channel: "Lil Nas X",
            views: 3900000000,
            date: "4 years ago"
        },
        {
            id: 10,
            thumbnail: "https://i.ytimg.com/vi/4nJ5FNCW-s0/hqdefault.jpg",
            title: "Blinding Lights",
            channel: "The Weeknd",
            views: 2100000000,
            date: "3 years ago"
        },
        {
            id: 11,
            thumbnail: "https://i.ytimg.com/vi/jqTyBf9F6Ks/hqdefault.jpg",
            title: "Roar",
            channel: "Katy Perry",
            views: 3300000000,
            date: "10 years ago"
        },
        {
            id: 12,
            thumbnail: "https://i.ytimg.com/vi/J---aiyznGQ/hqdefault.jpg",
            title: "Someone Like You",
            channel: "Adele",
            views: 2000000000,
            date: "12 years ago"
        },
        {
            id: 13,
            thumbnail: "https://i.ytimg.com/vi/lYJrFGhT3DQ/hqdefault.jpg",
            title: "Halo",
            channel: "Beyoncé",
            views: 1300000000,
            date: "15 years ago"
        },
        {
            id: 14,
            thumbnail: "https://i.ytimg.com/vi/0D1P89l9xk0/hqdefault.jpg",
            title: "Love Yourself",
            channel: "Justin Bieber",
            views: 2700000000,
            date: "7 years ago"
        },
        {
            id: 15,
            thumbnail: "https://i.ytimg.com/vi/y7L5kq0z1kU/hqdefault.jpg",
            title: "Rolling in the Deep",
            channel: "Adele",
            views: 2300000000,
            date: "13 years ago"
        },
        {
            id: 16,
            thumbnail: "https://i.ytimg.com/vi/C4r9b47wnAo/hqdefault.jpg",
            title: "Toxic",
            channel: "Britney Spears",
            views: 1200000000,
            date: "19 years ago"
        },
        {
            id: 17,
            thumbnail: "https://i.ytimg.com/vi/QYp0fYd9K-Y/hqdefault.jpg",
            title: "Sweet Child O' Mine",
            channel: "Guns N' Roses",
            views: 1400000000,
            date: "36 years ago"
        },
        {
            id: 18,
            thumbnail: "https://i.ytimg.com/vi/O9XUXmoWqLw/hqdefault.jpg",
            title: "Uptown Girl",
            channel: "Billy Joel",
            views: 900000000,
            date: "41 years ago"
        },
        {
            id: 19,
            thumbnail: "https://i.ytimg.com/vi/7N4sl6_GzP0/hqdefault.jpg",
            title: "Billie Jean",
            channel: "Michael Jackson",
            views: 2400000000,
            date: "41 years ago"
        },
        {
            id: 20,
            thumbnail: "https://i.ytimg.com/vi/mtfWKrKUV0I/hqdefault.jpg",
            title: "Happy", 
            channel: "Pharrell Williams",
            views: 2200000000,
            date: "10 years ago"
        }
    ]
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <div className="overflow-y-auto p-4 relative h-screen">
                    <VideoGrid videos={videos} />
                </div>
            </div>
        </div>
    )
}

export default Home
