import React from 'react'
import FeaturesCard from './featuresCard'

const Features = () => {
  return (
    <div className='px-[5%] py-10 my-10 bg-gradient-to-b from-neutral-400 to-white'>
        <h2 className='subhead text-center'>What&apos;s Happening</h2>
        <p className='para text-center'>
            GC, Gilgit is celebrating its 53 Golden Years of its excellence and Life-Changing Opportunity. Come and join us and take a historical tour of GC, Gilgit on our timeline. 
            GC, Gilgit is celebrating its 53 Golden Years of its excellence and Life-Changing Opportunity. Come and join us and take a historical tour of GC, Gilgit on our timeline. 
        </p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <FeaturesCard
                image={"https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=sph"}
                title="Exciting Discoveries"
                subtitle="SOCIAL SCIENCE"
                desc="Lorem ipsum dolor sit amet, consectetur pis elit. Phasellus tristique id dolor nec tempus. Dui eget magna ut mi efficitur mostie. Nulla euagna feugiat, ullamcorper tempus magna."
                href="/"
            />
            <FeaturesCard
                image={"https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=sph"}
                title="Getting Warmer"
                subtitle="CLIMATE CHANGE"
                desc="Lorem ipsum dolor sit amet, consectetur pis elit. Phasellus tristique id dolor nec tempus. Dui eget magna ut mi efficitur mostie. Nulla euagna feugiat, ullamcorper tempus magna."
                href="/"
            />
            <FeaturesCard
                image={"https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=sph"}
                title="Tutoring Opportunities"
                subtitle="COMMUNITY OUTREACH"
                desc="Lorem ipsum dolor sit amet, consectetur pis elit. Phasellus tristique id dolor nec tempus. Dui eget magna ut mi efficitur mostie. Nulla euagna feugiat, ullamcorper tempus magna."
                href="/"
            />
        </div>
    </div>
  )
}

export default Features