import dayjs from "dayjs";
export default function getRemainTimeUntilFinish(finish) {
  const myRemainTime = dayjs(finish);
  const nowTime = dayjs();
if(myRemainTime.isBefore(nowTime)){
    return {
        day: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
}}
  return {
    day: forDays(nowTime, myRemainTime),
    hours: forHours(nowTime, myRemainTime),
    minutes: forMinutes(nowTime, myRemainTime),
    seconds: forSeconds(nowTime, myRemainTime),
  };
}
function forSeconds(nowTime, myRemainTime) {
  return showWithZero(myRemainTime.diff(nowTime, "seconds") % 60);
}
function forMinutes(nowTime, myRemainTime) {
  return showWithZero(myRemainTime.diff(nowTime, "minutes") % 60);
}
function forHours(nowTime, myRemainTime) {
  return showWithZero(myRemainTime.diff(nowTime, "hours") % 24);
}
function forDays(nowTime, myRemainTime) {
  return showWithZero(myRemainTime.diff(nowTime, "day"));
}

function showWithZero(num) {
  let myNum = num.toString();
  if (myNum.length < 2) {
    return "0" + myNum;
  }
  return myNum;
}
