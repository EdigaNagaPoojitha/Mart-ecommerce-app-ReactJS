import React, { useContext } from "react";
import Slider from "react-slick";
import { ProductData } from "../../Components/ContextApi";
import "./Slider.css";


const SliderComp = () => {
  const slider = useContext(ProductData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-wrapper" style={{width:"100%"}}>
      <Slider {...settings}>
        {slider.map((item) => (
          <div key={item.id} className="slide">
            <div className="slide-content">
              <div className="slide-text">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className="slide-btn">Visit Collections</button>
              </div>
              <div className="slide-image" >
                <img src={item.cover} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;

