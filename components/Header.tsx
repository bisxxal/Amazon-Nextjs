"use client"
import { useAppSelector } from '@/hooks/redux';
import { supabase } from '@/lib/supabase/Product';
import { getCart, getorder } from '@/redux/cartSlice';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
function Header() {
    const router = useRouter()
    const [search , setSearch] = useState<string>('')
    const [user , setUser] = useState<any>('')
    const cart =useAppSelector(getCart)
    const order = useAppSelector(getorder)
    useEffect(()=>{
      const getUserData = async()=>{
        const {data:{user}} = await supabase.auth.getUser()
        setUser(user)
      }
      getUserData()
    },[])  
    
    console.log(order.length);
    
    const gotoOrder = ()=>{
      if(user){
        router.push('/myorder')
      }
      if(order.length === 0 ){
        router.push('/')
      }
    }
  return (
    <div>
        <div className='h-[55px] w-full flex justify-between px-3 items-center'>
          <div onClick={()=>router.push('/')} className=' cursor-pointer flex gap-1 '>
          <Image className=' h-[60%] w-[110px] ' src={'/logo.png'} height={100} width={200} alt='' />.in
          </div>

<div>
  <h1>Delivery to  {user?user.identities[0].identity_data.full_name :''}  </h1>
  <h1>bhubanswer 75378</h1>
</div>

            <div className=' bg-white rounded-md w-1/2 h-[80%] flex justify-between overflow-hidden' >
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='text-black outline-none border-none w-full bg-transparent px-3 h-full ' type="text" placeholder='Search Amazon.in' />
                <Link href={`/search/${search}`}  className=' bg-[#F3A847] px-3 text-zinc-900 text-xl flex items-center justify-between'>
                    <IoSearchOutline />
                </Link>
            </div>
          
              <div onClick={()=>router.push('/signin')}  className=' group cursor-pointer relative text-sm'>{user?'Hello ,':'' } {user?user.identities[0].identity_data.full_name :'Signin'}
              <p className=' font-medium'>{user?'Account And List':''}</p>
              { user && <div className='  hidden group-hover:flex rounded-md absolute h-20 w-32 bg-white text-black z-[2] p-3 text-sm '>
                  <h1 className=' border-[1px] border-zinc-500  cursor-pointer ' onClick={async()=>{
                    const {error} =await supabase.auth.signOut()
                    router.push('/')
                  }}>LogOut </h1>
                </div>}
              </div>

              <div onClick={gotoOrder} className=' cursor-pointer'>
                <h1>Return </h1>
                  <p  className=' font-medium'>& order</p>
              </div>
            <div className=' flex relative items-center gap-1 text-sm'>
              <h1 className=' absolute top-[-6px] font-bold left-3 text-[#F3A847] z-10 '>{cart?.length}</h1>
            <PiShoppingCartSimpleDuotone onClick={()=>router.push("/cart")} className=' cursor-pointer text-3xl' />   
            </div>
        </div>
    </div>
     
  )
}

export default Header