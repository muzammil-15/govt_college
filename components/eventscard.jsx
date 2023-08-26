import React from 'react'

const EventsCard = ({image, title, time, location}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-[250px] object-cover" src={image} alt="Card" />
      <div className="p-4">
        <h3 className="text-2xl  font-semibold mb-2 text-[#422e59] mt-3">{title}</h3>
        <p className="text-gray-700 mt-4 font-semibold">{time}</p>
        <p className="text-gray-700 mt-2">{location}</p>
        
      </div>
    </div>
  )
}

export default EventsCard