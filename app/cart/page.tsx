"use client"
import { FilterItem } from '@/components/SearchResult';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { decrementQuantity, getCart, incrementQuantity, removeFromCart } from '@/redux/cartSlice';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'



function page() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const cart =useAppSelector(getCart)

   const countTotal = ()=>{
      let totalamt = 0
      cart.forEach((item:FilterItem) => {
        totalamt += item.price*item.quantity
      });
      return totalamt
    }
  return (
    <div className=' bg-[#EAEDED] capitalize flex text-black min-h-screen justify-between px-10 py-8 '>
        <div className='w-[80%] bg-white  p-3 px-6 '>
          <div className=' flex justify-between items-center text-sm mb-3 '>  <h1 className=' text-4xl'>Shopping Cart</h1> <h2>Price</h2></div>

        { cart ?.map((item:FilterItem)=>(
            <div className=' flex w-full pl-10 justify-between h-[240px] border-t-[1px] border-zinc-400 py-2 '>
          <div className='   flex'>
            <div className=' w-36'>
                <Image className=' w-full h-full object-' src={item.image} height={100} width={150} alt='' />
            </div>
                <div className=' p-4' >
                    <h1 className=' text-lg font-medium'>{item.title} </h1>
                    <p className=' text-xs text-green-600 mt-2'> In stock</p>
                    <p className=' text-xs text-gray-500 my-1'>Eligible for FREE Shipping</p>
                    <Image src={'/fulfil.png'} height={60} width={70} alt='' />
                    <h1 onClick={()=>dispatch(removeFromCart(item.id))} className='mt-2 cursor-pointer text-[#CC0C39] font-medium '>Remove</h1>
                    <div className=' text-blue-500 text-xs mt-4 flex items-center '> <div className=' flex items-center justify-between h-10 bg-zinc-200 text-black rounded-md  border-[1px] border-zinc-400 mr-3'>
                         <h1 onClick={()=>dispatch(incrementQuantity(item))} className=' px-3 cursor-pointer h-full flex items-center '> + </h1> <h1 className=' flex items-center px-3 border-x-[1px] my-auto h-full border-zinc-400  '>{item.quantity}</h1> <h1 onClick={()=>{ item.quantity >1 &&dispatch(decrementQuantity(item))}} className=' px-3 cursor-pointer h-full flex items-center   '>-</h1> </div>  
                    <span  onClick={()=>dispatch(removeFromCart(item.id))} className=' px-4 border-l-[1px] cursor-pointer border-zinc-500 '>Delete</span> <span className=' px-4 border-l-[1px] border-zinc-500 '>Save for later </span>  </div>
                </div>
            </div>
            <div className=' '>
                <h1 className=' text-sm font-medium text-[#CC0C39] '>Limited time deal</h1>
                <h1 className=' text-lg font-semibold'>{item.price}</h1>
            </div>
          </div>
        )) }

        </div>
        <div className=' w-[18%] bg-white p-4 h-[250px] '>
            <h1 className=' text-xs text-[#009674] mb-2 '>Your order is eligible for FREE Delivery.  </h1>  
            <p className=' text-xs '> Choose FREE Delivery option at checkout. </p>

            <h1 className=' text-lg mt-5 '>Subtotal ( items): <span className=' font-semibold'>₹{countTotal()}</span> </h1>

            <button  onClick={()=>router.push('/cheakout')}className=' w-[94%] mx-auto bg-[#FFD814] py-2 text-sm my-3 rounded-xl  '>Proceed to Buy</button>
            <button className=' w-[94%] mx-auto border border-zinc-300 py-2 text-sm mt-2 rounded-sm  '>Emi Avalible</button>
        </div>
    </div>
  )
}

export default page