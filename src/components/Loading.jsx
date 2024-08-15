import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen absolute mx-auto left-[45%]">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </div>
    );
};

export default Loading;