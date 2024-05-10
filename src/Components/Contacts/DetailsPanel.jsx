import React from 'react';
import './DetailsPanel.scss';
import clientIcon from '../../assets/Common/clientIcon.svg';
import gridIcon from '../../assets/Common/gridIcon.svg';
import phoneIcon from '../../assets/Common/phoneIcon.svg';
import mailIcon from '../../assets/Common/mailIcon.svg';

const DetailsPanel = () => {
  return (
    <div className="mainDetailsPanelWrapper">
      <div className="sectionWrapper">
        <div className="sectionOne">
          <img src={clientIcon} alt="clientIcon" />
        </div>
        <div className="sectionTwo">
          <div>
            <span>Name</span>
            <span>James Smith</span>
          </div>
          <div style={{ gap: '25px' }}>
            <span>Role</span>
            <span>Client</span>
          </div>
        </div>
        <div className="sectionThree">
          <div>
            <span>Address</span>
            <span>123 High Street, London, W1A 1AA, United Kingdom</span>
          </div>
          <div style={{ gap: '25px' }}>
            <span>Status</span>
            <span>Active</span>
          </div>
        </div>
      </div>
      <div className="sectionFour">
        <img src={phoneIcon} alt="phoneIcon" />
        <img src={mailIcon} alt="mailIcon" />
        <img src={gridIcon} alt="gridIcon" />
      </div>
    </div>
  );
};

export { DetailsPanel };
