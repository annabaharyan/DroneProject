import React, { useEffect, useState } from "react";
import getRemainTimeUntilFinish from "./changeFoo";
import TimeChanger from "./TimeChanger";

export default function Timer({ finish }) {
  const remainTime = {
    day: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };
  const [time, setTime] = useState(remainTime);

  useEffect(() => {
    let myInt = setInterval(() => {
      updadateRemainTime(finish);
    }, 1000);
    return () => clearInterval(myInt);
  }, [finish]);
  const updadateRemainTime = (finish) => {
    setTime(getRemainTimeUntilFinish(finish));
  };
  return (
    <div className="timerPart">
      <h2>Ակցիայի ավարտին մնաց</h2>
      <TimeChanger {...time} />
    </div>
  );
}
