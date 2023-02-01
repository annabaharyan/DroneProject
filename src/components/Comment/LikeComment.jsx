import React from "react";

export default function LikeComment({ elem, clickLike }) {
  return (
    <div className="likePart">
      <button
        className="btnLike"
        onClick={() => {
          elem.likecount++;
          clickLike();
        }}
      >
        <span className="material-symbols-outlined">thumb_up</span> Հավանել
      </button>
      <div>
        <span className="material-symbols-outlined">recommend</span>
        {elem.likecount}
      </div>
    </div>
  );
}
