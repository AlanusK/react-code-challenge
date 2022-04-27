import React from 'react';
import Data from '../../data.json'
import image from '../../image.jfif';

const Movies = () => {

    return (
        <div>
            <div className='flex items-center h-16 w-full fixed px-20 bg-neutral-600'>
                <h1 className='text-2xl text-white font-medium'>Popular Movies</h1>
            </div>
            <div className='px-20 pt-20 flex flex-wrap justify-start'>
                {Data.map((post, index) => {
                    if (post.releaseYear >= 2010 && post.programType == 'movie')
                        return (
                            <button key={index} className='mr-10 flex flex-col'>
                                <div className='w-32'>
                                    <img src={post.images['Poster Art'].url} alt='' />
                                </div>
                                <div>
                                    <p className='mb-3 font-light w-32'>{post.title}</p>
                                </div>
                            </button>
                        )
                })}
            </div>
        </div>
    )
}

export default Movies;