import React from "react";

export default function TimeChanger({ day, hours, minutes, seconds }) {
  return (
    <div className="time-remain">
      <div>
        <div className="time">{day}</div>
        <div>օր</div>
      </div>
      :
      <div>
        <div className="time">{hours}</div>
        <div>ժամ</div>
      </div>
      :
      <div>
        <div className="time">{minutes}</div>
        <div>րոպե</div>
      </div>
      :
      <div>
        <div className="time">{seconds}</div>
        <div>վայրկյան</div>
      </div>
    </div>
  );
}
