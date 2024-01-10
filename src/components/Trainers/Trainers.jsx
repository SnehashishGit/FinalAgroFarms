import TitleRed from "../../images/pricing/title-bg(1final).svg";
import TrainerBox from "./TrainerBox";

function Trainers() {
  return (
    <>
      <section id="team" className="trainers-section">
        <div className="container page-padding py-[12rem]">
          {/* title div -- */}
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
            Our Company
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[21rem] absolute -top-[6px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
            Our Team
            </h2>
            <p className="text-[#4caf50] font-medium text-[15px] ">
            Our Trusted who have thorough understanding on the
product 
              <br /> 50+ Active Squad
Divided into several professional
divisions within the company
            </p>
          </div>

          {/* trainers div -- */}
          <div className="flex mt-5 ">
            <TrainerBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;