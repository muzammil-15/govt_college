import React from 'react'
import EventsCard from './eventscard'

const Events = () => {
  return (
    <div className='w-[95%] mx-auto my-10'>
        <h2 className='subhead text-center'>Events</h2>
        <p className='para text-center'>
            GC, Gilgit is celebrating its 53 Golden Years of its excellence and Life-Changing Opportunity. Come and join us and take a historical tour of GC, Gilgit on our timeline. 
        </p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <EventsCard
                image={"https://img.freepik.com/free-photo/celebrating-with-sparklers-night_53876-18286.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais"}
                title={"Commencement Of Inependence Day Celebrations"}
                time={"Aug 9 at 09:00 PM"}
                location={"sir syed hall"}
            />
            <EventsCard
                image={"https://img.freepik.com/free-photo/blogger-journalist-young-cute-handsome-guy-grey-suit-recording-video-smiling_140725-166062.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais"}
                title={"Lecture Recording"}
                time={"June 22 – 09:00 AM -3:00 PM"}
                location={"Recording Studio"}
            />
            <EventsCard
                image={"https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346665.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais"}
                title={"PowerPoint Workshop"}
                time={"July 06 – July 15 09:00 AM -12:00 PM"}
                location={"Computer Room"}
            />
        </div>
    </div>
  )
}

export default Events