import React from 'react';
import { useGetVideoCategoriesQuery } from '../redux/slice/VideosApiSlice';

const Categories = () => {
    const { data: categories, error, isLoading } = useGetVideoCategoriesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="p-4 left-60 relative">
            <div className="flex flex-wrap">
                {categories?.items.map((category) => (
                    <div key={category.id} className="m-2 p-2 bg-gray-200 rounded-lg">
                        {category.snippet.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;