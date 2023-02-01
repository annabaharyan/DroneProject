import React, { useState } from "react";
import CommentUser from "./CommentUser";

import AddNewComment from "./AddNewComment";
export default function Comment() {
  const [coms, setComs] = useState([]);

  function clickLike() {
    setComs([...coms]);
  }

  return (
    <div className="com-container">
      <h2
        className={coms.length <= 0 ?"coms hidden":"coms"}
        
      >
        Մեկնաբանություններ
      </h2>
      <CommentUser comments={coms} clickLike={clickLike} />
      <AddNewComment coms={coms} setcoms={(elem) => setComs([...coms, elem])} />
    </div>
  );
}
