"use client"
import { FilterItem } from '@/components/SearchResult'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import {  getorder } from '@/redux/cartSlice'
import Image from 'next/image' 

function page() {
    const order = useAppSelector(getorder)
    const dispatch = useAppDispatch() 
  return (
    <div className='bg-white text-black min-h-screen'>
    <div className=' p-20'>
    <h1>Thank You for Shopping !! 😄</h1>


    <div>
        {order?.map((innerArray:any, index:number) => (
        <div key={index} className='flex w-full justify-between h-100 border-t border-zinc-200 py-2 mt-5 px-10 flex-col'>
          {innerArray?.map((item:FilterItem) => (
            <div key={item.id} className='flex w-full py-10 border-t border-zinc-200 '>
              <div className='w-24'>
                <Image className='w-full h-full object-contain' src={item.image} height={100} width={150} alt='' />
              </div>
              <div className='p-4'>
                <h1 className='font-medium'>{item.title}</h1>
                <Image src='/fulfil.png' height={60} width={50} alt='' />
                <h1 className=' text-lg font-medium'>₹{item.price}</h1>
              </div>
            </div>
          ))}
    </div>
    ))}
    </div>

      </div>
    </div>
  )
}

export default page