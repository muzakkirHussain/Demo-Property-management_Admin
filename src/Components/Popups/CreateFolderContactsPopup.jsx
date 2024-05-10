import React, { useEffect, useState } from 'react';
import { Button } from '../Button';

const CreateFolderContactsPopup = (props) => {
  const { isOpen, setIsOpen } = props;
  const [formData, setFormData] = useState({});
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
      newErrors.firstName = 'File name is required';
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
  const formFields = [{ name: 'firstName', label: 'Name', type: 'text' }];

  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="popup" style={{ width: '560px' }}>
            <div className="popup-content">
              <div className="popup_top">
                <div></div>
                <h2>Create Folder</h2>
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
                  {formFields.map((field) => (
                    <div className="formContainer" key={field.name}>
                      <div
                        className="innerFormContainer"
                        style={{ justifyContent: 'flex-start' }}
                      >
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
                      </div>
                      {errors[field.name] && (
                        <div className="error">
                          <p>{errors[field.name]}</p>
                        </div>
                      )}
                    </div>
                  ))}
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

export default CreateFolderContactsPopup;
