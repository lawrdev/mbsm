import { ReactNode, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const CustomSwiper = ({ children }: { children: ReactNode }) => {
  const swiperRef = useRef<SwiperType>();
  // TODO: custom swiper buttons

  return (
    <div className="position-relative">
      <div className="position-relative overflow-x-hidden">
        <Swiper
          className="owl-courses-item owl-carousel"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Navigation, Autoplay]}
          direction="horizontal"
          spaceBetween={32}
          slidesPerView={"auto"}
          speed={1000}
          style={{
            // background: "#00000020",
            paddingBlock: "4px",
          }}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomSwiper;
