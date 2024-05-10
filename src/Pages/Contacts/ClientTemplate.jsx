import React, { useEffect, useState } from 'react';
import CustomInput from '../../Components/CustomInput';
import { CustomSelect } from '../../Components/CustomSelect';
// import '../../index.scss';
import './Styles/TenantTemplate.scss';
import { CustomCheckBox } from '../../Components/CustomCheckBox';
import { Button } from '../../Components/Button';
import remove from '../../assets/Common/close.svg';
import ContactsSection from './ContactsSection';
import AddressSection from './AddressSection';

const ClientTemplate = () => {
  const [data, setData] = useState({
    email: '',
    title: '',
    telephone: '',
  });
  const [secondary, setSecondary] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    setSelectedOption(e);
    setFormData({
      ...formData,
      type: e.value,
    });
  };
  const [selectSupplier, setSelectSupplier] = useState(null);
  const [selectedList, setSelectedList] = useState([]);
  const [options, setOptions] = useState([
    { value: 'manager 1', label: 'manager 1' },
    { value: 'manager 2', label: 'manager 2' },
    { value: 'manager 3', label: 'manager 3' },
  ]);
  const [supplierOptions, setSupplierOptions] = useState([
    { value: 'manager 1', label: 'manager 1' },
    { value: 'manager 2', label: 'manager 2' },
    { value: 'manager 3', label: 'manager 3' },
  ]);
  const handleSelectChange = (selectSupplier) => {
    setSelectSupplier(selectSupplier);
  };
  const handleAddClick = () => {
    if (selectSupplier) {
      setSelectedList([...selectedList, selectSupplier.label]);
      setSupplierOptions(
        supplierOptions.filter(
          (option) => option.label !== selectSupplier.label
        )
      );
      setSelectSupplier(null);
    }
  };
  const handleRemoveClick = (label) => {
    setSelectedList(selectedList.filter((item) => item !== label));
    setSupplierOptions([...supplierOptions, { value: label, label: label }]);
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
          <p className="title">
            Preferred Suppliers / Maintenance Approval Amount
          </p>
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
                  <label htmlFor="selectServices">Select Services</label>
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
                  <label htmlFor="approvalAmount">
                    Maintenance Approval Amount
                  </label>

                  <div style={{ width: '100%' }}>
                    <CustomSelect
                      name={'typeTemplate'}
                      selectedOption={selectedOption}
                      handleSelectChange={handleChange}
                      options={options}
                    />
                  </div>
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
                  <label htmlFor="selectSupplier">Select Supplier</label>
                  <div
                    className="suppliersContainer"
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    <div style={{ minWidth: '100%', display: 'flex' }}>
                      <CustomSelect
                        selectedOption={selectSupplier}
                        handleSelectChange={handleSelectChange}
                        options={supplierOptions}
                      />
                      <Button
                        title="Add"
                        active={true}
                        handleClick={handleAddClick}
                      />
                    </div>
                    <div className="chipsSection">
                      {selectedList.map((item, index) => (
                        <span key={index}>
                          {item}
                          <img
                            src={remove}
                            alt="remove"
                            onClick={() => handleRemoveClick(item)}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <p style={{ borderBottom: '1px solid', margin: '10px 0' }} />
      </div>
    </div>
  );
};

export default ClientTemplate;
