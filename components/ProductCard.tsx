import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FilterItem } from './SearchResult'
import { useAppDispatch } from '@/hooks/redux'
import { addTocart } from '@/redux/cartSlice'

function ProductCard({ data }:{data:FilterItem}) {
  const dispatch = useAppDispatch()
const router = useRouter()
  return (
    <div className=' mt-5 bg-white cursor-pointer h-72 w-full flex  gap-3 text-black rounded-md overflow-hidden '>
        <div  onClick={()=> router.push(`/product/${data.id}`)} className=' bg-[#F7F7F7] w-[250px] h-full flex items-center justify-center '>
        <Image className=' w-[90%] h-[80%]' src={data.image} height={100} width={250} alt='' />
        </div>

        <div className=' px-2 py-3'>
            <h1 className=' text-xl font-medium'>{data.title}</h1>
            <h1 className=' text-2xl font-semibold mt-3'>₹ {(data.price).toString()}</h1>
            <h1 className=' mt-2'>⭐⭐⭐⭐{data.rating.slice(9,12)} <span className=' text-blue-600 '>{data.rating.slice(23,26)}</span> </h1>
            <h1 className=' mt-2'>Flat INR 1000 Off on ICICI CreditCards</h1>
             <p className=' text-blue-400 mt-2 font-semibold'>prime</p>
            <button  onClick={()=>dispatch(addTocart(data))} className=' mt-5 bg-[#F7CA00] px-3 py-2 rounded-full text-sm '>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard