import React, { useState } from 'react';
import { CustomSelect } from '../../Components/CustomSelect';
import { CustomCheckBox } from '../../Components/CustomCheckBox';

const ContactsSection = (props) => {
  const { data, setData, secondaryCheck, setSecondaryCheck } = props;
  // This code belongs to Telephone - START
  const [inputs, setInputs] = useState([{ number: '', label: '' }]);
  const minInputs = 1;
  const maxInputs = 4;

  const handleAddInput = () => {
    if (inputs.length < maxInputs) {
      setInputs([...inputs, { number: '', label: '' }]);
    }
  };

  const handleRemoveInput = (index) => {
    if (inputs.length > minInputs) {
      const newInputs = [...inputs];
      newInputs.splice(index, 1);
      setInputs(newInputs);
    }
  };

  const handleTestingChange = (index, e) => {
    const { name, value } = e.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };
  const handleSelectsChange = (index, selectedOption) => {
    const newInputs = [...inputs];
    newInputs[index]['typeTemplate'] = selectedOption;
    setInputs(newInputs);
  };
  // This code belongs to Telephone - END
  const telephoneOptions = [
    { value: 'Home', label: 'home' },
    { value: 'Mob', label: 'Mob' },
    { value: 'Wrk', label: 'Wrk' },
    { value: 'Bus', label: 'Bus' },
  ];
  return (
    <div style={{ width: '100%' }}>
      <p className="title">Contact Details</p>
      <div style={{ width: '100%' }}>
        <div className="contactDetailsDiv">
          <div className="rightSection">
            <label htmlFor="email">Name</label>
            <div
              className=""
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1%',
              }}
            >
              <input
                value={data?.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                name={'title'}
                style={{ width: '10.5%' }}
                placeholder="Title"
              />
              <input
                value={data?.forename}
                onChange={(e) => setData({ ...data, forename: e.target.value })}
                name={'forename'}
                style={{ width: '40%' }}
                placeholder="Forename"
              />
              <input
                value={data?.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                name={'lastName'}
                style={{ width: '40%' }}
                placeholder="Surname"
              />
            </div>
            <div>
              <label htmlFor="email">Telephone</label>
              {inputs.map((input, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '1%',
                    }}
                  >
                    <div style={{ width: '30%' }}>
                      <CustomSelect
                        name={'typeTemplate'}
                        selectedOption={input.typeTemplate}
                        handleSelectChange={(selectedOption) =>
                          handleSelectsChange(index, selectedOption)
                        }
                        options={telephoneOptions}
                        placeholder="Type"
                      />
                    </div>
                    <input
                      value={input.number}
                      onChange={(e) => handleTestingChange(index, e)}
                      name={'number'}
                      style={{ width: '50%' }}
                      placeholder="Number"
                      type="number"
                    />
                    <input
                      value={input.label}
                      onChange={(e) => handleTestingChange(index, e)}
                      name={'label'}
                      style={{ width: '19.5%' }}
                      placeholder="Label"
                    />
                    {index === 0 && <button onClick={handleAddInput}>+</button>}
                    {inputs.length > minInputs && index !== 0 && (
                      <button onClick={() => handleRemoveInput(index)}>
                        -
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {/* {inputs.length < maxInputs && (
                  <button onClick={handleAddInput}>+</button>
                )} */}
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
              <label htmlFor="email">E-mail</label>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                name={'email'}
                placeholder="E-Mail"
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
              <label htmlFor="email">Salutation</label>
              <input
                value={data.salutation}
                onChange={(e) =>
                  setData({ ...data, salutation: e.target.value })
                }
                name={'email'}
                placeholder="Salutation"
                //   style={{ width: '79.5%' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '20px',
          margin: '20px 0',
        }}
      >
        <label className="">Secondary contact Details</label>
        <CustomCheckBox
          checked={secondaryCheck}
          //   setChecked={setSecondary}
          onChange={setSecondaryCheck}
          //   onClick={() => {
          //     setSecondary(false);
          //   }}
        />
      </div>
      {secondaryCheck && (
        <>
          {/* <p>Secondary Contact Details</p> */}
          <div style={{ width: '100%' }}>
            <div className="contactDetailsDiv">
              <div className="rightSection">
                <label htmlFor="email">Name</label>
                <div
                  className=""
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1%',
                  }}
                >
                  <input
                    value={data?.second_title}
                    onChange={(e) =>
                      setData({ ...data, second_title: e.target.value })
                    }
                    name={'second_title'}
                    style={{ width: '10.5%' }}
                    placeholder="Title"
                  />
                  <input
                    value={data?.second_forename}
                    onChange={(e) =>
                      setData({ ...data, second_forename: e.target.value })
                    }
                    name={'second_forename'}
                    style={{ width: '40%' }}
                    placeholder="Forename"
                  />
                  <input
                    value={data?.second_lastName}
                    onChange={(e) =>
                      setData({ ...data, second_lastName: e.target.value })
                    }
                    name={'second_lastName'}
                    style={{ width: '40%' }}
                    placeholder="Last name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Telephone</label>
                  {inputs.map((input, index) => (
                    <div key={index}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          gap: '1%',
                        }}
                      >
                        <div style={{ width: '30%' }}>
                          <CustomSelect
                            name={'typeTemplate'}
                            selectedOption={input.typeTemplate}
                            handleSelectChange={(selectedOption) =>
                              handleSelectsChange(index, selectedOption)
                            }
                            options={telephoneOptions}
                            placeholder="Type"
                          />
                        </div>
                        <input
                          value={input.number}
                          onChange={(e) => handleTestingChange(index, e)}
                          name={'number'}
                          style={{ width: '50%' }}
                          placeholder="Number"
                          type="number"
                        />
                        <input
                          value={input.label}
                          onChange={(e) => handleTestingChange(index, e)}
                          name={'label'}
                          style={{ width: '19.5%' }}
                          placeholder="Label"
                        />
                        {index === 0 && (
                          <button onClick={handleAddInput}>+</button>
                        )}
                        {inputs.length > minInputs && index !== 0 && (
                          <button onClick={() => handleRemoveInput(index)}>
                            -
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {/* {inputs.length < maxInputs && (
                  <button onClick={handleAddInput}>+</button>
                )} */}
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
                  <label htmlFor="email">E-mail</label>
                  <input
                    value={data.second_email}
                    onChange={(e) =>
                      setData({ ...data, second_email: e.target.value })
                    }
                    name={'second_email'}
                    placeholder="E-Mail"
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
                  <label htmlFor="email">Salutation</label>
                  <input
                    value={data.second_salutation}
                    onChange={(e) =>
                      setData({ ...data, second_salutation: e.target.value })
                    }
                    name={'email'}
                    placeholder="Salutation"

                    //   style={{ width: '79.5%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <p style={{ borderBottom: '1px solid', margin: '10px 0' }} />
    </div>
  );
};

export default ContactsSection;
