import React, { useEffect, useState } from 'react';
import { CustomSelect } from '../CustomSelect';

const ContactsTemplate = () => {
  const [formData, setFormData] = useState({
    type: '',
  });
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 'Client', label: 'Client' },
    { value: 'Landlord', label: 'Landlord' },
    { value: 'Tenant', label: 'Tenant' },
    { value: 'Supplier', label: 'Supplier' },
  ]);

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

  return (
    <div>
      <div style={{ width: '30%' }}>
        <CustomSelect
          selectedOption={selectedOption}
          handleSelectChange={handleChange}
          options={options}
        />
      </div>
    </div>
  );
};

export { ContactsTemplate };
