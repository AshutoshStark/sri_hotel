import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className='py-12 flex gap-8 flex-col items-center'>
            <div className='text-3xl text-prime font-semibold'>How to get started?</div>
            <div className='flex flex-col gap-12 md:w-3/4'>
                <div className="flex flex-col md:flex-row bg-[#A84948] px-5 py-5 md:px-24 md:py-10 items-center  gap-4 md:gap-20 rounded-3xl sticky top-0">
                    <div className='flex flex-col gap-6'>
                        <p className='text-2xl md:text-3xl font-semibold'>Sign Up and create your <br /> own store hassle-free.</p>
                        <p className='text-xs md:text-sm'>Join us via google signin and verify your <br /> influencer status by entering you social media Id <br /> and unlock your store @ zero cost.</p>
                    </div>
                    <img src="/login.svg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row bg-[#5ED46A] px-5 py-5 md:px-24 md:py-20 items-center  gap-4 md:gap-20 rounded-3xl sticky top-0 rotate-2">
                    <div className='flex flex-col gap-3 md:gap-6'>
                        <p className='text-xl md:text-3xl font-semibold'>"Monetize your influencer <br /> status: Earn money adding <br /> real value to your true <br /> followers!"</p>
                        <p className='text-xs md:text-sm'>Let VYB the money now !! Its here and <br /> widthdraw it periodically.</p>
                    </div>
                    <img src="/cardMonitize.png" alt="" className='w-2/3 md:w-1/3 object-contain' />
                </div>
                <div className="flex flex-col md:flex-row bg-[#487ED6] px-5 py-5 md:px-24 md:py-24 items-center  gap-4 md:gap-20 rounded-3xl sticky top-0 -rotate-2">
                    <div className='flex flex-col gap-3 md:gap-6'>
                        <p className='text-xl md:text-3xl font-semibold'>Call audience to your store. <br /> Easily integrate links into <br /> content.</p>
                        <p className='text-sm'>After setting up your products, its time to go <br /> public. Put your store link in insta bio and lets <br /> make first post together !</p>
                    </div>
                    <img src="/cardStore.png" alt="" className='w-2/3 md:w-1/3'/>
                </div>
                <div className="flex flex-col md:flex-row bg-[#5DAAB7] px-5 py-5 md:px-24 md:py-10 items-center  gap-4 md:gap-20 rounded-3xl sticky top-0">
                    <div className='flex flex-col gap-3 md:gap-6'>
                        <p className='text-2xl md:text-3xl font-semibold'>Build & customize your <br /> store front.</p>
                        <p className='text-sm'>Simply fill in the details to build your digital <br /> store. Once done, start selling your products to <br /> your audience.</p>
                    </div>
                    <img src="/cardBuid.png" alt="" className='h-44 md:h-[345px] object-cover w-2/3 md:w-1/3 rounded-3xl border border-black' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
