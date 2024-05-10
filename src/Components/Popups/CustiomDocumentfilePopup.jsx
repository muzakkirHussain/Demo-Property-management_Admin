import React, { useCallback, useState } from 'react';
import '../../Styles/Components/Popup/DocumentArchivedPopUp.scss';
import folderIcon from '../../assets/Common/folder.svg';
import pdfIcon from '../../assets/Common/pdfLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Dropzone from 'react-dropzone';

const CustiomDocumentfilePopup = (props) => {
  const { isOpen, setIsOpen, data, setData } = props;
  const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
  };

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
              height: '62vh',
              overflowY: 'auto',
              padding: '0 20px 20px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div className="popup-content" style={{ width: '100%' }}>
              <div
                className="popup_top"
                style={{
                  position: 'sticky',
                  top: '0',
                  background: 'white',
                  zIndex: '1000',
                  padding: '20px 0 0 0',
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
              <div
                className="popup_Body"
                style={{ height: '365px', overflowY: 'auto' }}
              >
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
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section
                  className="wfp--dropzone"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100px',
                    borderTop: '1px dashed',
                    borderTopStyle: 'dashed',
                    borderTopWidth: '2px',
                  }}
                >
                  <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
                    <input {...getInputProps()} />
                    <div>
                      <span style={{ fontSize: '16px' }}>
                        Drag and drop some file to attach or{' '}
                      </span>
                      <span
                        style={{
                          color: '#817EFF',
                          fontWeight: '500',
                          fontSize: '16px',
                        }}
                      >
                        Browse
                      </span>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </>
      )}
    </div>
  );
};

export default CustiomDocumentfilePopup;
