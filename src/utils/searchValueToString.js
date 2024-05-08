export const searchValueToString = (searchValue, record, dataIndex) => {
  return Object.values(record[dataIndex]).find((val) => {
    return val.toString().toLowerCase().includes(searchValue.toLowerCase());
  });
};
