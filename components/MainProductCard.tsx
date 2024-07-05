"use client"
import { useSupabase } from '@/hooks/useSupabase'
import Image  from 'next/image'
import React, { useEffect } from 'react'
import { FilterItem } from './SearchResult'
import { useRouter } from 'next/navigation'

function MainProductCard() {
    const { products, getdataFormSupabase } = useSupabase()
const router = useRouter()
  useEffect(()=>{
    getdataFormSupabase()
    
  },[]) 
  return (
    <div className=' bg-[#E3E6E6] text-black py-20 px-10 min-h-screen '>
        <div>
 
  <h1 className='px-5 py-4 font-semibold text-lg bg-[white]'>Up to 30% off | men's clothing products curated from stores nearby</h1>
        <div className='px-5 py-4 flex w-full justify-between h-[300px] bg-[white] mb-10'>
        {
            products?.map((item:FilterItem)=>{
                if( item.category === "men's clothing")
              { 
                  return(
                      
                      <Image className='cursor-pointer object-contain' onClick={()=> router.push(`/product/${item.id}`)}  src={item.image} height={400} width={250} alt='' /> 
                )
              } 
          })
        }
        </div>

        <h1  className=' bg-[white] font-semibold text-lg px-5 py-4'> Up to 60% off | electronices products curated from stores nearby</h1>
        <div className=' flex w-full justify-between h-[300px] bg-[white] px-5 py-4 mb-10'>
        {
            products?.map((item:FilterItem)=>{
                if( item.category === 'electronics')
              {
                  return(
                      
                      <Image className='cursor-pointer object-contain'  onClick={()=> router.push(`/product/${item.id}`)} src={item.image} height={300} width={200} alt='' /> 
                )
              } 
          })
        }
        </div>

        <h1  className=' bg-[white] font-semibold text-lg px-5 py-4'> Up to 20% off | jewelry products curated from stores nearby</h1>
        <div className=' flex w-full justify-between h-[300px] bg-[white] px-5 py-4'>
        {
            products?.map((item:FilterItem)=>{
                if( item.category === 'jewelry')
              {
                  return(
                      
                      <Image className='cursor-pointer object-contain' onClick={()=> router.push(`/product/${item.id}`)}  src={item.image} height={300} width={200} alt='' /> 
                )
              } 
          })
        }
        </div>


      

 
       
        </div>
    </div>
  )
}

export default MainProductCard