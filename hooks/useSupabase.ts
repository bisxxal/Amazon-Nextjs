import { supabase } from "@/lib/supabase/Product";
import { useState } from "react"

export const useSupabase = ()=>{
    const [products ,setProducts] = useState<any>([])
    const [filter ,setFilter] = useState<any[]>([])
    const [singleProdct ,setSingleProdct] = useState<any>([])

   const getdataFormSupabase = async()=>{
      let { data, error } = await supabase.from('products').select('*')
    if(data){
        setProducts(data) 
    }
   } 

   const filterDataFormSupabase = async(query:string)=>{
    let { data, error } = await supabase.from('products').select('*').or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
    if(data){
        setFilter(data) 
    }
   }

   const getSingleProduct = async (id:number)=>{
    let {data , error} = await supabase.from('products').select('*').eq("id",id)
        if(data){
            setSingleProdct(data)
        }   
   }
   return {
    products, getdataFormSupabase ,
    
    filterDataFormSupabase ,filter , singleProdct ,getSingleProduct

   }
 
}

 