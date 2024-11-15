'use client'
import React, { useState } from 'react'

const Influencers = () => {

    const colorimage = {
        1:'influencer1color.svg',
        2:'influencer2color.svg',
        3:'influencer3color.svg',
        4:'influencer4color.svg'
    }
    const image = {
        1:'influencer1.svg',
        2:'influencer2.svg',
        3:'influencer3.svg',
        4:'influencer4.svg'
    }
    const [images,setImages] = useState<number>(0)

  return (
    <div className='py-12 flex gap-8 flex-col items-center'>
      <div className='text-xl md:text-3xl text-prime font-semibold'>Our Previous Customers</div>
      <div className='flex gap-4 md:gap-10 overflow-x-scroll'>
        <img src={images === 1 ? colorimage[1] : image[1]} alt="image" className='w-1/3 md:w-auto' onMouseEnter={()=>setImages(1)} onMouseLeave={()=>setImages(0)}/>
        <img src={images === 2 ? colorimage[2] : image[2]} alt="image" className='w-1/3 md:w-auto' onMouseEnter={()=>setImages(2)} onMouseLeave={()=>setImages(0)}/>
        <img src={images === 3 ? colorimage[3] : image[3]} alt="image" className='w-1/3 md:w-auto' onMouseEnter={()=>setImages(3)} onMouseLeave={()=>setImages(0)} />
        <img src={images === 4 ? colorimage[4] : image[4]} alt="image" className='w-1/3 md:w-auto' onMouseEnter={()=>setImages(4)} onMouseLeave={()=>setImages(0)} />
      </div>
    </div>
  )
}

export default Influencers
