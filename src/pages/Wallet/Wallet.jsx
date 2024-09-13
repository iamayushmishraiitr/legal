import { Divider, Table } from 'antd'

const Wallet = () => {

  const dataName = [
    {
      name: "Total Scans",
      value: 100,
    },
    {
      name: "Number of Scans Used",
      value: 75,
    },
    {
      name: "Number of Scans Remaining",
      value: 25,
    }
  ]
  const dataSource = [
    {
      key: '1',
      date: '2024-09-04T12:30:00',
      planName: 'Basic Plan',
      amount: '50',
      address: '20',
    },
    {
      key: '2',
      date: '2024-09-03T14:45:00',
      planName: 'Standard Plan',
      amount: '100',
      address: '35',
    },
    {
      key: '3',
      date: '2024-09-02T16:00:00',
      planName: 'Premium Plan',
      amount: '200',
      address: '50',
    },
    {
      key: '4',
      date: '2024-09-01T10:15:00',
      planName: 'Basic Plan',
      amount: '50',
      address: '15',
    },
    {
      key: '5',
      date: '2024-08-31T09:20:00',
      planName: 'Standard Plan',
      amount: '100',
      address: '30',
    },
    {
      key: '6',
      date: '2024-08-30T18:50:00',
      planName: 'Premium Plan',
      amount: '200',
      address: '55',
    },
    {
      key: '7',
      date: '2024-08-29T08:40:00',
      planName: 'Basic Plan',
      amount: '50',
      address: '25',
    },
    {
      key: '8',
      date: '2024-08-28T17:35:00',
      planName: 'Standard Plan',
      amount: '100',
      address: '40',
    },
    {
      key: '9',
      date: '2024-08-27T15:10:00',
      planName: 'Premium Plan',
      amount: '200',
      address: '60',
    },
    {
      key: '10',
      date: '2024-08-26T11:25:00',
      planName: 'Basic Plan',
      amount: '50',
      address: '10',
    }
  ];

  const columns = [
    {
      title: "Date & Time",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      render: (text) => {
        if (text) {
          const date = new Date(text);
          const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).replace(/\//g, "-");

          const formattedTime = date
            .toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            .toUpperCase();

          return (
            <>
              {formattedDate} <br />
              {formattedTime}
            </>
          );
        }
        return null;
      }
    },
    {
      title: 'Plan Name',
      dataIndex: 'planName',
      key: 'planName',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Number of Scans',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (

    <div>
      <div className="text-gray-900 font-medium text-base">
        Wallet
      </div>
      <Divider />
      <div className='flex flex-col gap-[10vh]'>
      <div className='flex flex-row justify-center border-2 h-[140px] w-full'>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Total Scans</h1>
    <h1 className='text-xl text-blue-600'>100</h1>
  </div>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Number of Scans Used</h1>
    <h1 className='text-xl text-blue-600'>75</h1>
  </div>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Number of Scans Remaining</h1>
    <h1 className='text-xl text-blue-600'>25</h1>
  </div>
</div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 7 }}
        />
      </div>
    </div>
  )
}

export default Wallet