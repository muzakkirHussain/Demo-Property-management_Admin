// import React, { useState } from 'react';
// import '../../Styles/SuperAdminCreate.scss';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Toaster, toast } from 'sonner';
// import { useMutation } from '@tanstack/react-query';
// import blTopLeft from '../../assets/Common/bl_TopLeft.svg';
// import bl_BottomRight from '../../assets/Common/bl_BottomRight.svg';
// import solace_Logo from '../../assets/Common/solace_Logo.svg';
// import success_check from '../../assets/Common/success_check.svg';

// import { PasswordInput } from '../../Components/PasswordInput';
// import { Button } from '../../Components/Button';
// import { mutateData, validatePassword } from '../../Context/Utils';

// function SuperAdminCreate() {
//   const { id } = useParams();
//   // const queryClient = useQueryClient();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [accountSuccess, setAccountSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   // const handleCreateAdmin = useMutation({
//   //   mutationFn: async () => {
//   //     return mutateData(`manager/crud/v1/${id}/`, "put", {
//   //       password: confirmPassword,
//   //     });
//   //   },
//   //   onSuccess: (data) => {
//   //     toast.success(`Mail has been sent to ${formData.email}.`);
//   //     handleClose();
//   //   },
//   //   onError: (error) => {
//   //     console.log(error, "error login");
//   //     toast.error(`Error occurred while processing.(ADMPOP)`);
//   //   },
//   //   onSettled: async (_, error) => {
//   //     if (error) {
//   //       console.log(error);
//   //     } else {
//   //       // await queryClient.invalidateQueries({queryKey: ["todos"]});
//   //     }
//   //   },
//   // });
//   const handleCreateInvite = useMutation({
//     mutationFn: async () =>
//       mutateData(`manager/password_update/${id}`, 'put', {
//         password,
//         is_active: true,
//       }),
//     onSuccess: (data) => {
//       toast.success('Account has been created successfully.');
//       setAccountSuccess(true);
//     },
//     onError: (error) => {
//       console.log(error, 'error login');
//       toast.error('Error occurred while processing.(ADMPOP)');
//     },
//   });

//   const validate = () => {
//     if (password === '' || confirmPassword === '') {
//       toast.error('Password fields cannot be empty.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match.');
//       return;
//     }

//     const response = validatePassword(confirmPassword);
//     if (response === 'Password is valid.') {
//       console.log('Response:', response);
//     } else {
//       toast.error(response);
//     }
//     handleCreateInvite.mutate();
//   };

//   return (
//     <>
//       <Toaster richColors />
//       <div className="passwordCreate">
//         <img className="topLeft" src={blTopLeft} alt="blTopLeft" />
//         <img className="bottomLeft" src={bl_BottomRight} alt="bl_BottomRight" />
//         <div className="innerPasswordCreate">
//           <div className="topSection">
//             <img src={solace_Logo} alt="solace_Logo" />
//           </div>
//           {!accountSuccess && (
//             <div className="textSection">
//               <p>
//                 Lorem Ipsum has been the industry's standard dummy text ever
//                 since the 1500s, when an unknown printer took a galley of type
//                 and scrambled
//               </p>
//             </div>
//           )}
//           {accountSuccess && (
//             <div className="successSection">
//               <img src={success_check} alt="success_check" />
//               <p>
//                 <strong>Your Account has been Created Successfully</strong>
//               </p>
//             </div>
//           )}

//           <div className="mainPasswordSection">
//             {accountSuccess ? (
//               <p
//                 style={{ color: 'black', fontSize: '16px', lineHeight: '35px' }}
//               >
//                 Lorem Ipsum has been the industry's standard dummy text ever
//                 since the 1500s, when an unknown printer took a galley of type
//                 and scrambled
//               </p>
//             ) : (
//               <>
//                 <PasswordInput
//                   value={password}
//                   onChange={handlePasswordChange}
//                   placeholder="Password"
//                   name="password"
//                 />
//                 <PasswordInput
//                   value={confirmPassword}
//                   onChange={handleConfirmPasswordChange}
//                   placeholder="Confirm Password"
//                   name="confPassword"
//                 />
//               </>
//             )}
//           </div>
//           <div className="footerSection">
//             {accountSuccess ? (
//               <Button
//                 title="Login"
//                 handleClick={() => navigate('/login')}
//                 active
//                 // disabeled={handleCreateInvite.isPending}
//               />
//             ) : (
//               <Button
//                 title="Submit"
//                 handleClick={() => {
//                   validate();
//                 }}
//                 active
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export { SuperAdminCreate };

import React, { useState } from 'react';
import '../../Styles/SuperAdminCreate.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import blTopLeft from '../../assets/Common/bl_TopLeft.svg';
import bl_BottomRight from '../../assets/Common/bl_BottomRight.svg';
import solace_Logo from '../../assets/Common/solace_Logo.svg';
import success_check from '../../assets/Common/success_check.svg';

import { PasswordInput } from '../../Components/PasswordInput';
import { Button } from '../../Components/Button';
import { mutateData, validatePassword } from '../../Context/Utils';

// Component for creating a new SuperAdmin account
function SuperAdminCreate() {
  // Get the id from the URL parameters
  const { id } = useParams();

  // Set up state for the password and confirm password inputs
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Set up state for tracking whether the account creation was successful
  const [accountSuccess, setAccountSuccess] = useState(false);

  // Set up navigation for redirecting to the login page
  const navigate = useNavigate();

  // Handle changes to the password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle changes to the confirm password input
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Set up the mutation for creating a new SuperAdmin account
  const handleCreateInvite = useMutation({
    mutationFn: async () =>
      mutateData(`manager/password_update/${id}`, 'put', {
        password,
        is_active: true,
      }),
    onSuccess: (data) => {
      toast.success('Account has been created successfully.');
      setAccountSuccess(true);
    },
    onError: (error) => {
      console.log(error, 'error login');
      toast.error('Error occurred while processing.(ADMPOP)');
    },
  });

  // Validate the password inputs and create the new SuperAdmin account
  const validate = () => {
    if (password === '' || confirmPassword === '') {
      toast.error('Password fields cannot be empty.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    const response = validatePassword(confirmPassword);
    if (response === 'Password is valid.') {
      console.log('Response:', response);
    } else {
      toast.error(response);
    }
    handleCreateInvite.mutate();
  };

  return (
    <>
      <Toaster richColors />
      <div className="passwordCreate">
        <img className="topLeft" src={blTopLeft} alt="blTopLeft" />
        <img className="bottomLeft" src={bl_BottomRight} alt="bl_BottomRight" />
        <div className="innerPasswordCreate">
          <div className="topSection">
            <img src={solace_Logo} alt="solace_Logo" />
          </div>
          {!accountSuccess && (
            <div className="textSection">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
          )}
          {accountSuccess && (
            <div className="successSection">
              <img src={success_check} alt="success_check" />
              <p>
                <strong>Your Account has been Created Successfully</strong>
              </p>
            </div>
          )}

          <div className="mainPasswordSection">
            {accountSuccess ? (
              <p
                style={{ color: 'black', fontSize: '16px', lineHeight: '35px' }}
              >
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            ) : (
              <>
                <PasswordInput
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  name="password"
                />
                <PasswordInput
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm Password"
                  name="confPassword"
                />
              </>
            )}
          </div>
          <div className="footerSection">
            {accountSuccess ? (
              <Button
                title="Login"
                handleClick={() => navigate('/login')}
                active
                // disabeled={handleCreateInvite.isPending}
              />
            ) : (
              <Button
                title="Submit"
                handleClick={() => {
                  validate();
                }}
                active
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { SuperAdminCreate };

// Import necessary libraries, modules, and components
// Get the id from the URL parameters using react-router's useParams hook
// Set up state for the password and confirm password inputs
// Set up state for tracking whether the account creation was successful
// Set up navigation for redirecting to the login page
// Handle changes to the password input
// Handle changes to the confirm password input
// Set up the mutation for creating a new SuperAdmin account
// Validate the password inputs and create the new SuperAdmin account
// Display the password creation form and success message
// Display error messages using the Sonner toast library
