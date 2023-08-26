import React from 'react';
import Button from './button';

const About = () => {
  return (
    <>
    <h2 className='w-[95%] mx-auto subhead text-center mt-10'>About</h2>
    <div className="flex flex-col lg:flex-row mx-4 lg:mx-20 my-10">
      <div className="lg:w-1/2 lg:pr-4">
        <p className="para text-left lg:text-left">
            Government College, Gilgit holds immense historical significance as the pioneering public sector educational institution in the region of Gilgit-Baltistan, formerly known as the Northern Areas. Its establishment on September 7, 1970 marked a momentous milestone in the educational landscape of Gilgit, as it became the first college to provide higher education opportunities to the local community.

            In its humble beginnings, Government College, Gilgit commenced its academic journey in a modest setting, utilizing a school hostel building. At that time, the college had only a handful of students and faculty members, operating with limited resources. Despite these challenges, the college managed to provide quality education and laid the foundation for its future growth and success.
        </p>
      </div>
      <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
        <p className="para text-left lg:text-left mb-5">
            Recognizing the need for a more suitable and dedicated facility, a magnificent building was constructed in 1972 at the picturesque junction of Gilgit and Hunza rivers. This new edifice served as the designated home for the college, providing an inspiring environment for learning and intellectual pursuits. The move to the new building marked a significant milestone in the evolution of Government College, Gilgit.

            Continuing its trajectory of progress, the college achieved another significant milestone in 1976 when it was upgraded to offer degree-level programs. This expansion allowed students to pursue undergraduate studies in various disciplines, opening doors to enhanced academic opportunities and professional growth.
        </p><Button
        href={'/'}
        title={"Learn More"}
        className="mt-10"
    />
      </div>
    </div>
    
    </>
  );
};

export default About;
