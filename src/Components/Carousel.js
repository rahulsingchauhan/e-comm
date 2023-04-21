import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect : true,


    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Slide 1" className="carousel-img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1601036567673-5b8342e20af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2aWF0b3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 2" className="carousel-img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1627910016961-ee310ef0b108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydCUyMG1vY2t1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 3" className="carousel-img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1622920799137-86c891159e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpcCUyMGZsb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 4" className="carousel-img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1681187636275-666cb92e1e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Slide 5" className="carousel-img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 6" className="carousel-img" />
        </div>
      </Slider>
    </div>
    </>
  );
};

export default Carousel;
