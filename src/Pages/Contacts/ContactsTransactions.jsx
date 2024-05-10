import React from 'react';
import './Styles/MyContacts.scss';
import { Button } from '../../Components/Button';
import search from '../../assets/Tools/searchIcon.svg';
import cashIcon from '../../assets/Common/cashIcon.svg';
import { Table } from '../../Components/ReactTable';

const ContactsTransactions = () => {
  const columns = [
    {
      Header: 'Date',
      accessor: 'Image',
      disableSortBy: true,
    },
    {
      Header: 'Description',
      accessor: 'Description',
    },
    {
      Header: 'Debit IN',
      accessor: 'Market',
    },
    {
      Header: 'Credit Out',
      accessor: '',
    },
    {
      Header: 'Balance',
      accessor: '',
    },
    {
      Header: 'Type',
      accessor: '',
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
    <>
      <div className="ContactsTransactionsWrapper">
        <div className="createButtonDiv">
          <div className="rightSection">
            <div className="innerLeftSection">
              <span>Account Transactions</span>
              <div className="search">
                <img src={search} alt="search" />
                <input
                  type="text"
                  placeholder="Search....."
                  onChange={(e) => {
                    // setSearch(e.target.value);
                  }}
                  style={{ border: 'none' }}
                />
              </div>
            </div>
            <div className="innerRightSection">
              <div className="balanceSection">
                <span>Account balance</span>
                <span>£ 4,550</span>
              </div>
              <div className="imageSection">
                <img src={cashIcon} alt="cashIcon" />
              </div>
            </div>
          </div>

          <Button
            title="Add Receipt"
            active
            type="button"
            handleClick={(e) => {
              e.preventDefault();
              // handleResendInvite.mutate();
            }}
          />
        </div>
        <Table columns={columns} data={data} handleRowClick={handleRowClick} />
      </div>
    </>
  );
};

export default ContactsTransactions;
