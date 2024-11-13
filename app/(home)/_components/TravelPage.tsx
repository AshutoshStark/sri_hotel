import React from 'react'

const TravelPage = () => {
  return (
    <div className="py-12 md:px-4">
      <div className='bg-travel-md md:bg-travel bg-no-repeat flex flex-col items-center'>
        <div className='flex flex-col gap-9 items-center py-12 md:py-36'>
          <p className='text-5xl md:text-9xl font-semibold'>
            TRAVEL
          </p>
          <p className='text-sm md:text-2xl font-semibold text-center'>
            Turn your travel experience into itinerary, <br /> travel package with VYB Store and share it <br /> with your true followers.
          </p>
        </div>
        <div className='flex flex-col items-center gap-2 md:gap-6 px-3'>
          <p className='text-sm md:text-2xl font-semibold'>Explore Our Curated Travel Itineraries</p>
          <div className='flex overflow-x-scroll gap-5'>
            <img src="/travelFrame1.svg" alt=""  className='w-2/5 md:w-auto '/>
            <img src="/travelFrame2.svg" alt=""  className='w-2/5 md:w-auto '/>
            <img src="/travelFrame3.svg" alt=""  className='w-2/5 md:w-auto '/>
            <img src="/travelFrame3.svg" alt=""  className='w-2/5 md:w-auto '/>
            <img src="/travelFrame3.svg" alt=""  className='w-2/5 md:w-auto '/>
            <img src="/travelFrame3.svg" alt=""  className='w-2/5 md:w-auto '/>
            <img src="/travelFrame3.svg" alt=""  className='w-2/5 md:w-auto '/>
          </div>
        </div>
        <div className='md:h-screen mb-[30rem] md:mb-32'>
        </div>
      </div>
    </div>
  )
}

export default TravelPage
