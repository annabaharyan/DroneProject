import React from "react";

export default function SlidImg({ images, clickImage }) {
  const { photos, currentIndex } = images;
  return (
    <div className="allimagesofSlide">
      {photos.map((el, ind) => (
        <img
          key={ind}
          src={require("../../images/" + el)}
          alt=""
          className={currentIndex === ind ? "onImage" : null}
          onClick={() => clickImage(ind)}
        />
      ))}
    </div>
  );
}
