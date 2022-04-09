import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col fixed top-0 right-0 left-0'>
            <div className='flex items-center justify-between h-16 px-20 pr-32 bg-blue-400'>
                <h1 className='flex text-4xl text-white font-medium'>DEMO Streaming</h1>
                <div className='flex text-white font-medium'>
                    <h1 className='text-white p-2 mr-10'>Login</h1>
                    <h1 className='text-white bg-neutral-600 p-2'>Start your free trial</h1>
                </div>
            </div>
            <div className='flex items-center h-16 px-20 bg-neutral-600 top-0 left-0 right-0'>
                <h1 className='text-2xl text-white font-medium'>Popular Titles</h1>
            </div>
        </div>

    )
}

export default Header;