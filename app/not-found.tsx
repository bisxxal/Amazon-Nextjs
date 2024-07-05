
import Image from 'next/image'
import React from 'react'

function errorPage() {
  return (
    <div className=' flex items-center justify-center min-h-screen text-4xl gap-3 font-bold flex-col  '>
      <Image src={'/logo.png'} height={200} width={300} alt='' /> 
  404/    Page Not Found 🥹
      </div>
  )
}

export default errorPage