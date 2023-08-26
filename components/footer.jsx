import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-4">
      <div className="w-[90%] mx-auto flex justify-between items-center py-5">
        <div href="/" className="navlinks">Government Degree College Danyore</div>
        <div className="flex justify-center items-center gap-3">
          <Link href="https://www.facebook.com/DegreeCollegeDanyore">
            <img
              src="https://img.freepik.com/free-vector/modern-facebook-icon-design_1035-8955.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais"
              alt="facebook"
              className="w-[30px] h-[30px]"
            />
          </Link>
          <Link href="https://www.facebook.com/DegreeCollegeDanyore">
            <img
              src="https://img.freepik.com/free-vector/twitter-logo-design_1035-8934.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais"
              alt="facebook"
              className="w-[30px] h-[30px]"
            />
          </Link>
          <Link href="https://www.facebook.com/DegreeCollegeDanyore">
            <img
              src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049581.jpg?size=626&ext=jpg&ga=GA1.1.1857347792.1692965009&semt=ais"
              alt="facebook"
              className="w-[30px] h-[30px]"
            />
          </Link>
        </div>
      </div>
      <hr />
      <div className="my-3 text-center"> Copyright © 2023 Government College, Danyore</div>
    </div>
  );
};

export default Footer;
