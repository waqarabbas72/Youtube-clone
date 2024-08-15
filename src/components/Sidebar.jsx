import React from 'react';
import {
    FiHome,
    FiTrendingUp,
    FiYoutube,
    FiVideo,
    FiHeart,
    FiClock,
    FiSettings,
    FiArrowRight,
    FiMusic,
    FiMonitor,
    FiFilm,
    FiCpu,
    FiAlertCircle,
    FiHelpCircle,
    FiMessageSquare
} from 'react-icons/fi';
import { SiYoutubeshorts } from 'react-icons/si';

const Sidebar = () => {
    return (
        <div className="fixed top-16 left-0 w-60 h-full bg-white p-4 overflow-auto scrollbar-thin">
            <ul className="space-y-3 ">
                {/* Home */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiHome className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Home</span>
                </li>

                {/* Shorts */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <SiYoutubeshorts className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Shorts</span>
                </li>

                {/* Subscriptions */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiYoutube className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Subscriptions</span>
                </li>
                <hr />
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer font-semibold text-lg">You <FiArrowRight /></li>
                {/* History */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiClock className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">History</span>
                </li>

                {/* Your Videos */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiVideo className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Your Videos</span>
                </li>

                {/* Liked Videos */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiHeart className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Liked Videos</span>
                </li>

                <hr />

                <li className='text-lg font-semibold'>Explore</li>
                {/* Explore */}
                {/* Trending */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiTrendingUp className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Trending</span>
                </li>

                {/* Music */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiMusic className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Music</span>
                </li>

                {/* Gaming */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiMonitor className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Gaming</span>
                </li>

                {/* Movies */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiFilm className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Movies</span>
                </li>

                {/* Tech */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiCpu className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Tech</span>
                </li>

                <hr />

                {/* Settings */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiSettings className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Settings</span>
                </li>

                {/* Report history */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiAlertCircle className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Report history</span>
                </li>

                {/* Help */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiHelpCircle className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Help</span>
                </li>

                {/* Send feedback */}
                <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FiMessageSquare className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">Send feedback</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
