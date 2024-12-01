'use client'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Script from 'next/script';
import toast from 'react-hot-toast';

declare global {
  interface Window{
    Razorpay:any,
  }
}

const page = () => {

  const params = useParams();
  const {name, day, night, full} = params;
  const [price,setPrice] = useState<string>('')
  const [prices,setPrices] = useState<number>(0)
  const [confirm,setConfirm] = useState<boolean>(false)

  const [names,setName] = useState<string>('')
  const [mail,setMail] = useState<string>('')
  const [number,setNumber] = useState<string>('')
  const [amount, setamount] = useState(0);


  const handlePayment = async () => {
    try {
        const res = await fetch(`http://localhost:4000/api/payment/order`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                amount
            })
        });

        const data = await res.json();
        console.log(data);
        handlePaymentVerify(data.data)
    } catch (error) {
        console.log(error);
    }
}

// handlePaymentVerify Function
const handlePaymentVerify = async (data:any) => {
    const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Devknus",
        description: "Test Mode",
        order_id: data.id,
        handler: async (response:any) => {
            console.log("response", response)
            try {
                const res = await fetch(`http://localhost:4000/api/payment/verify`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    })
                })

                const verifyData = await res.json();

                if (verifyData.message) {
                    toast.success(verifyData.message)
                }
            } catch (error) {
                console.log(error);
            }
        },
        theme: {
            color: "#5f63b8"
        }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
}

  let priced: any;
  let pricen: any;
  let pricef: any;

  if (typeof day === 'string') {
    priced = day.replace('%2C', '');
  } else {
    throw new Error("Invalid type for 'day'. Expected a string.");
  }
  
  if (typeof night === 'string') {
    pricen = night.replace('%2C', '');
  } else {
    throw new Error("Invalid  type for 'night'. Expected a string.");
  }
  
  if (typeof full === 'string') {
    pricef = full.replace('%2C', '');
    pricef = Number(pricef)

  } else {
    throw new Error("Invalid type for 'full'. Expected a string.");
  }

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

  const setData=(amt:any)=>{
    setamount(amt)
    setConfirm(true)
  }
  return (
    <div className='flex flex-col justify-center items-start py-12 gap-6'>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Your Name' onChange={(e:any)=>setName(e.target.value)}/>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Email' onChange={(e:any)=>setMail(e.target.value)}/>
      <input type="text" name="" id="" className='bg-transparent border border-gray-700 rounded-md py-2 px-6' placeholder='Number' onChange={(e:any)=>setNumber(e.target.value)}/>
      <p>Room Name : {name && typeof name === "string" ? decodeURI(name) : "Unknown"}</p>
      <p>Day Price : {priced}</p>
      <p>Night Price : {pricen}</p>
      <p>Stay Price : {pricef}</p>
      <select name="" id="" onChange={(e:any)=>setPrice(e.target.value)} className='bg-black px-6 py-3 rounded-lg shadow-lg'>
        <option value="" className='bg-black px-6 py-3 rounded-lg shadow-md'>Select Stay</option>
        <option value={priced} className='bg-black px-6 py-3 rounded-lg shadow-md'>Day Stay</option>
        <option value={pricen} className='bg-black px-6 py-3 rounded-lg shadow-md'>Night Stay</option>
        <option value="stay" className='bg-black px-6 py-3 rounded-lg shadow-md'>Stay</option>
      </select>
      <Script src='https://checkout.razorpay.com/v1/checkout.js' />
      {price === 'stay' &&
        <input type="number" name="" id="" placeholder='Number of days to stay' className='px-6 py-2 rounded-md shadow-lg text-black' onChange={(e:any)=>setPrices(e.target.value)}/>
      }
      {price && <button className='bg-green-600 py-2 px-5 rounded-lg shadow-md shadow-gray-500' onClick={()=>setData(pricecal())}>Confirm Order</button> }
      {confirm && <button className='bg-green-600 py-2 px-5 rounded-lg shadow-md shadow-gray-500' onClick={handlePayment}>Pay Now {pricecal() + '/-'}</button> }
    </div>
  )
}

export default page
