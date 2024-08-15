import React from 'react';
import { useGetVideoCategoriesQuery } from '../redux/slice/VideosApiSlice';

const Categories = () => {
    const { data: categories, error, isLoading } = useGetVideoCategoriesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="flex overflow-x-auto whitespace-nowrap py-2  bg-white fixed top-16 left-60 right-0 z-10 scrollbar-none">

            {categories?.items.map((category) => (
                <div key={category.id} className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded-lg whitespace-nowrap mx-2 scroll-py-0.5">
                    {category.snippet.title}
                </div>
            ))}

        </div>
    );
};

export default Categories;