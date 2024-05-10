import React, { useState } from 'react';
import { CustomSelect } from '../../Components/CustomSelect';
import './Styles/TenantTemplate.scss';
import { CustomCheckBox } from '../../Components/CustomCheckBox';
import { Button } from '../../Components/Button';
import ContactsSection from './ContactsSection';
import AddressSection from './AddressSection';
const LandlordTemplate = () => {
  const [data, setData] = useState({
    email: '',
    title: '',
    telephone: '',
  });
  const [secondary, setSecondary] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 'Home', label: 'home' },
    { value: 'Mob', label: 'Mob' },
    { value: 'Wrk', label: 'Wrk' },
    { value: 'Bus', label: 'Bus' },
  ]);

  const handleChange = (e) => {
    setSelectedOption(e);
    setFormData({
      ...formData,
      type: e.value,
    });
  };
  return (
    <div className="TenantTemplateWrapper">
      <div className="submitButtonDiv">
        <Button title="Create" active={true} handleClick={() => {}} />
      </div>

      <ContactsSection
        data={data}
        setData={setData}
        secondaryCheck={secondary}
        setSecondaryCheck={setSecondary}
      />
      <AddressSection data={data} setData={setData} />

      <div style={{ width: '100%' }}>
        <>
          <p className="title">Contact Notes</p>
          <div style={{ width: '100%' }}>
            <div className="contactDetailsDiv">
              <div className="leftSection">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <label htmlFor="client">Client</label>
                  <div style={{ width: '100%' }}>
                    <CustomSelect
                      name={'typeTemplate'}
                      selectedOption={selectedOption}
                      handleSelectChange={handleChange}
                      options={options}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <label htmlFor="contactNotes">Contact Notes</label>
                  <input
                    value={data.contactNotes}
                    onChange={(e) =>
                      setData({ ...data, contactNotes: e.target.value })
                    }
                    name={'contactNotes'}
                    //   style={{ width: '79.5%' }}
                  />
                </div>
              </div>
              <div className="leftSection">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <label htmlFor="payment">Payment</label>
                  <input
                    value={data.payment}
                    onChange={(e) =>
                      setData({ ...data, payment: e.target.value })
                    }
                    name={'payment'}
                    //   style={{ width: '79.5%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
        <p style={{ borderBottom: '1px solid', margin: '20px 0' }} />
      </div>
    </div>
  );
};

export default LandlordTemplate;
