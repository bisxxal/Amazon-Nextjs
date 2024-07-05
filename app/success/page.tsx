"use client"
import { useRouter } from 'next/navigation' 

function Success() { 
  const router =useRouter()
    
  return (
    <div className='bg-white text-black min-h-screen flex items-center justify-center flex-col gap-6'>
        
      <h1>Order created Successfully !! 🎉🎉</h1>
      <h1>Thank You for Shopping !! 😄</h1>
      
      <h1 className=' bg-green-500 px-5 py-2 rounded-lg cursor-pointer ' onClick={()=>router.push('/myorder')} >Go to My order</h1>
  
      </div>
    
  )
}

export default Success