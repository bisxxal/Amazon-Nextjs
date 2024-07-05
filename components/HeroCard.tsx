
import Image from 'next/image'
function HeroCard() {
 
  
  return (
    <div className='  flex text-black '>
      <div className=' w-[330px] h-[320px] font-medium bg-[#FFFFFF] px-4 py-3 '>
          <h1 className=' text-lg font-medium'>Starting ₹99 | Home improvement essentials</h1>

          <div className=' flex flex-wrap  '>
             <div className=' w-1/2  text-xs '><Image src='/c1.jpg'     className=' w-full object-cover' height={190} width={190}alt='' /><p> Spin mops, wipes & more </p></div>
             <div className=' w-1/2  text-xs px-2'><Image src='/c2.jpg' className=' w-full object-cover' height={190} width={190}alt='' /><p> Spin mops, wipes & more </p></div>
             <div className=' w-1/2  text-xs px-2'><Image src='/c3.jpg' className=' w-full object-cover' height={190} width={190}alt='' /><p> Spin mops, wipes & more </p></div>
             <div className=' w-1/2  text-xs px-2'><Image src='/c4.jpg' className=' w-full object-cover' height={190} width={190}alt='' /><p> Spin mops, wipes & more </p></div>
          </div>
      </div>
    </div>
  )
}

export default HeroCard