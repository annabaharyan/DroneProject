import React from "react";

export default function Ul({ text, bnutagir }) {
  return (
    <div className="ulComponent">
      <h3>{text}</h3>
      <ul className="myUl">
        {bnutagir.map((elem, index) => (
          <li key={index} className="list-item">
            <span className="material-symbols-outlined">done</span>
            <p>{elem}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
