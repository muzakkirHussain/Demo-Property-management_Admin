import React, { useCallback, useState } from 'react';
import '../../Styles/Components/Popup/DocumentArchivedPopUp.scss';
import folderIcon from '../../assets/Common/folder.svg';
import pdfIcon from '../../assets/Common/pdfLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

const DocumentArchivedPopUp = (props) => {
  const { isOpen, setIsOpen, data, setData } = props;
  const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
  };
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div
            className="popup"
            style={{
              width: '51%',
              maxWidth: '891px',
              height: '50vh',
              overflowY: 'auto',
              padding: '0 20px 20px 20px',
            }}
          >
            <div className="popup-content">
              <div
                className="popup_top"
                style={{
                  position: 'sticky',
                  top: '0',
                  background: 'white',
                  zIndex: '1000',
                }}
              >
                <div></div>
                <h2>Archived -</h2>
                <span
                  onClick={() => {
                    handleClose();
                  }}
                >
                  x
                </span>
              </div>
              <div className="popup_Body">
                <div className="documentArchivedPopUpBody" onClick={() => {}}>
                  <img className="pdfIcon" src={pdfIcon} alt="pdfIcon" />
                  <img className="folderIcon" src={folderIcon} alt="" />
                  <div className="body">
                    <p>Right to rent</p>
                    <span>Exp. </span>
                    <span>29/02/2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DocumentArchivedPopUp;
