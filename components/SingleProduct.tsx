import Image from 'next/image'
import React from 'react'
import { FilterItem } from './SearchResult'
import { useAppDispatch } from '@/hooks/redux'
import { addTocart } from '@/redux/cartSlice'

function SingleProduct({data}:{data:FilterItem}) {
  const dispatch = useAppDispatch()
  return (
    <div className=' text-black flex justify-between bg-white h-screen px-10 pt-16'>
        <div className='w-[45%] bg-[#F7F7F7] '>
            <Image className=' w-full h-full object-contain' src={data.image} height={500} width={600} alt=''/>
        </div>

        <div className='  bg-blue-30 w-[35%] mx-auto '>
          <h1 className=' text-xl font-medium'>{data.title}</h1>
          <h1 className=' border-b my-3 border-zinc-200'>ratings ⭐⭐⭐⭐ </h1>
          <h1 className=' text-3xl font-medium  my-3 '>{data.price}</h1>
          <p className=' text-xs tex-zinc-400'>Inclusive of all taxes</p>


          <div>
            
          </div>
          <p className='  mt-3 font-semibold'>Product details</p>
          <p className=' text-sm text-zinc-600'>
            {data.description}
          </p>
        </div>

        <div className=' border border-zinc-200 h-[60%] w-[17%] rounded-lg px-4 py-3'>
            <h1 className=' text-3xl font-medium  '>{data.price}</h1>
             <p className=' text-sm my-2'>
              
       <span className=' text-blue-500'>FREE delivery</span> Wednesday, 10 July. Order within 18 hrs 12 mins. Details
             </p>

             <p className=' text-green-600 my-2'> In stock  </p>
             
             
             <p className=' text-xs text-zinc-500 mb-10'> Ships from  <span> Amazon</span> </p>
              
           
           <button onClick={()=>dispatch(addTocart(data))} className=' w-[90%] py-1 my-1 bg-[#FFD814] mx-auto rounded-full '>Add to cart</button>
           <button className=' w-[90%] py-1 my-1 bg-[#FFA41C] mx-auto rounded-full '>Buy Now</button>

           <p className=' text-xs text-zinc-400 mt-3'>Secure transtion</p>
        </div>
    </div>
  )
}

export default SingleProduct