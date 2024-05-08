import { useRef } from 'react';
import { Input, Space, Button } from 'antd';

const SearchBar = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  close,
}) => {
  const searchInput = useRef(null);

  return (
    <div
      style={{
        padding: 8,
      }}
      onKeyDown={(e) => e.stopPropagation()}>
      <Input
        ref={searchInput}
        value={`${selectedKeys[0] || ''}`}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        style={{
          marginBottom: 8,
          display: 'block',
        }}
      />

      <Space>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({
              closeDropdown: false,
            });
          }}>
          Filter
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}>
          close
        </Button>
      </Space>
    </div>
  );
};

export default SearchBar;
