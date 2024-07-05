'use client'
import { FilterItem } from '@/components/SearchResult'
import SingleProduct from '@/components/SingleProduct'
import { useSupabase } from '@/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
    const {id} = useParams()
    const {singleProdct ,getSingleProduct} =useSupabase()

    useEffect(()=>{
      getSingleProduct(Number(id))
    },[])
    // console.log(singleProdct);
    
  return (
   <div>
     {
      singleProdct.map((item:FilterItem)=>(
        <SingleProduct data={item} />
      ))
    }
   </div>
  )
}

export default page