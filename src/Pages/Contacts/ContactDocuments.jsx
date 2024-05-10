import React, { useState } from 'react';
import './Styles/MyContacts.scss';
import { Button } from '../../Components/Button';
import pdfLogo from '../../assets/Common/pdfLogo.svg';
import DocumentArchivedPopUp from '../../Components/Popups/DocumentAchievePopUp';
import CreateFolderContactsPopup from '../../Components/Popups/CreateFolderContactsPopup';

const ContactDocuments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const data = [
    {
      title: 'Right to Rent',
      expiryDate: '29 / 02 / 2024',
      archive: '10',
    },
    {
      title: 'Bank Statement',
      expiryDate: '31 / 12 / 2024',
      archive: '10',
    },
    {
      title: 'Passport / ID',
      expiryDate: '13 / 09 / 2029',
      archive: '10',
    },
  ];
  return (
    <>
      <CreateFolderContactsPopup
        isOpen={isCreateOpen}
        setIsOpen={setIsCreateOpen}
      />
      <DocumentArchivedPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="ContactDocumentWrapper">
        <div className="createButtonDiv">
          <span>Documents</span>
          <Button
            title="Create Folder"
            active
            type="button"
            handleClick={(e) => {
              e.preventDefault();
              setIsCreateOpen(!isCreateOpen);
              // handleResendInvite.mutate();
            }}
          />
        </div>
        {data.map((items, index) => (
          <div className="ContactDocument" key={items.title}>
            <div className="leftSection">
              <img src={pdfLogo} alt="pdfLogo" />
              <span>{items.title}</span>
            </div>
            <div className="rightSection">
              <div>
                <span>Expiry Date</span>
                <span>{items.expiryDate}</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Archived<span>5</span>
              </button>
              {/* <Button
                title="Archived"
                active
                type="button"
                handleClick={(e) => {
                  e.preventDefault();
                  // handleResendInvite.mutate();
                }}
              /> */}
            </div>
            {/* <p></p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactDocuments;
