import { DatePicker, Button } from 'antd';
const { RangePicker } = DatePicker;

const PickerDate = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
}) => {
  return (
    <>
      <RangePicker
        onChange={(_, dateString) => {
          setSelectedKeys([dateString]);
        }}
      />
      <Button onClick={confirm}>Submit</Button>
    </>
  );
};

export default PickerDate;
