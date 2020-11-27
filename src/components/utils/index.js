export const getTimer = (time) => {
  return (
    parseInt(time[0]) * 60 * 60 + parseInt(time[1]) * 60 + parseInt(time[2])
  );
};
export const getTime = (timer) => {
  return ` ${parseInt(parseInt(timer / 60) / 60) < 10 ? "0" : ""}${parseInt(
    parseInt(timer / 60) / 60
  )} : ${parseInt(timer / 60) % 60 < 10 ? "0" : ""}${
    parseInt(timer / 60) % 60
  } : ${timer % 60 < 10 ? "0" : ""}${timer % 60}`;
};
