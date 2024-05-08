import { Interval, DateTime } from 'luxon';

export const searchDatePeriod = (filterValue, recordValue) => {
  const currentDate = DateTime.fromISO(recordValue);
  const startDate = DateTime.fromFormat(filterValue[0], 'yyyy-MM-dd');
  const endDate = DateTime.fromFormat(filterValue[1], 'yyyy-MM-dd');

  const interval = Interval.fromDateTimes(startDate, endDate);

  const isDateWithinInterval = interval.contains(currentDate);
  return isDateWithinInterval;
};
