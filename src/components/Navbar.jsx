import React from 'react'
import { FaBars, FaMicrophone, FaUserCircle, FaYoutube } from 'react-icons/fa'
import { FiBell, FiMic, FiPlus, FiSearch } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center p-3'>
            <div className='flex items-center gap-4'>
                <FaBars className='text-xl cursor-pointer' />
                <span className='flex items-center font-bold text-xl cursor-pointer'>
                    <FaYoutube className='text-3xl text-red-500' />YouTube <sup className='font-light text-xs'>pk</sup>
                </span>
            </div>

            <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent flex-grow outline-none text-gray-800 placeholder-gray-500"
                />
                <button className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    <FiSearch className="w-5 h-5 text-gray-600" />
                </button>
                <button className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    <FiMic className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="flex items-center space-x-4">
                {/* Create button */}
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <FiPlus className="w-6 h-6 text-gray-600" />
                </button>

                {/* Notifications button */}
                <button className="p-2 rounded-full hover:bg-gray-200 relative">
                    <FiBell className="w-6 h-6 text-gray-600" />
                    {/* Notification dot */}
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs text-white bg-red-600 rounded-full">
                        3
                    </span>
                </button>

                {/* Profile button */}
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <FaUserCircle className="w-8 h-8 text-gray-600" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
