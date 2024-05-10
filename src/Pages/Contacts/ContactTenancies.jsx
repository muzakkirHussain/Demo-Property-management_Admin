import React from 'react';
import { Table } from '../../Components/ReactTable';
import { Button } from '../../Components/Button';

const ContactTenancies = () => {
  const columns = [
    {
      Header: 'Tenant',
      accessor: 'Tenant',
    },
    {
      Header: 'Address',
      accessor: 'Address',
    },
    {
      Header: 'Start date',
      accessor: 'Start date',
    },
    {
      Header: 'End date',
      accessor: 'End date',
    },
    {
      Header: 'Rent',
      accessor: 'Rent',
    },
    {
      Header: 'Status',
      accessor: 'Status',
      Cell: () => (
        <Button
          title="Occupied"
          type="submit"
          styles={{
            background: 'rgba(163, 235, 192, 1)',
            border: 'none',
            color: 'black',
          }}
          handleClick={(e) => {
            e.preventDefault();
          }}
        />
      ),
    },
  ];

  const data = [
    {
      'Point of Contact': 'John Doe',
      'Primary Phone': '123-456-7890',
      'Primary Email': 'john@example.com',
      Address: '123 Main St, City, Country',
    },
    {
      'Point of Contact': 'Jane Smith',
      'Primary Phone': '987-654-3210',
      'Primary Email': 'jane@example.com',
      Address: '456 Elm St, City, Country',
    },
    {
      'Point of Contact': 'Alice Johnson',
      'Primary Phone': '111-222-3333',
      'Primary Email': 'alice@example.com',
      Address: '789 Oak St, City, Country',
    },
  ];
  const handleRowClick = (data) => {
    console.log('Click detected', data);
  };
  return (
    <div style={{ width: '100%' }}>
      <Table columns={columns} data={data} handleRowClick={handleRowClick} />
    </div>
  );
};

export default ContactTenancies;
