import React, { useEffect, useState } from 'react';
import '../../Styles/Components/Popup/AdministratorPopup.scss';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Button } from '../Button';
import { mutateData } from '../../Context/Utils';
import { useAdminPost, useAdminUpdateAdmin } from '../../Context/queries';

function AdministratorPopup(props) {
  const { isOpen, setIsOpen, editData, setEditData } = props;
  const [formDirty, setFormDirty] = useState(true);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    role: '',
  });

  useEffect(() => {
    if (editData !== '') {
      setFormData(editData);
      console.log(editData, ' from pop');
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormDirty(false);
    const { name, value } = e.target;
    const newErrors = { ...errors };
    delete newErrors[name];
    setErrors(newErrors);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validation rules
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
      valid = false;
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Primary email is required';
      valid = false;
    }
    if (!formData.mobile_number.trim()) {
      newErrors.mobile_number = 'Primary number is required';
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
      first_name: '',
      last_name: '',
      email: '',
      mobile_number: '',
      role: '',
    });
    setErrors({});
    setIsOpen(false);
    setEditData('');
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

  const formFields = [
    { name: 'first_name', label: 'First Name', type: 'text' },
    { name: 'last_name', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Primary Email', type: 'email' },
    { name: 'mobile_number', label: 'Primary Number', type: 'number' },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { value: '', text: 'Select Role' },
        { value: 'admin', text: 'Super Admin' },
        { value: 'manager', text: 'Property Manager' },
      ],
    },
  ];
  const handleCreateAdmin = useAdminPost(formData);
  // const handleCreateAdmin = useMutation({
  //   mutationFn: async () => {
  //     return mutateData("manager/crud/v1/", "post", formData);
  //   },
  //   onSuccess: (data) => {
  //     toast.success(`Mail has been sent to ${formData.email}.`);
  //     handleClose();
  //   },
  //   onError: (error) => {
  //     console.log(error, "error login");
  //     toast.error(`Error occurred while processing.(ADMPOP)`);
  //   },
  //   onSettled: async (_, error) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       await queryClient.invalidateQueries({
  //         queryKey: ["administratorTable"],
  //       });
  //     }
  //   },
  // });

  const handleUpdateAdmin = useAdminUpdateAdmin(
    {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      mobile_number: formData.mobile_number,
      role: formData.role,
    },
    // eslint-disable-next-line comma-dangle
    formData.id
  );
  // const handleUpdateAdmin = useMutation({
  //   mutationFn: async () => {
  //     return mutateData(`manager/crud/v1/${formData.id}/`, "put", {
  //       first_name: formData.first_name,
  //       last_name: formData.last_name,
  //       email: formData.email,
  //       mobile_number: formData.mobile_number,
  //       role: formData.role,
  //     });
  //   },
  //   onSuccess: (data) => {
  //     toast.success(`Mail has been sent to ${formData.email}.`);
  //     handleClose();
  //   },
  //   onError: (error) => {
  //     console.log(error, "error login");
  //     toast.error(`Error occurred while processing.(ADMPOP)`);
  //   },
  // });
  const handleResendInvite = useMutation({
    mutationFn: async () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      mutateData('/manager/sendinvite_manager/', 'post', {
        email: formData.email,
      }),
    onSuccess: () => {
      toast.success(`Resent mail has been sent to ${formData.email}.`);
      handleClose();
    },
    onError: (error) => {
      console.error(error, 'error login');
      toast.error('Error occurred while processing.(ADMPOP)');
    },
  });

  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay" />
          <div className="popup">
            <div className="popup-content">
              <div className="popup_top">
                <div />
                <h2>
                  {editData ? 'Update Administration' : 'Add Administrator'}
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  x
                </button>
              </div>
              <div className="popup_center">
                <form className="popup_form" onSubmit={handleSubmit}>
                  <div className="formContainer">
                    {formFields.map((field, index) => (
                      <>
                        <div className="innerFormContainer" key={index}>
                          <label htmlFor={field.name}>
                            {field.label}
                            <span style={{ color: 'red' }}>*</span>
                          </label>
                          {field.type === 'select' ? (
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
                      </>
                    ))}
                    {editData && (
                      <div className="statusDIv">
                        <p>Status</p>
                        <span
                          style={{
                            color: formData.is_active ? 'green' : 'red',
                          }}
                        >
                          {formData.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="popup_bottom">
                    {!formData.is_active && editData && (
                      <Button
                        title="Resend invite"
                        active
                        type="submit"
                        handleClick={(e) => {
                          e.preventDefault();
                          handleResendInvite.mutate();
                        }}
                      />
                    )}
                    {formData.is_active && editData && (
                      <Button
                        title="Deactivate"
                        active
                        type="submit"
                        handleClick={(e) => {
                          e.preventDefault();
                          handleResendInvite.mutate();
                        }}
                      />
                    )}

                    <Button
                      title={editData ? 'Update' : 'Create'}
                      active
                      type="submit"
                      handleClick={(e) => {
                        e.preventDefault();
                        if (editData) {
                          handleUpdateAdmin.mutate();
                        } else {
                          handleCreateAdmin.mutate();
                        }
                      }}
                      disabled={
                        handleCreateAdmin.isPending ||
                        handleUpdateAdmin.isPending ||
                        formDirty
                      }
                    />

                    {/* <Button
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
}

export default AdministratorPopup;
