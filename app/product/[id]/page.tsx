'use client'
import { FilterItem } from '@/components/SearchResult'
import SingleProduct from '@/components/SingleProduct'
import { useSupabase } from '@/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function Product() {
    const {id} = useParams()
    const {singleProdct ,getSingleProduct} =useSupabase()

    useEffect(()=>{
      getSingleProduct(Number(id))
    },[getSingleProduct ,id]) 
    
  return (
   <div>
     {
      singleProdct.map((item:FilterItem)=>(
        <SingleProduct key={item.id} data={item} />
      ))
    }
   </div>
  )
}

export default Product