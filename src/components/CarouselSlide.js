import React from "react";

export default function CarouselSlide() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src=" https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg"
              className="d-block w-100"
              alt="..."
              style={{ width: "700px", height: "350px" }}
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://img.freepik.com/premium-photo/hamburger-with-flying-sauce-cheese-it_575980-1172.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699401600&semt=ais"
              className="d-block w-100"
              alt="..."
              style={{ width: "700px", height: "350px" }}
            />
          </div>
          <div className="carousel-item ">
            <img
              src=" https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696464000&semt=ais"
              className="d-block w-100"
              alt="..."
              style={{ width: "700px", height: "350px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
