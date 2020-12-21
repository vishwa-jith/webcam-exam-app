import * as filterType from "./filterTypes";
import { getTimer } from "../../../components/utils";
export const filterAction = (action) => {
  const { type, payload } = action;
  switch (type) {
    case filterType.FRAUDULANT:
      return payload.is_fraudulant;
    case filterType.COMPLETED:
      return !!payload.end_time && !payload.is_fraudulant;
    case filterType.RESUME:
      return !payload.end_time && !!payload.start_time;
    case filterType.LIVE:
      return (
        getTimer(payload.test_start_time) <=
          getTimer(new Date().toLocaleTimeString().split(":")) &&
        getTimer(new Date().toLocaleTimeString().split(":")) <=
          getTimer(payload.test_start_time) + parseInt(payload.duration_in_min)
      );
    default:
      return true;
  }
};
