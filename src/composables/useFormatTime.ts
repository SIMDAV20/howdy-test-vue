import { DateTime } from "luxon";

const useFormatTime = () => {
  const formatDateTime = (dateTimeString: string) => {
    const dt = DateTime.fromISO(dateTimeString);
    return dt.toFormat("LLL d h:mma");
  };

  const getHourMinutes = (duration: number) => {
    let hours = Math.trunc(duration / 60);
    let minutes = Math.trunc(duration % 60);
    return `${hours}h${minutes}min`;
  };

  return {
    formatDateTime,
    getHourMinutes,
  };
};

export default useFormatTime;
