import React from 'react'

const Monetization = () => {
  return (
    <div className='flex flex-col md:flex-row text-center justify-between items-center gap-6 md:gap-0'>
        <div className='text-prime text-3xl font-semibold hidden md:flex'>
        From Travel to <br /> Stay: Sri Hotel <br /> Has It All
        </div>
        <div className='text-prime text-3xl font-semibold flex md:hidden'>
        From Creation to Monetization: <br /> Vyb Store Has It All
        </div>
        <div className='grid grid-cols-2 gap-4 md:w-2/4'>
            <div className='bg-black flex flex-col gap-5 py-4 px-4 items-center justify-center rounded-3xl'>
                <div className=''>
                    <p className='text-2xl font-semibold'>Trusted By <br /> Travelers</p>
                    <p className='text-sm'>A trusted platform for Travelers to <br /> Explore and Grow.</p>
                </div>
                <img src="/trusted.svg" alt="" />
            </div>
            <div className='bg-black flex flex-col gap-5 py-4 px-7 items-center justify-center rounded-3xl'>
                <div className=''>
                    <p className='text-2xl font-semibold'>Secured Data</p>
                    <p className='text-sm'>Advanced security measures to <br /> protect your data.</p>
                </div>
                <img src="/secure.svg" alt="" />
            </div>
            <div className='bg-black flex flex-col gap-5 py-4 px-4 items-center justify-center rounded-3xl'>
                <div className=''>
                    <p className='text-2xl font-semibold'>Authentic Payment <br /> Partner</p>
                    <p className='text-sm'>Reliable, fast, and secure payments <br /> you can trust.</p>
                </div>
                <img src="/payment.svg" alt="" />
            </div>
            <div className='bg-black flex flex-col gap-5 py-4 px-4 items-center justify-center rounded-3xl'>
                <div className=''>
                    <p className='text-2xl font-semibold'>Make Your <br /> Pocket Fell</p>
                    <p className='text-sm'> Low price and <br /> Best trip with best inn's .</p>
                </div>
                <img src="/monitize.svg" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Monetization
