import React, { useEffect, useState } from 'react';
import { Table } from '../../Components/ReactTable';
import { Button } from '../../Components/Button';
import { Heading } from '../../Components/Heading';
import AdministratorPopup from '../../Components/Popups/AdministratorPopup';
import './Styles/Tools.scss';
import { useAdminFetch } from '../../Context/queries';
// import useStore from "./Store/Store";
// import { useNavigate } from 'react-router-dom';

function Administrator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [editData, setEditData] = useState('');
  // const navigate = useNavigate();

  const fetchTableData = useAdminFetch({
    params: {
      role: selectedFilter,
    },
  });

  const columns = [
    {
      Header: 'Name',
      accessor: 'first_name',
      Cell: (row) => (
        <p>{row.row.original.first_name + row.row.original.last_name}</p>
      ),
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
    {
      Header: 'Status',
      accessor: 'Status',
      Cell: (row) => (
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '85px',
            padding: '5px 10px',
            borderRadius: '7px',
            backgroundColor: row.row.original.is_active ? '#A3EBC0' : '#FFD3CF',
          }}
        >
          {row.row.original.is_active ? 'Active' : 'Inactive'}
        </span>
      ),
    },
  ];

  const filters = [
    {
      label: 'All',
      count:
        fetchTableData?.data?.data?.admin_count +
        fetchTableData?.data?.data?.manager_count,
      background: '#F7F9FB',
      value: 'all',
    },
    {
      label: 'Super Admin',
      count: fetchTableData?.data?.data?.admin_count,
      background: '#BFE4FF',
      value: 'admin',
    },
    {
      label: 'Property Manager',
      count: fetchTableData?.data?.data?.manager_count,
      background: '#AC7AFF',
      value: 'manager',
    },
  ];
  const ADMINpaths = [
    { title: 'Tools', url: '/tools' },
    { title: 'Administration', url: '' },
  ];

  const handleRowClick = (e) => {
    setEditData(e);
    setIsOpen(true);
  };
  useEffect(() => {
    console.log(fetchTableData, 'oaisfdhhduj');

    console.log(fetchTableData?.data?.data?.data.manger_count, 'oaisfdhhduj');
  }, [fetchTableData]);
  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={['search']} />
      <div className="administratorSection">
        <span>Administrator</span>
        <Button
          title="Add Administration"
          active
          handleClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <div className="mainSectionBottom">
        <div style={{ width: '100%', height: '100%' }}>
          <Table
            columns={columns}
            data={fetchTableData?.data?.data.data || []}
            addons={['Filters']}
            filterList={filters}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
            handleRowClick={handleRowClick}
            // setSearchString={setSearchString}
          />
        </div>
      </div>
      <AdministratorPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editData={editData}
        setEditData={setEditData}
      />
    </div>
  );
}

export { Administrator };
