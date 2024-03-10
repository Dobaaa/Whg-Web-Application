import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "./ProductsDetails.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Nav from "../../components/Nav";

export default function ProductsDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  const thisProduct = Data.find((prod) => prod.id === productId);

  return (
    <div className="parenttt ">
      <Nav />
      <div className="ProductsContainer d-flex justify-content-center align-items-center row mb-5 pb-5  mb-md-0 pb-md-0">
        <div className=" col-sm-12 col-md-4 ">
          <div className="productDesc  d-flex mt-5 pt-5   mb-md-0 pb-md-0 justify-content-center align-items-center flex-column  align-items-md-start ">
            <h1>{thisProduct.title}</h1>
            <p className="pt-4">${thisProduct.price}</p>
            <div className="pro-icon ">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="pt-4">
              The gently curved lines accentuated by sewn details are kind to
              your body and pleasant to look at. Also, there’s a tilt and
              height-adjusting mechanism that’s built to outlast years of ups
              and downs.
            </p>
            <div className="circle-btn d-flex gap-2">
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
            </div>
            <div className="socail-icons d-flex gap-3 pt-3">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>{" "}
              <i className="fa-brands fa-pinterest"></i>{" "}
              <i className="fa-brands fa-instagram"></i>{" "}
            </div>
          </div>
        </div>

        <div className=" col-sm-12 col-md-6   mb-5 pb-5   mb-md-0 pb-md-0">
          <div className="product-slide mb-5 pb-5  mb-md-0 pb-md-0 d-flex flex-column justify-content-center align-items-center ">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              breakpoints={{
                // when window width is <= 499px
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                630: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // when window width is <= 999px
                999: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img className="big-img" src={thisProduct.img} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="big-img" src={thisProduct.slide1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="big-img" src={thisProduct.slide2} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={0}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              breakpoints={{
                // when window width is <= 499px
                0: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is <= 999px
                999: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={thisProduct.slide1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thisProduct.slide5} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
