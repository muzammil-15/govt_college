import Link from 'next/link'
import React from 'react'

const FeaturesCard = ({image, title, subtitle, desc, href}) => {
  const height= href? "250px" :"470px";
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden 
        l ">
      <img className={`w-full h-[${height}] object-cover `} src={image} alt="Card" />
      <div className="p-4">
      <p className="text-[#422e59] font-semibold">{subtitle}</p>

        <h3 className="text-2xl font-semibold mb-2 text-[#422e59] mt-3">{title}</h3>
        <p className="text-gray-700 mt-2 para">{desc? `${desc}`: ""}</p>
        {
          href? <Link href={href? `${href}`: "#"}>
            <button className='py-2 px-4 bg-[#9B9A9A] text-[#f7e6b4] font-semibold mt-4'>
              Learn More
            </button>
        </Link>: ""
        }
        
      </div>
    </div>
  )
}

export default FeaturesCard