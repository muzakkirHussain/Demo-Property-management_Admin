import React, { useEffect, useState } from 'react';
import { Heading } from '../../Components/Heading';
import { CustomSelect } from '../../Components/CustomSelect';
import ClientTemplate from './ClientTemplate';
import TenantTemplate from './TenantTemplate';
import LandlordTemplate from './LandlordTemplate';
import { Button } from '../../Components/Button';
import SupplierTemplate from './SupplierTemplate';

const ContactCreate = () => {
  const role = 'admin';
  const ADMINpaths = [
    { title: 'Contacts', url: '/contacts' },
    { title: 'Create Contact', url: '' },
  ];
  const [formData, setFormData] = useState({
    type: '',
  });
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 'Landlord', label: 'Landlord' },
    { value: 'Tenant', label: 'Tenant' },
    { value: 'Supplier', label: 'Supplier' },
  ]);

  useEffect(() => {
    if (
      role === 'admin' &&
      !filerList.some((item) => item.title === 'Client')
    ) {
      setOptions((prevOptions) => [
        { value: 'Client', label: 'Client' },
        ...prevOptions,
      ]);
    }
  }, [role]);

  const handleChange = (e) => {
    setSelectedOption(e);
    setFormData({
      ...formData,
      type: e.value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
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

  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} />
      <div
        style={{
          height: '85%',
          background: 'white',
          marginTop: '20px',
          borderRadius: '15px',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        <div>
          <label htmlFor="typeTemplate">Role Type:</label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '30%' }}>
              <CustomSelect
                name={'typeTemplate'}
                selectedOption={selectedOption}
                handleSelectChange={handleChange}
                options={options}
              />
            </div>
            {/* <button>Create</button> */}
          </div>
          {formData.type === 'Tenant' && <TenantTemplate />}
          {formData.type === 'Client' && <ClientTemplate />}
          {formData.type === 'Landlord' && <LandlordTemplate />}
          {formData.type === 'Supplier' && <SupplierTemplate />}
        </div>
      </div>
    </div>
  );
};

export default ContactCreate;
