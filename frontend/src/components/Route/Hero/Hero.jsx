import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles"
import bannerImage from "D:/PjGroup/frontend/src/Assests/brand-color-with-out-pattern.png";


const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
        style={{
          backgroundImage: `url(${bannerImage})`
        }}
        
     
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#DD9933] font-[600] capitalize`}
        >
          Find your best Real Estate.
        </h1>
        <p className="pt-5 flex items-center text-[18px] font-[Poppins] font-[400] text-[#DD9933]">
        Easy to buy & sell your property with our PJ Groups,<br /> Top-Class Real Estate Center.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 hover:bg-[#379be2]`}>
                 <span className="text-[#fffefe]   font-[Poppins] text-[18px]">
                    Find Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
