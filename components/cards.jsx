import React from 'react'
import Card from './card'

const Cards = () => {
  return (
    <div className='w-[95%] mx-auto flex justify-center items-center gap-5 flex-wrap'>
        <Card
            title={"Events"}
            icon={"/images1.png"}
            href={"/event"}
        />
        <Card
            title={"LMS"}
            icon={"/lms1.png"}
            href={"/lms"}
        />
        <Card
            title={"Program"}
            icon={"/project1.png"}
            href={"/program"}
        />
        <Card
            title={"Alumni"}
            icon={"/social1.png"}
            href={"/faculty"}
        />
        <Card
            title={"Library"}
            icon={"/library1.png"}
            href={"/library"}
        />
        <Card
            title={"Admission"}
            icon={"/admission1.png"}
            href={"/admission"}
        />
    </div>
  )
}

export default Cards