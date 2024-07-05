import React from 'react'
import ProductCard from '@/components/ProductCard'


  export interface FilterItem{
    id:number,
    price:number,
    description:string
    rating:string
    product:string
    category:string
    image:string
    title:string
    quantity:number

}

 export interface SearchResultProps{
      filter : FilterItem[]
   }


  function SearchResult({ filter }:SearchResultProps) {

  return (
    <div className=' w-[80%] mx-auto '>
        <div>

        {
          filter && filter ? (
        <h1>
         Results {filter?.length}<br />
         Check each product page for other buying options.
        </h1> ): ( <h1>No result</h1>) 
        }
        </div>

        <div>
          {
            filter && filter?.map((item:FilterItem ,index:number)=>{
              return(
               <ProductCard key={item.id} data={item}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default SearchResult