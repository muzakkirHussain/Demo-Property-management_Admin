import React, { useState } from "react";
import "../../Styles/Components/Popup/AdministratorPopup.scss";
import { Button } from "../Button";

const AdministratorPopup = (props) => {
  const { isOpen, setIsOpen } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    primaryEmail: "",
    number: "",
    role: "",
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
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!formData.primaryEmail.trim()) {
      newErrors.primaryEmail = "Primary email is required";
      valid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Primary number is required";
      valid = false;
    }
    if (!formData.role.trim()) {
      newErrors.role = "Primary role is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      primaryEmail: "",
      number: "",
      role: "",
    });
    setErrors({});
    setIsOpen(false);
  };
  const formFields = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "primaryEmail", label: "Primary Email", type: "email" },
    { name: "number", label: "Primary Number", type: "number" },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: [
        { value: "", text: "Select Role" },
        { value: "super_admin", text: "Super Admin" },
        { value: "property_manager", text: "Property Manager" },
      ],
    },
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
                <h2>Add Administrator</h2>
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
                      <div className="innerFormContainer">
                        <label htmlFor={field.name}>
                          {field.label}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        {field.type === "select" ? (
                          <select
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                          >
                            {field.options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.text}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            autoComplete="off"
                          />
                        )}
                      </div>
                      {errors[field.name] && (
                        <div className="error">
                          <p>{errors[field.name]}</p>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* <div className="statusDIv">
                    <label htmlFor="role">Status</label>
                    <span style={{ color: "green" }}>Active</span>
                  </div> */}
                  <div className="popup_bottom">
                    <Button
                      title="Create"
                      active={true}
                      type="submit"
                      handleClick={() => {}}
                    />
                    {/* <Button
                      title="Resend invite"
                      active={true}
                      type="submit"
                      handleClick={() => {}}
                    />
                    <Button
                      title="Save"
                      active={true}
                      type="submit"
                      handleClick={() => {}}
                    /> */}
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

export default AdministratorPopup;
