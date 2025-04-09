import React from 'react'
import { categoryData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='flex flex-col text-center items-center gap-6 py-12 bg-gradient-to-b text-gray-800 mt-10' id='speciality'>
      <h1 className='text-4xl font-bold text-gray-500 ' >Find the Right Service</h1>
      <p className='sm:w-1/2 text-center text-lg text-gray-600'>
      "Explore our trusted network of skilled tradesmen and book the service you need with ease"
      </p>
      <div className='flex flex-wrap justify-center gap-8 pt-8 w-full'>
        {categoryData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className='group relative flex flex-col items-center text-sm cursor-pointer transform hover:-translate-y-2 transition-transform duration-300'
            key={index}
            to={`/workers/${item.speciality}`}
          >
            {/* Glass Sliding Effect with Circular Top */}
            <div className='absolute inset-0 flex justify-center items-end bg-blue-100/50 backdrop-blur-md rounded-b-2xl rounded-t-full shadow-xl scale-y-0 bg-origin-border group-hover:scale-y-100 transition-transform duration-500 z-0'>
              <p className='text-sm font-extralight mb-5 '>Filter To</p>
            </div>

            {/* Image Container with Animated Border */}
            <div className='relative w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-full bg-gray-100 shadow-md hover:shadow-lg flex items-center justify-center overflow-hidden '>
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-gray-700 via-gray-100 to-gray-600 animate-border p-2">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img className='w-full h-full object-cover rounded-full' src={item.image} alt={item.speciality} />
                </div>
              </div>
            </div>

            {/* Specialty Text */}
            <p className='relative font-semibold text-lg text-gray-700 z-10 '>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Category
