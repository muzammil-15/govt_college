import React from 'react';

const Testimonial = () => {
  return (
    <div
      className="bg-cover bg-center my-20 text-[#f7dc79] text-center"
      style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais")' }}  // Replace with your image URL
    >
        <div className='w-full h-full bg-[rgba(0,0,0,0.8)] py-20'>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex items-center justify-center gap-4 flex-col shadow-md">
              <h2 className="text-[3rem] mb-4 font-bold">
                20431
              </h2>
              <div className='w-10 h-1 bg-[#f7dc79]'></div>
              <p className='text-[1.4rem] font-bold'>Success Stories</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex items-center justify-center gap-4 flex-col shadow-md">
              <h2 className="text-[3rem] mb-4 font-bold">
                36
              </h2>
              <div className='w-10 h-1 bg-[#f7dc79]'></div>
              <p className='text-[1.4rem] font-bold'>Faculty</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex items-center justify-center gap-4 flex-col shadow-md">
              <h2 className="text-[3rem] mb-4 font-bold">
                50
              </h2>
              <div className='w-10 h-1 bg-[#f7dc79]'></div>
              <p className='text-[1.4rem] font-bold'>Years Experience</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex items-center justify-center gap-4 flex-col shadow-md">
              <h2 className="text-[3rem] mb-4 font-bold">
                36K
              </h2>
              <div className='w-10 h-1 bg-[#f7dc79] '></div>
              <p className='text-[1.4rem] font-bold'>Happy Students</p>
            </div>
          </div>
          {/* Add more testimonial divs */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
