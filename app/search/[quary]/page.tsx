"use client"
import SearchResult from '@/components/SearchResult'
import { useSupabase } from '@/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
 
function page() {
    const {quary} = useParams()
     const  {filterDataFormSupabase ,filter} =useSupabase()

     useEffect(()=>{
      filterDataFormSupabase(quary.toString())
     },[quary])
 
  return (
    <div>
         {filter && <SearchResult filter={filter}/>}
    </div>
  )
}

export default page 