import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext';
import { StarIcon, MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

const FrontWorkers = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        
        <div className='flex flex-col items-center gap-8 my-16 text-gray-900 px-4 lg:px-8 '>
            <h1 className='text-4xl font-bold text-gray-500 text-center ' >Meet Our Skilled Tradesmen Experts</h1>
            <p className='sm:w-1/2 text-center mb-8 text-lg text-gray-600'>
            "Connect with Highly Skilled Tradesmen Dedicated to Your Home Improvement Needs"
            </p>
            
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 '>
                {doctors.slice(0, 8).map((item, index) => (
                    <div 
                        onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }} 
                        className='group relative bg-gradient-to-br from-primary/20 to-primary max-w-xs rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]  hover:shadow-lg transition-all duration-300 ease-out cursor-pointer overflow-hidden'
                        key={index}
                    >
                        <div className="relative h-56 overflow-hidden ">
                            <img 
                                className=' object-cover transform group-hover:scale-110 transition-transform duration-700' 
                                src={item.image} 
                                alt={item.name} 
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent' />
                            
                            <div className='absolute bottom-3 left-3 flex items-center space-x-2'>
                                <CheckBadgeIcon className='w-4 h-4 text-blue-400' />
                                <span className='text-xs font-medium text-white'>Verified</span>
                            </div>
                        </div>

                        <div className='p-4 space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-lg font-semibold text-gray-900'>{item.name}</h3>
                                <div className='flex items-center space-x-1'>
                                    <StarIcon className='w-4 h-4 text-amber-400' />
                                    <span className='text-sm font-medium text-gray-700'>4.9</span>
                                </div>
                            </div>
                            
                            <div className='flex items-center space-x-2'>
                                <span className='px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full'>
                                    {item.speciality}
                                </span>
                                <span className='text-xs text-gray-500'>• 12y exp</span>
                            </div>
                            
                            <div className='flex items-center space-x-2 text-gray-500'>
                                <MapPinIcon className='w-4 h-4' />
                                <p className='text-xs truncate'>{item.location || 'City General Hospital'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => { navigate('/workers'); window.scrollTo(0, 0) }}
                className='my-8 px-6 py-2 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 animate-border text-gray-700 text-sm font-medium rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]  hover:from-gray-400 hover:to-gray-300 transition-all duration-300  hover:shadow-lg'
            >
                Explore All Specialists
            </button>
        </div>
    )
}

export default FrontWorkers;
