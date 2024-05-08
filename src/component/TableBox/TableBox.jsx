import { Input, Table } from 'antd';
import tableData from '../../data.json';
import { useRef, useState } from 'react';

import { Button, Space, Tag } from 'antd';
import { DateTime } from 'luxon';
import { STATUSES } from '../../constants/table_status';
import { COLORS } from '../../constants/table_tag_color';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import SearchBar from './SearchBar';
import { searchValueToString } from '../../utils/searchValueToString';
import { searchValueToStatus } from '../../utils/searchValueToStatus';
import PickerDate from './PickerDate';
import { searchDatePeriod } from '../../utils/searchDatePeriod';

const TABLE_SUB_ITEMS_COLOR = '#4096FF';

function TableBox() {
  const [dataSource, setDataSource] = useState(tableData.data);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filterDropdown: (props) => <SearchBar {...props} />,

      onFilter: (value, record) =>
        searchValueToString(value, record, 'address'),
      render: ({ city, street }) => {
        return (
          <>
            <span>
              <strong style={{ color: TABLE_SUB_ITEMS_COLOR }}>City:</strong>{' '}
              {city}
            </span>
            <br />
            <span>
              <strong style={{ color: TABLE_SUB_ITEMS_COLOR }}>Street:</strong>{' '}
              {street}
            </span>
          </>
        );
      },
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
      filterDropdown: (props) => <SearchBar {...props} />,
      onFilter: (value, record) => searchValueToString(value, record, 'client'),
      render: ({ name, phoneNumber }) => {
        return (
          <>
            <span>
              <strong style={{ color: TABLE_SUB_ITEMS_COLOR }}>Name:</strong>{' '}
              {name}
            </span>
            <br />
            <span>
              <strong style={{ color: TABLE_SUB_ITEMS_COLOR }}>Phone:</strong>{' '}
              {phoneNumber}
            </span>
          </>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      onFilter: (value, record) => searchValueToStatus(value, record),
      render: (status) => (
        <span style={{ color: STATUSES[status].color }}>
          {STATUSES[status].text}
        </span>
      ),
      filterMultiple: false,
      filters: [
        {
          text: 'Done',
          value: STATUSES.done.text,
        },
        {
          text: 'Wait approvement',
          value: STATUSES.wait_approvement.text,
        },
        {
          text: 'Declined',
          value: STATUSES.declined.text,
        },
        {
          text: 'Accepted',
          value: STATUSES.accepted.text,
        },
      ],
    },
    {
      title: 'Departments',
      key: 'departments',
      dataIndex: 'departments',
      render: (departs) => {
        return (
          <>
            {departs.map((depart, index) => {
              if (!COLORS[depart.name]) {
                return (
                  <Tag color={'blue'} key={index}>
                    {depart.name}
                  </Tag>
                );
              }
              return (
                <Tag color={COLORS[depart.name]?.color} key={index}>
                  {COLORS[depart.name]?.text}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: 'Url',
      key: 'url',
      dataIndex: 'track_url',
      render: (url) => (
        <a href={url} target="_blank">
          {url}
        </a>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'created_at',
      key: 'Created',
      onFilter: (value, record) => {
        return searchDatePeriod(value, record);
      },
      filterDropdown: (props) => <PickerDate {...props} />,
      render: (created_at) => {
        const dateTime = DateTime.fromISO(created_at, { zone: 'utc' });
        const formattedDateTime = dateTime.toFormat('yyyy-MM-dd HH:mm:ss');
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleClickDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const handleClickDelete = (id) => {
    setDataSource((prev) => prev.filter((item) => item.id !== id));
  };
  return <Table columns={columns} dataSource={dataSource} rowKey="id" />;
}

export default TableBox;
