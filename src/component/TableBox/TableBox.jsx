import { Table } from 'antd';
import tableData from '../../data.json';
import { useState } from 'react';
// import { columns } from './columns';

import { Button, Space, Tag } from 'antd';
import { DateTime } from 'luxon';
import { colorTags } from './columns';

function TableBox() {
  const [dataSource, setDataSource] = useState(tableData.data);

  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (obj) => {
        return (
          <>
            <span>
              <strong style={{ color: '#4096FF' }}>City:</strong> {obj.city}
            </span>
            <br />
            <span>
              <strong style={{ color: '#4096FF' }}>Street:</strong> {obj.street}
            </span>
          </>
        );
      },
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
      render: (obj) => {
        return (
          <>
            <span>
              <strong style={{ color: '#4096FF' }}>Name:</strong> {obj.name}
            </span>
            <br />
            <span>
              <strong style={{ color: '#4096FF' }}>Phone:</strong>{' '}
              {obj.phoneNumber}
            </span>
          </>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        switch (status) {
          case 'declined': {
            return <span style={{ color: 'red' }}>{status.toUpperCase()}</span>;
          }
          case 'done': {
            return (
              <span style={{ color: 'green' }}>{status.toUpperCase()}</span>
            );
          }
          case 'wait_approvement': {
            return (
              <span style={{ color: '#dddd02' }}>
                {status.replace('_', ' ').toUpperCase()}
              </span>
            );
          }
          case 'accepted': {
            return (
              <span style={{ color: '#03fc03' }}>{status.toUpperCase()}</span>
            );
          }
        }
      },
    },
    {
      title: 'Departments',
      key: 'departments',
      dataIndex: 'departments',
      render: (departs) => {
        console.log(departs);
        return (
          <>
            {departs.map((depart, index) => {
              let colortest = colorTags(depart.name);
              console.log(colortest);
              return (
                <Tag color={colortest} key={index}>
                  {depart.name.toUpperCase()}
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
        <a href={url} target="blank">
          {url}
        </a>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'created_at',
      key: 'Created',
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
    const newData = dataSource.filter((item) => item.id !== id);
    setDataSource(newData);
  };
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.id}
    />
  );
}

export default TableBox;
