import TitleRed from "../../images/pricing/title-bg(1final).svg";


function Gallery() {
  return (
    <>
      <section id="gallery" className="relative min450:hidden">
         
        <div className="container page-padding py-[4rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center ">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-10">
              AGROFARMS GALLERY
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]  "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
            MEDIA ACKNOWLEDGES
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
            "Growing Together
              <br />With Gratitude for Media Support!"
            </p>
          </div>

          {/* gallery */}
          <div className="gallery-grid py-24 w-full h-auto relative ">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;