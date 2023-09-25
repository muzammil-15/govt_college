import React from 'react'
import EventsCard from '../../components/featuresCard'


const Events = () => {
  return (
    <div className='w-[95%] mx-auto my-10'>
        <h2 className='subhead text-center'>Events</h2>
        <p className='para text-center'>
            GC, Gilgit is celebrating its 53 Golden Years of its excellence and Life-Changing Opportunity. Come and join us and take a historical tour of GC, Gilgit on our timeline. 
        </p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <EventsCard
                image={"/function.jpeg"}
                title={"Commencement Of Inependence Day Celebrations"}
                time={"Aug 9 at 09:00 PM"}
                location={"sir syed hall"}
            />
            <EventsCard
                image={"/function1.jpeg"}
                title={"Lecture Recording"} 
                time={"June 22 – 09:00 AM -3:00 PM"}
                location={"Recording Studio"}
            />
            <EventsCard
                image={"/function1.jpeg"}
                title={"PowerPoint Workshop"}
                time={"July 06 – July 15 09:00 AM -12:00 PM"}
                location={"Computer Room"}
            />
        </div>
    </div>
  )
}

export default Events