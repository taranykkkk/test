import { Interval, DateTime } from 'luxon';

export const searchDatePeriod = (value, record) => {
  const currentDate = DateTime.fromISO(record.created_at, { zone: 'utc' });
  const startDate = DateTime.fromFormat(value[0], 'yyyy-MM-dd');
  const endDate = DateTime.fromFormat(value[1], 'yyyy-MM-dd');

  const interval = Interval.fromDateTimes(startDate, endDate);

  const isDateWithinInterval = interval.contains(currentDate);
  return isDateWithinInterval;
};
