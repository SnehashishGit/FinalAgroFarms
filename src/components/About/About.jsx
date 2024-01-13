import AboutCarts from "./AboutCarts";
import TitleRed from "../../images/pricing/title-bg(1final).svg";
import TrainersIcon from "../../images/who-we-are/group.png";
import ModernIcon from "../../images/who-we-are/watering-can.png";
import BtwoB from "../../images/who-we-are/b2b.png";
import AboutUs from "../../images/who-we-are/about-us.jpg";

import GirlText from "../../images/who-we-are/rating.jpg";

import MainButton from "../MainButton";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            <AboutCarts />
          </div>

          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md1000:pl-0 mb-12">
                About Us
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[31%] absolute -top-[6px] md1000:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
              First Agro Company with specific service in Andhra Pradesh
              </h2>
              <p className="text-[16px] text-[#646464] font-medium ">
              We are the first company to be nominated to Agro Business POSHAN Program innovation and works closely to the problems of the farmers and reduces the human efforts and manpower in getting the work done
              </p>
              {/* about text icons */}
              <div className="flex mt-12 mb-[7rem] gap-[2px] min620:flex-col ">
                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 min620:px-0">
                  <img
                    src={TrainersIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> team
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none">
                  <img
                    src={ModernIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    modern <br /> equipments
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <img
                    src={BtwoB}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    b2b<br />
                    model
                  </h3>
                </div>
              </div>
              {/* cta button */}
              <MainButton
                color={`!text-white`}
                bg={`bg-[#4CAF50]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FFC107]`}
                text="take a tour"
                goTo="https://youtu.be/YAIJ1ZwqsV8?si=vLmNRa-xi3MV3jd3"
              />
            </div>
            {/* img side */}


            <div className="relative md1000:hidden">
              <img
                src={AboutUs}
                alt="abtus"
                className="abt-us"
              />
               <img src={GirlText} alt="bg-text" className="girl-text" />
               </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;