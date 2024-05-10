import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStore } from '../Store/Store';

const useResponseHandler = () => {
  const navigate = useNavigate();
  // const { setUser } = useStore();
  const { setUser, token } = useStore((state) => ({
    setUser: state.setUser,
    token: state.token,
  }));
  // const baseURL = 'http://192.168.1.28:9003/';
  const baseURL = 'http://122.186.126.218:9009/';
  const handleLayer = async (url, payload, type) => {
    try {
      const requestOptions = {
        method: type.toUpperCase(),
        url: baseURL + url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        params: payload?.params,
        data: payload?.data,
      };

      const response = await axios(requestOptions);
      return response;
    } catch (error) {
      console.error(error, 'error');
      if (error.response && error.response.status === 401) {
        setUser([]);
        localStorage.clear();
        navigate('/login');
      }
      throw error.message;
    }
  };

  const handleResponse = async (url, type, payload) => {
    const response = await handleLayer(url, payload, type);
    return response.data;
  };

  return { handleResponse };
};

export default useResponseHandler;
