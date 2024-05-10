import React, { useState } from 'react';
import { Table } from '../../Components/ReactTable';
import { Heading } from '../../Components/Heading';
import './Styles/Tools.scss';
import { Button } from '../../Components/Button';
import { UnassignedClientsPopup } from '../../Components/Popups/UnassignedClientsPopup';

function UnassignedClients() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupDate, setPopupDate] = useState({});

  const handleRowClick = (data) => {
    console.log('Click detected', data);
    setPopupDate(data);
    setIsOpen(true);
  };
  const columns = [
    {
      Header: 'Point of Contact',
      accessor: 'Point of Contact',
      disableSortBy: true,
    },
    {
      Header: 'Company',
      accessor: 'Company',
    },
    {
      Header: 'Address',
      accessor: 'Address',
    },
    {
      Header: 'Action',
      accessor: 'Action',
      Cell: (row) => (
        <Button
          title="Assign"
          handleClick={() => {
            handleRowClick(row?.row.original);
          }}
          active
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
  const ADMINpaths = [
    { title: 'Tools', url: '/tools' },
    { title: 'Unassigned Clients', url: '' },
  ];

  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={['search']} />
      <div className="administratorSection">
        <span>Unassigned Clients</span>
      </div>
      <div className="mainSectionBottom">
        <div style={{ width: '100%', height: '100%' }}>
          <Table
            columns={columns}
            data={data}
            // handleRowClick={}
          />
        </div>
      </div>
      <UnassignedClientsPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={popupDate}
      />
    </div>
  );
}

export { UnassignedClients };
