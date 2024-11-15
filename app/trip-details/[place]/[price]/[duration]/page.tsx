'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {

  const params = useParams();
  const {place, price, duration} = params;

  let priced = price.replace('%2C','')

  return (
    <div className='flex flex-col justify-center items-start py-12 gap-6'>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Your Name'/>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Email'/>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Number'/>
      <p>Room Details : {decodeURI(place)}</p>
      <p>Room Details : {priced}</p>
      <p>Trip Duration : {duration}</p>
    </div>
  )
}

export default page