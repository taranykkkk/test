import { Button, Space, Tag } from 'antd';
import { DateTime } from 'luxon';

export const columns = [
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
          return <span style={{ color: 'green' }}>{status.toUpperCase()}</span>;
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
    render: (departs) => (
      <>
        {departs.map((depart, index) => {
          let color = depart.name.length > 5 ? 'geekblue' : 'green';
          if (depart.name === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={index}>
              {depart.name.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
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
    render: (_) => (
      <Space size="middle">
        <Button>Delete</Button>
      </Space>
    ),
  },
];

export const colorTags = (tagName) => {
  let color = 'white';

  switch (tagName) {
    case 'Automotive': {
      color = 'orange';
      break;
    }
    case 'Games': {
      color = 'purple';
      break;
    }
    case 'Music': {
      color = 'Orchid';
    }
    case 'Health': {
      color = 'Lime';
      break;
    }
    case 'Toys': {
      color = 'crimson';
      break;
    }
    case 'Beauty': {
      color = 'tomato';
      break;
    }
    case 'Garden': {
      color = 'olive';
      break;
    }
    case 'Industrial': {
      color = 'teal';
      break;
    }
    case 'Jewelery': {
      color = 'gold';
      break;
    }
    case 'Tools': {
      color = 'red';
      break;
    }
    case 'Grocery': {
      color = 'maroon';
      break;
    }
    case 'Books': {
      color = 'chocolate';
      break;
    }
    case 'Computers': {
      color = 'indigo';
      break;
    }
    case 'Clothing': {
      color = 'tan';
      break;
    }
    case 'Electronics': {
      color = 'plum';
      break;
    }
    case 'Kids': {
      color = 'forestgreen';
    }
    case 'Movies': {
      color = 'steelblue';
      break;
    }
    case 'Baby': {
      color = 'slategrey';
      break;
    }
  }
  return color;
};
