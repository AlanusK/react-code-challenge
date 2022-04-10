import React from 'react';
import Data from '../../data.json'
import image from '../../image.jfif';

const Series = () => {

    return (
        <div className=''>
            <div className='flex items-center h-16 px-20 bg-neutral-600'>
                <h1 className='text-2xl text-white font-medium'>Popular Series</h1>
            </div>
            <div className='flex items-center mt-10 px-20'>
                {Data.map(post => {
                    return (
                        <button className='mr-10 flex flex-col h-24'>
                            <img src={image} />
                            <p className='mt-1 font-light'>{post.title}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Series;