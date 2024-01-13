import Footer from "../components/Footer/Footer";

import TitleRed from "../images/pricing/title-bg(1final).svg";
import MainButton from "../components/MainButton";

import AboutUs from "../images/who-we-are/about-us.jpg";
import GirlText from "../images/who-we-are/rating.jpg";


function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                who we are
              </p>
             

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
              First Agro Company with specific service in Andhra Pradesh
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
              We are the first company to be nominated to Agro Business POSHAN Program innovation and works closely to the problems of the farmers and reduces the human efforts and manpower in getting the work done
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#4caf50]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
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
            {/*  */}
          </div>
          {/*  */}
          
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;