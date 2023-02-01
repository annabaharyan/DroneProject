import React from "react";
import { Link } from "react-scroll";
export default function Patver({ remaincount, emptyNum }) {

  return (
    <div className="addTocart">
      <button className="buy" onClick={()=>emptyNum()}>
        <Link
          activeClass="active"
          to="call"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Պատվիրել զեղչով
        </Link>
      </button>
      <p>
        Մնաց <span>{remaincount}</span> հատ
      </p>
    </div>
  );
}
