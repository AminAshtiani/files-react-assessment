import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import isBetween from 'dayjs/plugin/isBetween';
import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(calendar);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);

export { dayjs };
