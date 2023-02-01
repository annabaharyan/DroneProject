import React, { useState } from "react";
import { imageSlider } from "../../myObjects";
import SlidImg from "./SlidImg";
export default function Slider() {
  const [myState, setmyState] = useState(imageSlider);
  const mainPhoto = myState.photos[myState.currentIndex];
  function goPrev() {
    if (myState.currentIndex < myState.photos.length - 1) {
      myState.currentIndex++;
    } else {
      myState.currentIndex = 0;
    }
    setmyState({ ...myState });
  }
  function goNext() {
    if (myState.currentIndex <= 0) {
      myState.currentIndex = myState.photos.length - 1;
    } else {
      myState.currentIndex--;
    }
    setmyState({ ...myState });
  }
  function clickImage(index) {
    myState.currentIndex = index;
    setmyState({ ...myState });
  }
  return (
    <div className="slide">
      <div className="mainImage">
        <button onClick={goPrev}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="mainImg">
          <img src={require("../../images/" + mainPhoto)} alt="mainphoto" />
        </div>
        <button onClick={goNext}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <SlidImg images={myState} clickImage={clickImage}/>
    </div>
  );
}
