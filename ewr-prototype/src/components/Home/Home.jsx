import React from "react";
import Button from "../custom-btn/Button";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="banner__image">
        <div className="banner__content">
          <h1 className="banner__text">The best of the best</h1>
          <Button displaytext="CHOOSE YOUR PLATFORM" />
        </div>
      </div>
      <div className="card">
        <div className="card__content">
          <img src="https://source.unsplash.com/random/300x300" alt="" />
          <h1>Some Text</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            nobis! Ad sed laborum nesciunt saepe, in quisquam. Quis assumenda ab
            incidunt itaque excepturi, dicta ratione, beatae ipsum provident,
            autem enim.
          </p>
        </div>

        <div className="card__content">
          <img src="https://source.unsplash.com/random/300x300" alt="" />
          <h1>Some Text</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            nobis! Ad sed laborum nesciunt saepe, in quisquam. Quis assumenda ab
            incidunt itaque excepturi, dicta ratione, beatae ipsum provident,
            autem enim.
          </p>
        </div>
        <div className="card__content">
          <img src="https://source.unsplash.com/random/300x300" alt="" />
          <h1>Some Text</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            nobis! Ad sed laborum nesciunt saepe, in quisquam. Quis assumenda ab
            incidunt itaque excepturi, dicta ratione, beatae ipsum provident,
            autem enim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
