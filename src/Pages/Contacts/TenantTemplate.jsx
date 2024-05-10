import React, { useState } from 'react';
import { CustomSelect } from '../../Components/CustomSelect';
import './Styles/TenantTemplate.scss';
import { CustomCheckBox } from '../../Components/CustomCheckBox';
import { Button } from '../../Components/Button';
import ContactsSection from './ContactsSection';
import AddressSection from './AddressSection';

const TenantTemplate = () => {
  const [data, setData] = useState({
    email: '',
    title: '',
    telephone: '',
  });
  const [secondary, setSecondary] = useState(false);
  // const handleChange = (e) => {
  //   setSelectedOption(e);
  //   setFormData({
  //     ...formData,
  //     type: e.value,
  //   });
  // };
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
    </div>
  );
};

export default TenantTemplate;
