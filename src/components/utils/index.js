export const getTimer = (time) => {
  return (
    parseInt(time[0]) * 60 * 60 + parseInt(time[1]) * 60 + parseInt(time[2])
  );
};
export const getTime = (timer) => {
  return ` ${parseInt(parseInt(timer / 60) / 60) < 10 ? "0" : ""}${parseInt(
    parseInt(timer / 60) / 60
  )}:${parseInt(timer / 60) % 60 < 10 ? "0" : ""}${parseInt(timer / 60) % 60}:${
    timer % 60 < 10 ? "0" : ""
  }${timer % 60}`;
};
export const secondsToHms = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay;
};
