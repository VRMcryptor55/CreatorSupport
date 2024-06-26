"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/models/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({username}) => {
    
    const [paymentform, setPaymentform] = useState({})
    //alert(username);
    const handleChange = (e)=>{
        setPaymentform({...paymentform,[e.target.name]: e.target.value})
    }

    const pay= async (amount)=>{
        //Get the order id
        //const {data: session} = useSession()
        //console.log("this is", username)
        let a = await initiate(amount,username, paymentform)
        let orderId= a.id;
        var options= {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "SupportMe", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:3000/api/razorpay", 
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            
            <div className='cover w-full relative'>
        <img className='object-cover w-full h-[350]' src="cover.gif" alt="" />
        <div className='border border-white rounded-full absolute -bottom-14 right-[47%]'>
          <img className='rounded-full' width={100} height={100} src="profilepic.jpg" alt="" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg">
          @{username}
        </div>
        <div className="text-slate-400">
          creating Animated arts for VTT's
        </div>
        <div className='text-slate-400'>
          9,719 members, 82 posts, $15,450/release
        </div>
        <div className='payment flex gap-3 w-[80%] mt-11'>
          <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-lg'>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
              <li className='my-2'>Shubham donated $30 with a message</li>
            </ul>
          </div>
          <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex flex-col gap-2'>
              <input onChange={handleChange} name='name' value={paymentform.name} type="text" className='w-full p-3 rounded lg bg-slate-800' placeholder='Enter Name' />
              <input onChange={handleChange} name='message' value={paymentform.message} type="text" className='w-full p-3 rounded lg bg-slate-800' placeholder='Enter Message' />
            <input onChange={handleChange} name='amount' value={paymentform.amount} type="text" className='w-full p-3 rounded lg bg-slate-800' placeholder='Enter Amount' />
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div> 
            <div className='flex gap-2 mt-5'>
            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(1000)}>pay ₹10</button>
            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(2000)}>pay ₹20</button>
            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(3000)}>pay ₹30</button>
          </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default PaymentPage