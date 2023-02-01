import React from "react";
import { hetadardz } from "../../myObjects";
export default function Zakaz() {
  return (
    <div className="ulComponent">
      <h2 style={{ textAlign: "center", fontSize: "20px" }}>Ինչպես պատվիրել</h2>
      <ul className="patverUl">
        {hetadardz.map((elem, ind) => (
          <li key={ind}>
            <div className="icon">
              <span className="material-symbols-outlined">{elem.iconName}</span>
            </div>
            <p>{elem.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
