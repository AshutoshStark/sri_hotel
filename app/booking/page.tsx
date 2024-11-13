import React from 'react'

const page = () => {
  return (
    <div className='py-12'>
        <p className='text-2xl font-semibold'>Our Room's</p>
        <div>
            <div className='flex gap-8 border border-1 border-gray-400 p-4 rounded-xl bg-black shadow-gray-700 shadow-md'>
                <img src="/hotel room/cosyroom.jpg" alt="" className='w-1/3 rounded-lg object-cover' />
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-semibold'>Cosy And Dark Room</p>
                    <p className='text-lg text-slate-500'>Discription.:</p>
                    <p className='text-sm  text-slate-500 w-2/5'>Dark themed room with cozy double bed cloud mattris and ceralizes AC and with multifunction bed side controler and see through bathroom</p>
                    <div>
                    <p className='text-sm text-slate-600'>Price.:</p>
                    <p className='text-sm text-slate-600'>Day- ₹1500</p>
                    <p className='text-sm text-slate-600'>Night- ₹1500</p>
                    </div>
                    <button className='bg-prime rounded-lg py-2 px-6 w-1/3'>Book Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page