import React from 'react'
import Card from './card'

const Cards = () => {
  return (
    <div className='w-[95%] mx-auto flex justify-center items-center gap-5 flex-wrap'>
        <Card
            title={"Events"}
            icon={"/images1.png"}
        />
        <Card
            title={"LMS"}
            icon={"/lms1.png"}
        />
        <Card
            title={"Program"}
            icon={"/project1.png"}
        />
        <Card
            title={"Social"}
            icon={"/social1.png"}
        />
        <Card
            title={"Library"}
            icon={"/library1.png"}
        />
        <Card
            title={"Admission"}
            icon={"/admission1.png"}
        />
    </div>
  )
}

export default Cards