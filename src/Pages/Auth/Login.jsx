import React, { useState } from 'react';

import '../../Styles/Login.scss';
// import { useDispatch } from "react-redux";
// import { setLoginStatus } from "../../Store/Slice";
import { Toaster, toast } from 'sonner';
import { PasswordInput } from '../../Components/PasswordInput';
import logo from '../../assets/Login/Logo_main.svg';
import solace from '../../assets/Login/Solace.svg';
import solaceCorner from '../../assets/Login/Solace_corner.svg';
import { useLogin } from '../../Context/queries';

function Login() {
  // const navigate = useNavigate();
  const [userDetails, serUserDetails] = useState({
    email: '',
    password: '',
  });
  // const { setUser, setToken } = useStore((state) => ({
  //   user: state.user,
  //   setUser: state.setUser,
  //   setToken: state.setToken,
  // }));
  // const handleLoginPost = useMutation({
  //   mutationFn: async (payload) =>
  //     mutateData('manager/manager_login/', 'post', payload),
  //   onSuccess: (data) => {
  //     localStorage.setItem('Token', data.data.session.token);
  //     setUser(data.data);
  //     setToken(data.data.session.token);
  //     toast.success('Login Success');
  //     navigate('/');
  //     location.reload();
  //   },
  //   onError: (error) => {
  //     console.log(error, 'error login');
  //     toast.error(
  //       'Your login attempt was unsuccessful. Please double-check your email and password.'
  //     );
  //   },
  // });
  const handleLoginPost = useLogin(userDetails);

  return (
    <>
      {/* <button
        onClick={() => {
          setUser([{ id: 1, name: "muzakkir", lastname: "" }]);
        }}
      >
        Click
      </button> */}
      <Toaster richColors />
      <div className="loginMain">
        <div className="loginLeft">
          <div className="backgroundImage">
            <div className="innerContent">
              <div className="innerTop">
                <img src={logo} alt="logo" />
                <img src={solace} alt="solace" />
                <div className="borderDiv" />
                <p>Admin Portal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginRightMainImg1">
            <img src={solaceCorner} alt="solaceCorner" />
          </div>
          <div className="innerContent">
            <h2>Welcome</h2>
            <p>Sign into your solace account</p>
            <input
              className="inputStyle"
              type="text"
              placeholder="Email"
              value={userDetails.email}
              onChange={(e) => {
                serUserDetails((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              style={{ border: 'none' }}
            />
            <div style={{ width: '80%' }}>
              <PasswordInput
                name="password"
                type="text"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) => {
                  serUserDetails((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
            <p>Forget Password ?</p>
            <button
              type="button"
              onClick={() => {
                if (
                  userDetails.email.length > 4 &&
                  userDetails.password.length > 4
                ) {
                  handleLoginPost.mutate(userDetails);
                } else {
                  toast.error(
                    // eslint-disable-next-line comma-dangle
                    'To proceed, please input your email and password.'
                  );
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="loginMainImg1">
          <img src={solaceCorner} alt="solaceCorner" />
        </div>
      </div>
    </>
  );
}

export { Login };
