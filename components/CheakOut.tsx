"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { supabase } from '@/lib/supabase/Product';
import { addToOrder, getCart, getorder } from '@/redux/cartSlice';
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import Image from 'next/image';
import React from 'react'
import { FilterItem } from './SearchResult';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIP_PUBLISH_KEY!)
function CheakOut() {
   const cart = useAppSelector(getCart)
   const order = useAppSelector(getorder)
   const dispatch = useAppDispatch()
    const createStripeSession = async()=>{
        const {data:{user}} = await supabase.auth.getUser()
        const stripe =await stripePromise;

        const cheakoutSession = await axios.post('api/cheakout-sessions',{
            items:cart,
            email:user?.email
        })

        // redirect to cheakout
        const res = await stripe?.redirectToCheckout({
            sessionId:cheakoutSession.data.id,
        })
        if(res?.error){
            console.log(res.error);
            
        }
    } 
    const countTotal = ()=>{
      let totalamt = 0
      cart.forEach((item:any) => {
        totalamt += item.price*item.quantity
      });
      return totalamt
    }
  return (
    <div className=' w-full h-screen bg-white absolute top-0 text-black'>

      
        <div className=' flex justify-center gap-5 text-4xl pt-7 pb-4 font-medium bg-[#c8c8c8]'>
        <Image className=' invert' src={'/logo.png'} height={200} width={200} alt='' /> 
        <h1>CheckOut Page</h1>
        </div>




      <div className=' flex justify-between px-20 mt-2'>

           <div className=' bg-white w-[80%]  border-[1px] border-zinc-200 py-6'>
          <div className=' flex justify-around'>
            <p className=' text-lg font-semibold'>1 Delivery address</p>

            <p className=' w-52'>
            Bishal
            bishnupriya apartment gc-4
            Saliashai jaydev vihar
            Bhubaneswar, ODISHA 751013
            </p>

            <p>Change</p>
          </div>

          {/* //cart page */}
            <div>
            { cart ?.map((item:FilterItem)=>(
            <div className=' flex w-full justify-between h-[100px] border-t-[1px] border-zinc-200 py-2 mt-5 px-10 '>
          <div className='   flex'>
            <div className=' w-24'>
                <Image className=' w-full h-full object-' src={item.image} height={100} width={150} alt='' />
            </div>
                <div className=' p-4' >
                    <h1 className='  font-medium'>{item.title} </h1>
                    <p className=' text-xs text-green-600 mt-2'> In stock</p> 
                    <Image src={'/fulfil.png'} height={60} width={50} alt='' /> 
 
                </div>
            </div>
            <div className=' '> 
                <h1 className=' text-lg font-semibold'>₹{item.price}</h1>
            </div>
          </div>
        )) }
            </div>
          </div>
  
  
          <div className=' border-zinc-200 px-5 py-3 border-[1px] w-60 h-[290px] bg-white'>
  <p className=' text-xs'>Choose a payment method to continue checking out. You will still have a chance to review and edit your order before it is final.
  </p>
  
  <p className=' text-bold text-lg'>Order Summary</p>
  <div className=' flex w-full justify-between'>
    
  <p>Item: </p> <p>{cart.length}</p>
  </div>
  <div className=' text-[#CC0C39] flex border-y-[1px] py-3 mt-5 border-[#CC0C39] w-full justify-between '>
  <p>Order Total </p> <p> {countTotal()}</p>
     
  </div>
  
          <button onClick={()=>{
            dispatch(addToOrder(cart));
            createStripeSession()}} className=' w-full px-1 rounded-2xl py-3 mt-5  bg-[#FFD814] '>Procced to payment</button>
          </div>
      </div>
    </div>
  )
}

export default CheakOut