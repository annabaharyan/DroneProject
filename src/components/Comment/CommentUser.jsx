import React from "react";
import fb from "../../images/fb.webp";
import LikeComment from "./LikeComment";
export default function CommentUser({ comments, clickLike }) {
  return (
    <div style={{width:"100%"}}>
      {comments.length > 0 &&
        comments.map((elem) => (
          <div key={elem.id} className="eachCom">
            <div className="userWrapper">
              <div className="user">
                <img src={elem.imgSrc} alt="user" />
                <span>{elem.name}</span>
              </div>
              <img src={fb} alt="fb" className="iconFb" />
            </div>
            <p className="compText">{elem.comment}</p>
            <hr />
            <LikeComment elem={elem} clickLike={clickLike} />
          </div>
        ))}
    </div>
  );
}
