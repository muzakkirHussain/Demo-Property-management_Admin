import React, { useEffect, useState } from 'react';
import { Heading } from '../../Components/Heading';
import { FilterComponent } from '../../Components/FilterComponent';
import { Table } from '../../Components/ReactTable';
import clientIcon from '../../assets/Common/clientIcon.svg';
import landlordIcon from '../../assets/Common/landlordIcon.svg';
import tenantIcon from '../../assets/Common/tenantIcon.svg';
import supIcon from '../../assets/Common/supIcon.svg';
import clientIconUnsel from '../../assets/Common/clientIconUnsel.svg';
import landlordIconUnsel from '../../assets/Common/landlordIconUnsel.svg';
import tenantIconUnsel from '../../assets/Common/tenantIconUnsel.svg';
import supIconUnsel from '../../assets/Common/supIconUnsel.svg';
import locationIcon from '../../assets/Common/locationIcon.svg';
import './Styles/MyContacts.scss';
import { useNavigate } from 'react-router-dom';

function MyContacts() {
  const role = 'admin';

  const ADMINpaths = [
    { title: 'Contacts', url: '/contacts' },
    { title: 'My Contacts', url: '' },
  ];
  const [selectedView, setSelectedView] = useState('gridView');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [userSelected, setUserSelected] = useState('');
  const navigate = useNavigate();

  const [filerList, setFilerList] = useState([
    { title: 'All', unSelectedIcon: '', selectedIcon: '' },
    {
      title: 'Landlord',
      unSelectedIcon: landlordIcon,
      selectedIcon: landlordIconUnsel,
    },
    {
      title: 'Tenant',
      unSelectedIcon: tenantIcon,
      selectedIcon: tenantIconUnsel,
    },
    { title: 'Supplier', unSelectedIcon: supIcon, selectedIcon: supIconUnsel },
  ]);

  const columns = [
    {
      Header: 'Name',
      accessor: 'Point of Contact',
      disableSortBy: true,
    },
    {
      Header: 'Role',
      accessor: 'Primary Phone',
    },

    {
      Header: 'Address',
      accessor: 'Address',
    },
  ];

  useEffect(() => {
    if (
      role === 'admin' &&
      !filerList.some((item) => item.title === 'Client')
    ) {
      setFilerList((prevList) => [
        ...prevList.slice(0, 1),
        {
          title: 'Client',
          unSelectedIcon: clientIcon,
          selectedIcon: clientIconUnsel,
        },
        ...prevList.slice(1),
      ]);
    }
  }, [role]);

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

  const cardData = [
    {
      id: 1,
      name: 'James Smith',
      address: `123 High Street, London, W1A 1AA, 
United Kingdom`,
      role: 'Client',
    },
    {
      id: 2,
      name: 'Emily Johnson',
      address: `7 Primrose Street, London, E1 6BG 
United Kingdom`,
      role: 'Landlord',
    },
    ,
    {
      id: 4,
      name: 'Daniel Williams',
      address: `45 High Street, Edinburgh, EH1 1TB 
United Kingdom`,
      role: 'Tenant',
    },
  ];
  const handleRowClick = (data) => {
    console.log('Click detected', data);
    // setIsOpen(true);
  };
  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={['search']} />
      <FilterComponent
        selectedView={selectedView}
        addons={['view']}
        setSelectedView={setSelectedView}
        filerList={filerList}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
        buttonFunction={() => {
          navigate('/contacts/create-contact');
        }}
      />
      <div style={{ height: '81%', overflowY: 'auto', borderRadius: '15px' }}>
        <div
          className={`myContactsBody ${selectedView === 'gridView' && 'flexStart'} `}
          style={{
            height: selectedView !== 'gridView' && '100%',
            background: selectedView !== 'gridView' && 'white',
          }}
        >
          {selectedView === 'listView' && (
            <Table
              columns={columns}
              data={data}
              handleRowClick={handleRowClick}
            />
          )}
          {selectedView === 'gridView' &&
            cardData.map((item, index) => (
              <div
                key={index}
                className="card"
                onClick={() => {
                  setUserSelected(item);
                  console.log(userSelected);
                  navigate(`/contacts/${userSelected.id}`);
                }}
              >
                <div className="cardTopSection">
                  <img src={clientIcon} alt="icon" />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    gap: '15px',
                  }}
                >
                  <div className="cardBody">
                    <p>{item.name}</p>
                  </div>
                  <div className="cardFooter">
                    <p>
                      <img src={locationIcon} alt="location" />
                      {item.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export { MyContacts };
