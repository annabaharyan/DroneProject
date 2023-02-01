import React, { useState } from "react";
import NewCom from "./NewCom";

export default function AddNewComment({ coms, setcoms }) {
  const [state, setstate] = useState(false);
  return (
    <div className="com-wrap">
      <button className="send-comment" onClick={() => setstate(true)}>
        Թողնել մեկնաբանություն
      </button>
      <div
        className={state ? "modal-wrapper" : null}
       
      >
        <NewCom
          setcoms={setcoms}
          coms={coms}
          setstate={(val) => setstate(val)}
          state={state}
        />
      </div>
    </div>
  );
}
