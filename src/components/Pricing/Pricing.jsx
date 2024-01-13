import TitleRed from "../../images/pricing/title-bg(1final).svg";

import BgDumbell from "../../images/pricing/bg-img.jpg";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.png";



function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
         
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              PRICING CHART
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Exclusive price
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
            Grow with AgroFarms:
                                       
              <br /> Affordable plans, premium tools. Your success, our priority.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} price="25000" />
            
            
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;