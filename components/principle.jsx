import React from "react";
import FeaturesCard from "./featuresCard";
import Image from "next/image";

const Principle = () => {
  return (
    <div className="bg-slate-200 py-10">
      <h2 className="w-[95%] mx-auto subhead text-center ">
        What Principle Say's
      </h2>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-20 my-10 items-center">
        <div className="lg:w-1/2 lg:pr-4">
          <Image src="/pp.jpeg" width={500} height={500} alt="principle" />
        </div>
        <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
          <blockquote class="text-xl italic leading-10 font-semibold text-gray-900 ">
            <p>
            Dear students, your college journey is a chapter in the book of your life, and I urge you to make it a memorable one. Remember, success is not measured by the grades you earn but by the knowledge you gain. Embrace challenges, for they are stepping stones to growth. Cherish friendships, as they will be your support system. Stay curious, as learning never ends. And always remember, your potential is limitless. As your college principal, I have faith in your abilities, and I believe you can achieve greatness. So, dream big, work hard, and make us proud. The future is yours to shape!
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Principle;
