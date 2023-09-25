import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({title , icon , href}) => {
  return (
    <Link href={href}>
    <div className='border border-yellow-500 w-[170px] h-[200px]  p-5 flex flex-col justify-center items-center gap-5'>
      <Image src={icon} width={80} height={60} alt='title'/>
        <h2 className='text-[20px] '>{title}</h2>
        
    </div>
    </Link>
  )
}

export default Card