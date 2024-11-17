'use client'
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const page = () => {

  const params = useParams();
  const {name, day, night, full} = params;
  const [price,setPrice] = useState<string>('')
  const [prices,setPrices] = useState<number>(0)
  const [confirm,setConfirm] = useState<boolean>(false)

  const [names,setName] = useState<string>('')
  const [mail,setMail] = useState<string>('')
  const [number,setNumber] = useState<string>('')


  let priced = day.replace('%2C','') 
  let pricen = night.replace('%2C','') 
  let pricef = full.replace('%2C','') 

  const pricecal =()=>{

    let p

    if(price === priced || price === pricen){
      p=priced
    }
    else{
      p = pricef*Number(prices)
    }
    return p
  }

  const onSubmit =(num:number)=>{
    Swal.fire({
      title: "Payment Done Successful",
      text: `${names} have payed Rs.${num}`,
      icon: "success"
    });
    setName('')
    setMail('')
    setNumber('')
  }

  return (
    <div className='flex flex-col justify-center items-start py-12 gap-6'>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Your Name' onChange={(e:any)=>setName(e.target.value)}/>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Email' onChange={(e:any)=>setMail(e.target.value)}/>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Number' onChange={(e:any)=>setNumber(e.target.value)}/>
      <p>Room Name : {decodeURI(name)}</p>
      <p>Day Price : {priced}</p>
      <p>Night Price : {pricen}</p>
      <p>Stay Price : {pricef}</p>
      <select name="" id="" onChange={(e:any)=>setPrice(e.target.value)} className='bg-black px-6 py-3 rounded-lg shadow-lg'>
        <option value="" className='bg-black px-6 py-3 rounded-lg shadow-md'>Select Stay</option>
        <option value={priced} className='bg-black px-6 py-3 rounded-lg shadow-md'>Day Stay</option>
        <option value={pricen} className='bg-black px-6 py-3 rounded-lg shadow-md'>Night Stay</option>
        <option value="stay" className='bg-black px-6 py-3 rounded-lg shadow-md'>Stay</option>
      </select>
      {price === 'stay' &&
        <input type="number" name="" id="" placeholder='Number of days to stay' className='px-6 py-2 rounded-md shadow-lg text-black' onChange={(e:any)=>setPrices(e.target.value)}/>
      }
      {price && <button className='bg-green-600 py-2 px-5 rounded-lg shadow-md shadow-gray-500' onClick={()=>setConfirm(true)}>Confirm Order</button> }
      {confirm && <button className='bg-green-600 py-2 px-5 rounded-lg shadow-md shadow-gray-500' onClick={()=>onSubmit(pricecal())}>Pay Now {pricecal() + '/-'}</button> }
    </div>
  )
}

export default page
