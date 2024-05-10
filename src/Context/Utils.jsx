import axios from 'axios';

const token = localStorage.getItem('Token');
// const baseUrl = "http://192.168.1.28:9002/";
const baseUrl =
  'https://3416-2406-7400-bb-778f-3dd5-1bf4-2250-4279.ngrok-free.app/';
// const [loading, setLoading] = useState(false);
const fetchDataWithToken = async (url, params = {}) => {
  // const token = "TestToken";
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;

  const response = await fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};

const mutateData = async (
  url,
  methodType = 'post',
  payload,
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
) => axios[methodType](baseUrl + url, payload, { headers });

const validatePassword = (password) => {
  const minLength = 8;
  const maxLength = 16;
  const numberRegex = /\d/;
  const capitalLetterRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  // Check length
  if (password.length < minLength || password.length > maxLength) {
    return 'Password must be between 8 and 16 characters long.';
  }

  // Check for at least one number
  if (!numberRegex.test(password)) {
    return 'Password must contain at least one number.';
  }

  // Check for at least one capital letter
  if (!capitalLetterRegex.test(password)) {
    return 'Password must contain at least one capital letter.';
  }

  // Check for at least one special character
  if (!specialCharRegex.test(password)) {
    return 'Password must contain at least one special character.';
  }

  // Password meets all conditions
  return 'Password is valid.';
};
export { fetchDataWithToken, mutateData, validatePassword };
