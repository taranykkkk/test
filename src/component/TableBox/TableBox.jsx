import { Table } from 'antd';
import tableData from '../../data.json';
import { useState } from 'react';

import { Button, Space, Tag } from 'antd';
import { DateTime } from 'luxon';
import {
  STATUSES,
  STATUS_ACCEPTED,
  STATUS_DECLINED,
  STATUS_DONE,
  STATUS_WAIT_APPROVEMENT,
} from '../../constants/table_status';
import { COLORS } from '../../constants/table_tag_color';

import SearchBar from './SearchBar';
import { searchValueToString } from '../../utils/searchValueToString';
import { searchValueToStatus } from '../../utils/searchValueToStatus';
import PickerDate from './PickerDate';
import { searchDatePeriod } from '../../utils/searchDatePeriod';

const TABLE_SUB_ITEMS_COLOR = '#4096FF';

function TableBox() {
  const [dataSource, setDataSource] = useState(tableData.data);

  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filterDropdown: (props) => <SearchBar {...props} />,

      onFilter: (value, record) => searchValueToString(value, record.address),
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
      onFilter: (value, record) => searchValueToString(value, record.client),
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
      onFilter: (value, record) => searchValueToStatus(value, record.status),
      render: (status) => (
        <span style={{ color: STATUSES[status].color }}>
          {STATUSES[status].text}
        </span>
      ),
      filterMultiple: false,
      filters: [
        {
          text: STATUSES.done.text,
          value: STATUS_DONE,
        },
        {
          text: STATUSES.wait_approvement.text,
          value: STATUS_WAIT_APPROVEMENT,
        },
        {
          text: STATUSES.declined.text,
          value: STATUS_DECLINED,
        },
        {
          text: STATUSES.accepted.text,
          value: STATUS_ACCEPTED,
        },
      ],
    },
    {
      title: 'Departments',
      key: 'departments',
      dataIndex: 'departments',
      render: (departs) => (
        <>
          {departs.map((depart, index) => (
            <Tag color={COLORS[depart.name]?.color || 'blue'} key={index}>
              {COLORS[depart.name]?.text || depart.name}
            </Tag>
          ))}
        </>
      ),
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
      onFilter: (value, record) => searchDatePeriod(value, record.created_at),
      filterDropdown: (props) => <PickerDate {...props} />,
      render: (created_at) => {
        const dateTime = DateTime.fromISO(created_at);
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
