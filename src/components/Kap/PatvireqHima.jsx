import React, { useState } from "react";
import Patver from "../Patver/Patver";

export default function PatvireqHima({ remaincount, changeCount }) {
  const [err, seterr] = useState("");
  const [val, setVal] = useState("");
  const telNumber = { code: "+374", fullnumber: val };
  function emptyNum() {
    console.log(val.length);
    if (val.length <= 0) {
      seterr("Պարտադիր դաշտ");
    } else if (isNaN(val)) {
      seterr("Միայն թվեր գրեք");
      setVal("");
    } else {
      changeCount();
      seterr("");
      setVal("");
    }
  }
  return (
    <div className="callContainer">
      <h2>Պատվիրեք հիմա, ստացեք պատվերը 24 ժամում</h2>
      <label htmlFor="call" className="label">
        Գրեք ձեր հեռախոսահամարը
      </label>
      <div className="inp">
        <span>{telNumber.code}</span>
        <input
          type="tel"
          id="call"
          value={val}
          s
          onChange={(e) => {
            setVal(e.target.value);
            seterr("");
          }}
        />
      </div>
      <p>{err}</p>

      <Patver remaincount={remaincount} emptyNum={emptyNum} />
    </div>
  );
}
