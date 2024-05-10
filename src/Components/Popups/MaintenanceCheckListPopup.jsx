import React, { useState } from 'react';
import '../../Styles/Components/Popup/AdministratorPopup.scss';
import { Button } from '../Button';
import { CustomCheckBox } from '../CustomCheckBox';

const MaintenanceCheckListPopup = (props) => {
  const { isOpen, setIsOpen } = props;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    primaryEmail: '',
    number: '',
    role: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };
    delete newErrors[name];
    setErrors(newErrors);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log(formData);
      handleClose();
      setErrors({});
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validation rules
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!formData.primaryEmail.trim()) {
      newErrors.primaryEmail = 'Primary email is required';
      valid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = 'Primary number is required';
      valid = false;
    }
    if (!formData.role.trim()) {
      newErrors.role = 'Primary role is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      primaryEmail: '',
      number: '',
      role: '',
    });
    setErrors({});
    setIsOpen(false);
  };
  const formFields = [
    { name: 'Check list name', label: 'First Check list name', type: 'text' },
    { name: 'Check list order', label: 'Check list order', type: 'text' },
  ];
  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="popup">
            <div className="popup-content">
              <div className="popup_top">
                <div></div>
                <h2>Create Maintenance Checklist</h2>
                <span
                  onClick={() => {
                    handleClose();
                  }}
                >
                  x
                </span>
              </div>
              <div className="popup_center">
                <form className="popup_form" onSubmit={handleSubmit}>
                  <div className="formContainer" style={{ gap: '30px' }}>
                    {formFields.map((field) => (
                      <div className="innerFormContainer" key={field.name}>
                        <label htmlFor={field.name}>
                          {field.label}
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        {errors[field.name] && (
                          <div className="error">
                            <p>{errors[field.name]}</p>
                          </div>
                        )}
                      </div>
                    ))}
                    <div
                      className="innerFormContainer"
                      style={{ justifyContent: 'flex-start' }}
                    >
                      <label htmlFor={''}>Check list active</label>
                      <CustomCheckBox checked={true} onChange={() => {}} />
                    </div>
                  </div>
                  <div className="popup_bottom">
                    <Button
                      title="Create"
                      active={true}
                      type="submit"
                      handleClick={() => {}}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { MaintenanceCheckListPopup };
