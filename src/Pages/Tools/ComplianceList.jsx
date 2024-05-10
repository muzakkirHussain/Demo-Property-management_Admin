import React, { useState } from 'react';
import { toast } from 'sonner';
import { Table } from '../../Components/ReactTable';
import { Heading } from '../../Components/Heading';
import './Styles/Tools.scss';
import { CustomCheckBox } from '../../Components/CustomCheckBox';
import { ComplianceListPopup } from '../../Components/Popups/ComplianceListPopup';

function ComplianceList() {
  const [Data, setData] = useState([]);
  const handleCheckboxChange = (id) => {
    setData((prevData) =>
      prevData.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            active: !row.active,
          };
        }
        return row;
      })
    );
  };
  const columns = [
    {
      Header: 'Edit',
      accessor: 'edit',
      disableSortBy: true,
      Cell: () => (
        <p
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Edit
        </p>
      ),
    },
    {
      Header: 'Active',
      accessor: 'active',
      disableSortBy: true,
      Cell: ({ row }) => (
        <CustomCheckBox
          checked={row.original.active}
          onChange={() => handleCheckboxChange(row.original.id)}
        />
      ),
    },
    {
      Header: 'Compliance Name',
      accessor: 'complianceName',
      disableSortBy: true,
    },
    {
      Header: 'Mandatory',
      accessor: 'mandatory',
      disableSortBy: true,

      Cell: ({ row }) => (
        <CustomCheckBox
          checked={row.original.mandatory}
          onChange={() => handleCheckboxChange(row.original.id)}
        />
      ),
    },
    {
      Header: 'Remainder Days',
      accessor: 'remainderDays',
      disableSortBy: true,
    },
    {
      Header: 'Tenant Access',
      accessor: 'tenantAccess',
      disableSortBy: true,
    },
    {
      Header: 'Display Order',
      accessor: 'displayOrder',
      disableSortBy: true,

      //   noRowClick: true,
      Cell: ({ row }) => (
        <input
          type="number"
          value={row.original.displayOrder}
          style={{ width: '40px' }}
        />
      ),
    },
    {
      Header: 'Compliance Type',
      accessor: 'complianceType',
      disableSortBy: true,
      noRowClick: true,
    },
  ];

  const data = [
    {
      id: 1,
      active: true,
      complianceName: 'Checklist 1',
      mandatory: false,
      remainderDays: 30,
      tenantAccess: true,
      displayOrder: 1,
      complianceType: 'Type A',
    },
    {
      id: 2,
      active: false,
      complianceName: 'Checklist 2',
      mandatory: true,
      remainderDays: 15,
      tenantAccess: false,
      displayOrder: 2,
      complianceType: 'Type B',
    },
    {
      id: 3,
      active: true,
      complianceName: 'Checklist 3',
      mandatory: true,
      remainderDays: 7,
      tenantAccess: true,
      displayOrder: 3,
      complianceType: 'Type C',
    },
  ];
  const ADMINpaths = [
    { title: 'Tools', url: '/tools' },
    { title: 'Complacence', url: '' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mainSection">
      <button
        onClick={() => toast.success('Event has been created')}
        type="button"
      >
        Give me a toast
      </button>
      <Heading paths={ADMINpaths} addons={['search']} />
      <div className="administratorSection">
        <span>Complacence</span>
      </div>
      <div className="mainSectionBottom">
        <div style={{ width: '100%', height: '100%' }}>
          <Table
            columns={columns}
            data={data}
            draggable
            // handleRowClick={handleRowClick}
          />
        </div>
      </div>
      <ComplianceListPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export { ComplianceList };
