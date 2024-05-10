import React from 'react';
import { CustomSelect } from '../../Components/CustomSelect';

const AddressSection = (props) => {
  const { data, setData } = props;
  return (
    <div style={{ width: '100%' }}>
      <>
        <p className="title">Address</p>
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
                <label htmlFor="nameNO">Name/No</label>
                <input
                  value={data.nameNO}
                  onChange={(e) => setData({ ...data, nameNO: e.target.value })}
                  name={'nameNO'}
                  //   style={{ width: '79.5%' }}
                />
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
                <label htmlFor="Street">Street</label>
                <input
                  value={data.Street}
                  onChange={(e) => setData({ ...data, Street: e.target.value })}
                  name={'Street'}
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
                <label htmlFor="townCity">Town/City</label>
                <div style={{ width: '100%' }}>
                  {/* <CustomSelect
                    name={'typeTemplate'}
                    selectedOption={selectedOption}
                    handleSelectChange={handleChange}
                    options={options}
                  /> */}
                  <input
                    value={data.townCity}
                    onChange={(e) =>
                      setData({ ...data, townCity: e.target.value })
                    }
                    name={'townCity'}
                    placeholder="Town/City"
                    //   style={{ width: '79.5%' }}
                  />
                </div>
                <div style={{ border: '0.5px solid', height: '100%' }}></div>
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
                <label htmlFor="postcode">Postcode</label>
                <input
                  value={data.postcode}
                  onChange={(e) =>
                    setData({ ...data, postcode: e.target.value })
                  }
                  name={'postcode'}
                  //   style={{ width: '79.5%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
      <p style={{ borderBottom: '1px solid', margin: '10px 0' }} />
    </div>
  );
};

export default AddressSection;
