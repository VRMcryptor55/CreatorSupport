"use client"
import { useSession , signIn, signOut } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import React, { useState, useEffect } from 'react'

const Dashboard = () => {
    const {data: session} = useSession()
    const router=useRouter()
    const [form,setform] = useState({})

    useEffect(()=>{
        if(!session){
            router.push('/login')
        }
    },[router,session])

    const handleChange=(e)=>{
        setform({...form,[e.target.name]: e.target.value})
    }

  return (
    <div className='container mx-auto py-5'>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>
        <form className="max-w-2xl mx-auto">
            <div className="my-2">
                <label htmlFor="name" className='block mb-2 text-sm font-medium  dark:text-white'>Name</label>
                <input value={form.name? form.name: ""} onChange={handleChange} type='text' name='name' id='name' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className="my-2">
                <label htmlFor="email" className='block mb-2 text-sm font-medium  dark:text-white'>Email</label>
                <input value={form.email? form.email: ""} onChange={handleChange} type='text' name='email' id='email' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className="my-2">
                <label htmlFor="username" className='block mb-2 text-sm font-medium  dark:text-white'>Username</label>
                <input value={form.name? form.name: ""} onChange={handleChange} type='text' name='username' id='username' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className="my-2">
                <label htmlFor="profile" className='block mb-2 text-sm font-medium  dark:text-white'>Profile</label>
                <input value={form.profile? form.profile: ""} onChange={handleChange} type='text' name='profile' id='profile' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className="my-2">
                <label htmlFor="cover" className='block mb-2 text-sm font-medium  dark:text-white'>Cover</label>
                <input value={form.cover? form.cover: ""} onChange={handleChange} type='text' name='cover' id='cover' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className="my-2">
                <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium  dark:text-white'>Razorpay ID</label>
                <input value={form.razorpayid? form.razorpayid: ""} onChange={handleChange} type='text' name='razorpayid' id='razorpayid' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className="my-2">
                <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium  dark:text-white'>Razorpay Secret</label>
                <input value={form.razorpaysecret? form.razorpaysecret: ""} onChange={handleChange} type='razorpaysecret' name='razorpaysecret' id='name' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className='my-6'>
                <button type='submit' className='block w-full text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm py-2'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default Dashboard