import React from 'react'
import { trip } from './_components/data'

const page = () => {
  return (
    <div className='py-12'>
        <p className='text-2xl font-semibold'>Our Trip's</p>
        <div className='w-full flex flex-col gap-6 py-12'>
           {trip.map((item:any,index:number)=>(
             <div className='flex flex-col md:flex-row gap-8 border border-1 border-gray-400 p-4 rounded-xl bg-black shadow-gray-700 shadow-md'>
                <img src={item.place_img} alt="" className='md:w-1/3 rounded-lg object-cover shadow-gray-800 shadow-md' />
                <div className='w-full flex flex-col gap-4'>
                    <p className='text-xl font-semibold'>{item.place_name}</p>
                    <p className='text-lg text-slate-500'>Discription :</p>
                    <p className='text-sm  text-slate-500 md:w-3/5 overflow-ellipsis line-clamp-3'>{item.dis}</p>
                    <div>
                      <p className='text-sm text-slate-600'>Price : ₹{item.price}</p>
                      <p className='text-sm text-slate-600'>Duration : {item.duration}</p>
                    </div>
                <button className='flex justify-center items-center bg-prime rounded-lg py-2 px-6 md:w-1/3 font-semibold'>Book Now</button>
                </div>
            </div>
              ))}
        </div>
    </div>
  )
}

export default page