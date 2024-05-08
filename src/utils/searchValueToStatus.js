export const searchValueToStatus = (searchValue, record) => {
  return record.status.includes(searchValue);
};
