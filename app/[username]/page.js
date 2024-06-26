import React from 'react'
import PaymentPage from '../components/PaymentPage'

const page = ({params}) => {
  //console.log("this is it it is", params.username)
  return (
    <>
      
      <PaymentPage username={params.username}/>
    </>
  )
}

export default page