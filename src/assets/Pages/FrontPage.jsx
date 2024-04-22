 import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import "swiper/css";
import { Autoplay, EffectCreative } from "swiper/modules";

const FrontPage = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              autoplay={{
                delay: 2500,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[Autoplay, EffectCreative]}
            >
              {Array.from({ length: 7 }).map((i, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                       alt="NextUI hero Image"
                      src={`/dist/img/offers/${index+1}.jpg`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
