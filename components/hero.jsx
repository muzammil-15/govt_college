import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center  text-[#f7dc79] text-center w-full h-[95vh] mb-20"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-41.jpg?size=626&ext=jpg&ga=GA1.2.1857347792.1692965009&semt=ais")',
      }} // Replace with your image URL
    >
        <div className="w-full h-full bg-[#422e59d5] py-10 flex justify-center gap-10 md:gap-20 items-center flex-col">
        <h2 className='text-[40px] md:text-[55px] font-bold text-[#f7dc79]'>CELEBRATING 53 GOLDEN  YEARS OF SUCCESS</h2>
        <div className='flex justify-center items-center flex-col gap-5'>
            <h2 className='text-[30px] md:text-[45px] font-bold text-[#f7dc79]'>ADMISSIONS OPEN</h2>
            <p className='text-lg md:text-xl text-[#f7dc79] '>Government College, Gilgit invites applications from male candidates for admission  in the<br /> following groups of HSSC-I, HSSC-II, BS and AD Programs for the session 2023-2024</p>
            <div className='w-max hover:scale-110 transition-all rounded-md overflow-hidden py-4 px-8'>
                <Link
                title="Apply Now"
                className='bg-[#f7dc79] py-4 px-8 text-[#422e59d5] text-lg font-semibold rounded-md '
                href="/"
                
            >Apply Now</Link>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Hero