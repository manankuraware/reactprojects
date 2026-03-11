import React from "react";
import foodData from "../../foodData.json";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSlider.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function ProductSlider() {
  return (
    <div className="container">
      <div className="productsliderwrapper">
        <div className="productsliderheader">
          <div className="prodsliderheading">
            <h2>Most popular dishes</h2>
            <p>
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo
              modi.
            </p>
          </div>
          <div className="prodsliderbuttons">
            <button className="custom-prev">
              <FaAngleLeft size={20} />
            </button>
            <button className="custom-next">
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
        >
          {foodData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="productitem">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="prodsliderpricewrapper">
                    <p>₹{item.price}</p>
                    <p>⭐ {item.rating}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
