import Image from 'next/image'
import React from 'react'

function Fotter() {
  return (
    <div className=' w-full h-[50vh] bg-[#232F3E] '>
        <div className=' flex gap-5 justify-around  px-32 py-20 mx-auto'>
            
        <div className=' flex flex-col gap-1 text-sm'>
       <h1> Get to Know Us</h1>
       <h1> About Us</h1>
       <h1> Careers</h1>
       <h1> Press Releases</h1>
       <h1> Amazon Science</h1>
        </div>

        <div className=' flex flex-col gap-1 text-sm'> 
        <h1> Connect with Us</h1>
        <h1> Facebook</h1>
        <h1> Twitter</h1>
        <h1> Instagram</h1>
        </div>

        <div className=' flex flex-col gap-1 text-sm'>

       <h1> Make Money with Us</h1>
       <h1> Sell on Amazon</h1>
       <h1> Sell under Amazon Accelerator</h1>
       <h1> Protect and Build Your Brand</h1>
       <h1> Amazon Global Selling</h1>
       <h1> Become an Affiliate</h1>
       <h1> Fulfilment by Amazon</h1>
       <h1> Advertise Your Products</h1>
       <h1> Amazon Pay on Merchants</h1>
        </div>

        <div className=' flex flex-col gap-1 text-sm'>

       <h1> Let Us Help You</h1>
       <h1> COVID-19 and Amazon</h1>
       <h1> Your Account</h1>
       <h1> Returns Centre</h1>
       <h1> Recalls and Product Safety Alerts</h1>
       <h1> 100% Purchase Protection</h1>
       <h1> Amazon App Download</h1>
       
        </div>
        </div>

        <div className=' flex items-center justify-center py-3'>
        <Image className=' h-[60%] w-[110px] ' src={'/logo.png'} height={100} width={200} alt='' />.in
        
        </div>
    </div>
  )
}

export default Fotter