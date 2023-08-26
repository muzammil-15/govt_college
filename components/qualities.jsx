import React from "react";
import Button from "./button";
import Link from "next/link";

const Qualities = () => {
  return (
    <div
      className="bg-cover bg-center mt-20 text-[#f7dc79] text-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-41.jpg?size=626&ext=jpg&ga=GA1.2.1857347792.1692965009&semt=ais")',
      }} // Replace with your image URL
    >
      <div className="w-full h-full bg-[#422e59d5] py-20">
        <h2 className="text-[50px] font-bold">YOUR FUTURE STARTS HERE.</h2>
        <div className="w-full md:w-[80%] mx-auto text-left mt-4">
          <p className="text-[19px] font-[450]">
            At Government College, Gilgit, we strive for excellence in
            education, nurturing young minds to reach their full potential. Our
            dedicated faculty, state-of-the-art facilities, and vibrant academic
            environment ensure a holistic learning experience.
          </p>
          <h2 className="text-[20px] font-[500] mt-10">Why Choose Us?</h2>
          <div className="flex justify-start items-center gap-4 mt-2">
            <img src="https://img.freepik.com/free-vector/white-check-mark-paint-style-green-background_78370-2967.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais" alt="tick" className="w-4 h-4 rounded-sm" />
            <span className="text-[19px] font-[450]"> Diverse Programs: Choose from Science, ICS, and Humanities streams to align with your interests and career goals.</span>
          </div>
          <div className="flex justify-start  items-center gap-4 mt-2">
            <img src="https://img.freepik.com/free-vector/white-check-mark-paint-style-green-background_78370-2967.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais" alt="tick" className="w-4 h-4 rounded-sm" />
            <span className="text-[19px] font-[450]"> Online Application: Enjoy the convenience of our user-friendly online application process.</span>
          </div>
          <div className="flex justify-start  items-center gap-4 mt-2">
            <img src="https://img.freepik.com/free-vector/white-check-mark-paint-style-green-background_78370-2967.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais" alt="tick" className="w-4 h-4 rounded-sm" />
            <span className="text-[19px] font-[450]">  Reputable Institution: Join an esteemed college with a rich history of academic excellence.</span>
          </div>
          <div className="flex justify-start  items-center gap-4 mt-2">
            <img src="https://img.freepik.com/free-vector/white-check-mark-paint-style-green-background_78370-2967.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais" alt="tick" className="w-4 h-4 rounded-sm" />
            <span className="text-[19px] font-[450]"> Well-Equipped Campus: Experience learning in a modern campus with cutting-edge facilities.</span>
          </div>
          <div className="flex justify-start  items-center gap-4 mt-2">
            <img src="https://img.freepik.com/free-vector/white-check-mark-paint-style-green-background_78370-2967.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais" alt="tick" className="w-4 h-4 rounded-sm" />
            <span className="text-[19px] font-[450]">Expert Faculty: Learn from experienced and highly qualified faculty members who are passionate about teaching.</span>
          </div>
          <div className="flex justify-start  items-center gap-4 mt-2">
            <img src="https://img.freepik.com/free-vector/white-check-mark-paint-style-green-background_78370-2967.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais" alt="tick" className="w-4 h-4 rounded-sm" />
            <span className="text-[19px] font-[450]">  Scholarships Available: Explore various scholarship opportunities to support your educational journey.</span>
          </div>
          
          
        </div>
        <Link href="/">
            <button className='mt-10 py-3 px-10 bg-[#f7dc79] text-[#422e59] font-semibold text-xl  rounded-md hover:scale-110   transition-all'>
              Learn More
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Qualities;
