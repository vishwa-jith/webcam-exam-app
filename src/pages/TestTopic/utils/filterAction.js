import * as filterType from "./filterTypes";
export const filterAction = (action) => {
  switch (action.type) {
    case filterType.NORMAL:
      return !!action.payload.end_time && action.payload.is_fraudulant;
    case filterType.FRAUDULANT:
      return action.payload.is_fraudulant;
    case filterType.COMPLETED:
      return !!action.payload.end_time;
    case filterType.RESUME:
      return !action.payload.end_time && !!action.payload.start_time;
    default:
      return true;
  }
};
export const filterNormal = (payload) => ({
  type: filterType.NORMAL,
  payload,
});
export const filterFraudulant = (payload) => ({
  type: filterType.FRAUDULANT,
  payload,
});
export const filterCompleted = (payload) => ({
  type: filterType.COMPLETED,
  payload,
});
export const filterResume = (payload) => ({
  type: filterType.RESUME,
  payload,
});
