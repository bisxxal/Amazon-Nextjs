import { NextRequest, NextResponse } from "next/server";
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIP_SECREACT_KEY!)


export async function POST(req:NextRequest,res:NextResponse) {
    const body = await req.json()
    const {items ,email} = body
    
//integrate
  const session= await stripe.checkout.sessions.create({
 
        payment_method_types:['card'],
        shipping_address_collection:{
            allowed_countries:['GB','US','CA','IN']
        },
        line_items:items.map((item:any)=>({
                                price_data:{
                                    currency:'inr',
                                    product_data:{
                                        name:item.title,
                                        images:[item.image]
                                    },
                                    unit_amount:Math.floor(item.price*100),
                                },
                                quantity:item.quantity
                            })),
        mode:'payment',
        success_url:`http://localhost:3000/success`,
        cancel_url:`http://localhost:3000/checkout`,
        metadata:{
            email,
            images: JSON.stringify(items.map((item:any)=> item.image))
        }
})
return NextResponse.json({
    id:session.id
})
}