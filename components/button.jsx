import Link from 'next/link'
import React from 'react'

const Button = ({title, icon , href}) => {
  return (
    
    <Link href={href}>

        <div className='bg-[#E2CC00] w-max text-black font-semibold flex justify-center items-center py-3 px-5 gap-2'>
            <span>{icon}</span>
            <span>{title}</span>
        </div>
    </Link>
  )
}

export default Button