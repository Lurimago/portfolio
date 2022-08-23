import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../img/imgslide1.jpg";
import imgSlide2 from "../img/imgslide2.jpg";
import imgSlide3 from "../img/imgslide3.jpg";
import imgSlide4 from "../img/imgslide4.jpg";
import imgSlide5 from "../img/imgslide5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";

const AboutMe = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
      <div className="cardX">
      <h1>About me</h1>
        <div className="cardTop">
          <h2>Technology</h2>
          <img className="imgSlide1" src={imgSlide1} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide2" src={imgSlide2} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide3" src={imgSlide3} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide4" src={imgSlide4} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide5" src={imgSlide5} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide1" src={imgSlide1} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide2" src={imgSlide2} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide3" src={imgSlide3} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide4" src={imgSlide4} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
      <div className="cardX">
        <div className="cardTop">
        <h2>Slide 1 H1</h2>
          <img className="imgSlide5" src={imgSlide5} />
        </div>
        <div className="cardBoton">
          <h3> Slide 1 H3</h3>
          <p> Párrafo Slide 1. Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
      </div>
    </Slider>
  );
};

export default AboutMe;
