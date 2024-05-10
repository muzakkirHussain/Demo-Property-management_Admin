import React, { useState } from 'react';
import { Table } from '../../Components/ReactTable';
import { Button } from '../../Components/Button';
import { Heading } from '../../Components/Heading';
import AdministratorPopup from '../../Components/Popups/AdministratorPopup';
import './Styles/Tools.scss';
import { CustomCheckBox } from '../../Components/CustomCheckBox';
import { MaintenanceCheckListPopup } from '../../Components/Popups/MaintenanceCheckListPopup';

const MaintenanceCheckList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Test',
      active: false,
    },
    {
      id: 2,
      name: 'Test',
      active: true,
    },
    {
      id: 3,
      name: 'Test',
      active: false,
    },
    {
      id: 4,
      name: 'Test',
      active: true,
    },
    {
      id: 5,
      name: 'Test',
      active: false,
    },
    {
      id: 6,
      name: 'Test',
      active: false,
    },
  ]);

  const columns = [
    {
      Header: 'Check List Name',
      accessor: 'name',
    },
    {
      Header: 'Active',
      accessor: 'active',
      Cell: ({ row }) => (
        <CustomCheckBox
          checked={row.original.active}
          onChange={() => handleCheckboxChange(row.original.id)}
        />
      ),
    },
  ];

  const handleCheckboxChange = (id) => {
    setData((prevData) => {
      return prevData.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            active: !row.active,
          };
        }
        return row;
      });
    });
  };

  const ADMINpaths = [
    { title: 'Tools', url: '/tools' },
    { title: 'Maintenance Check List', url: '' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={[]} />
      <div className="administratorSection">
        <span>Maintenance Check List</span>
        <Button
          title="Create CheckList"
          active={true}
          handleClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <div className="mainSectionBottom">
        <div style={{ width: '100%', height: '100%' }}>
          <Table columns={columns} data={data} />
        </div>
      </div>
      <MaintenanceCheckListPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export { MaintenanceCheckList };
