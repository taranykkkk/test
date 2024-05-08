export const searchValueToString = (searchValue, recordValue) => {
  return Object.values(recordValue).find((val) => {
    return val.toString().toLowerCase().includes(searchValue.toLowerCase());
  });
};
