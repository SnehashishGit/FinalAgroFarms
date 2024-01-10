import Trainer1 from "../../images/trainers/trainer1 (2).png";
import Trainer2 from "../../images/trainers/trainer2 (2).png";
import Trainer3 from "../../images/trainers/trainer3 (2).png";
import TrainerBg from "../../images/trainers/trainer-bg.png";
import Shape from "../../images/trainers/shape.png";
import { useState } from "react";

function TrainerBox() {
  const [imgHover, setImgHover] = useState(false);

  const hoverBox = () => {
    setImgHover(true);
  };

  const hoverBoxRemove = () => {
    setImgHover(false);
  };

  const trainers = [
    { img: Trainer1, name: "Abdul Rahman", job: "Product Service Head" },
    { img: Trainer2, name: "Garimulla Poornima", job: "Accounts Head" },
    { img: Trainer3, name: "Muntaz Begum", job: "Sales Manager" },
  ];

  return (
    <>
      <div
        className="flex justify-center gap-[5rem] md1200:flex-wrap"
        style={{ margin: "0 auto" }}
      >
        {trainers.map((train, id) => (
          <div
            onMouseEnter={hoverBox}
            onMouseLeave={hoverBoxRemove}
            key={id}
            className="relative cursor-pointer w-[35rem] min450:w-full flex flex-col select-none"
          >
            {/* trainer img */}
            <img
              src={train.img}
              alt="trainer"
              style={{ transition: "all 0.3s" }}
              className={`w-[22rem] z-10 relative grayscale mx-auto ${
                imgHover ? "hover:grayscale-0" : ""
              }`}
            />
            {/* trainer bg */}
            <img
              style={{ transition: "all 0.3s" }}
              src={TrainerBg}
              alt="trainer_background"
              className={`absolute top-[4px] w-full scale-[1] `}
            />
            {/* trainer description */}
            <div className="box-desc bg-white w-full text-center shadow-lg z-10 rounded-[1px] px-[2px] py-[4px] absolute -bottom-[10px]">
              <img
                alt="shape"
                src={Shape}
                className="absolute -top-[25px] left-[113px]"
              />
              <i className="fa-solid fa-angle-up absolute -top-[16px] left-[162px] text-3xl"></i>
              <h3 className="font-bold text-[2.4rem] ">{train.name}</h3>
              <p className="font-medium text-[1.5rem] text-[#646464]">
                {train.job}
              </p>
              <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]">

                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrainerBox;