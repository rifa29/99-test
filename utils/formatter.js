import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

dayjs.extend(relativeTime);

export function formatDate(
  date,
  format = "DD/MM/YY HH:mm TZ",
  addDays = false
) {
  if (!date) {
    return "-";
  }

  if (format.includes("TZ")) {
    const offset = (-1 * new Date(date).getTimezoneOffset()) / 60;
    const timezoneIndex = `UTC${offset >= 0 ? `+${offset}` : offset}`;
    format = format.replace("TZ", timezoneIndex);
  }

  if (addDays) {
    return dayjs(date).add(addDays, "days").format(format);
  }

  return dayjs(date).format(format);
}

export function getFromNow(date) {
  return dayjs.unix(date).fromNow();
}
