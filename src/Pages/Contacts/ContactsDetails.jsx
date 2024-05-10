import React, { useState } from 'react';
import { Heading } from '../../Components/Heading';
import { DetailsPanel } from '../../Components/Contacts/DetailsPanel';
import { FilterComponent } from '../../Components/FilterComponent';
import { ContactsTemplate } from '../../Components/Contacts/ContactsTemplate';
import ClientTemplate from './ClientTemplate';
import ContactDocuments from './ContactDocuments';
import ContactTenancies from './ContactTenancies';
import ContactProperties from './ContactProperties';
import ContactsTransactions from './ContactsTransactions';

const ContactsDetails = () => {
  const ADMINpaths = [
    { title: 'Contacts', url: '/contacts' },
    { title: 'Profile', url: '' },
  ];
  const [selectedFilter, setSelectedFilter] = useState('Contact');
  // const filerList = [
  //   'Contact',
  //   'Timeline',
  //   'Documents',
  //   'Tenancies',
  //   'Properties',
  //   // 'Tenancies',
  // ];
  const filerList = [
    { title: 'Contact', unSelectedIcon: '', selectedIcon: '' },
    { title: 'Timeline', unSelectedIcon: '', selectedIcon: '' },
    { title: 'Documents', unSelectedIcon: '', selectedIcon: '' },
    { title: 'Tenancies', unSelectedIcon: '', selectedIcon: '' },
    { title: 'Properties', unSelectedIcon: '', selectedIcon: '' },
    { title: 'Transactions', unSelectedIcon: '', selectedIcon: '' },
  ];

  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={['search']} />
      <DetailsPanel />
      <FilterComponent
        filerList={filerList}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <div
        className="contactEditWrapper"
        style={{
          overflowY: 'auto',
          background: 'white',
          // height: '58vh',
          height: '63%',

          padding: '15px',
          borderRadius: '15px',
        }}
      >
        {/* <ContactsTemplate /> */}
        {selectedFilter === 'Contact' && <ClientTemplate />}
        {selectedFilter === 'Documents' && <ContactDocuments />}
        {selectedFilter === 'Tenancies' && <ContactTenancies />}
        {selectedFilter === 'Properties' && <ContactProperties />}
        {selectedFilter === 'Transactions' && <ContactsTransactions />}

        {/* <div className="topSection">hello</div> */}
        {/* <div></div> */}
      </div>
    </div>
  );
};

export { ContactsDetails };
