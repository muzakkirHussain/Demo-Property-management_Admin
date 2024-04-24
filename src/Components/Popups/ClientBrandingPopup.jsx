import React, { useEffect, useState } from "react";
import "../../Styles/Components/Popup/ClientBrandingPopup.scss";
import { Button } from "../Button";

const ClientBrandingPopup = (props) => {
  const { isOpen, setIsOpen } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    primaryEmail: "",
    number: "",
    emailServiceId: "",
    preferredEmail: "",
    branding: "",
    uploadLogo: "",
    uploadLetterHead: "",
    uploadESign: "",
    colorCode1: "",
    colorCode2: "",
    colorCode3: "",
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
    if (!formData.emailServiceId.trim()) {
      newErrors.emailServiceId = "Email Service Id is required";
      valid = false;
    }
    if (!formData.preferredEmail.trim()) {
      newErrors.preferredEmail = "Preferred email is required";
      valid = false;
    }
    if (!formData.branding.trim()) {
      newErrors.branding = "Branding option is required";
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
      emailServiceId: "",
      preferredEmail: "",
      branding: "",
    });
    setErrors({});
    setIsOpen(false);
  };
  useEffect(() => {
    console.log(formData, "aksdfjljkasodjklafsd");
  }, [formData]);

  const formFields = [
    [
      { name: "firstName", label: "First Name", type: "text" },
      { name: "lastName", label: "Last Name", type: "text" },
    ],
    [
      { name: "primaryEmail", label: "Primary Email", type: "email" },
      { name: "number", label: "Primary Number", type: "number" },
    ],
    [
      { name: "emailServiceId", label: "Email Service Id", type: "text" },
      { name: "preferredEmail", label: "Preferred Email", type: "email" },
    ],
  ];
  const customFormFields = [
    [
      { name: "uploadLogo", label: "Upload logo", type: "file" },
      { name: "uploadLetterHead", label: "Upload Letter head", type: "file" },
    ],
    [
      { name: "uploadESign", label: "Upload E signature", type: "file" },
      { name: "colorCode1", label: "Color code 1", type: "text" },
    ],
    [
      { name: "colorCode2", label: "Color code 2", type: "text" },
      { name: "colorCode3", label: "Color code 3", type: "text" },
    ],
  ];

  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="popups">
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
                  {formFields.map((group, index) => (
                    <div className="formContainer" key={index}>
                      <div className="formGroup">
                        {group.map((field) => (
                          <div className="innerFormContainer" key={field.name}>
                            <label htmlFor={field.name}>
                              {field.label}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              autoComplete="off"
                              className="inputText"
                            />
                            {errors[field.name] && (
                              <div className="error">
                                <p>{errors[field.name]}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="radioOption">
                    <span>
                      Brand Type<span style={{ color: "red" }}>*</span>
                    </span>

                    <input
                      type="radio"
                      name={"default"}
                      value={"default"}
                      checked={true}
                      className={`radioButton ${
                        formData.branding === "default" && "radioButtonActive"
                      }`}
                      onClick={(e) => {
                        setFormData({ ...formData, branding: "default" });
                      }}
                    />
                    <label
                      htmlFor={"default"}
                      onClick={(e) => {
                        setFormData({ ...formData, branding: "default" });
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {"Default"}
                    </label>
                    <input
                      type="radio"
                      name={"custom"}
                      value={"custom"}
                      checked={true}
                      className={`radioButton ${
                        formData.branding === "custom" && "radioButtonActive"
                      }`}
                      onClick={(e) => {
                        setFormData({ ...formData, branding: "custom" });
                      }}

                      // onChange={handleChange}
                    />
                    <label
                      htmlFor={"custom"}
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        setFormData({ ...formData, branding: "custom" });
                      }}
                    >
                      {"Custom"}
                    </label>
                  </div>
                  {formData.branding === "custom" && (
                    <>
                      <form className="popup_form" onSubmit={handleSubmit}>
                        {customFormFields.map((group, index) => (
                          <div className="formContainer" key={index}>
                            <div className="formGroup">
                              {group.map((field) => (
                                <div
                                  className="innerFormContainer"
                                  key={field.name}
                                >
                                  <label htmlFor={field.name}>
                                    {field.label}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="inputText"
                                  />
                                  {errors[field.name] && (
                                    <div className="error">
                                      <p>{errors[field.name]}</p>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </form>
                    </>
                  )}
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

export { ClientBrandingPopup };
