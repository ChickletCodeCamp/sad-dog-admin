import { CONFIG } from '../constants/config';
import { getAuthorizationHeader } from './getAuthorizationHeader';
import { useNavigate } from 'react-router-dom';

const { apiURL } = CONFIG;

// Helper function to handle responses
const handleResponse = async (response: any) => {
  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || response.statusText);
  }
  return response.json();
};

// Helper function to handle errors
const handleError = (error: any) => {
  const navigate = useNavigate();

  if (error.response) {
    switch (error.response.status) {
      case 401: // 或者 403，視您的 API 設定而定
        // 檢查當前路徑是否已經在登入頁面
        if (window.location.pathname !== '/login') {
          console.log('無權限，重新導向到登入頁面');
          navigate('/login');
        }
        break;
      case 404:
        console.log('你要找的頁面不存在');
        break;
      case 500:
        console.log('程式發生問題');
        break;
      default:
        console.log(error.message);
    }
  }

  if (!window.navigator.onLine) {
    alert('網路出了點問題，請重新連線後重整網頁');
  }

  throw error;
};

// Configuring headers
const headers = new Headers(getAuthorizationHeader());

// HTTP GET request
const get = async (url: string, data: any, config = {}) => {
  try {
    const response = await fetch(
      `${apiURL}${url}?${new URLSearchParams(data).toString()}`,
      {
        method: 'GET',
        headers,
        ...config
      }
    );
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// HTTP POST request
const post = async (url: string, data: object, config = {}) => {
  try {
    const response = await fetch(`${apiURL}${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
      ...config
    });
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// HTTP DELETE request
const deleteRequest = async (url: string, data: any = null, config = {}) => {
  try {
    const response = await fetch(
      `${apiURL}${url}?${new URLSearchParams(data).toString()}`,
      {
        method: 'DELETE',
        headers,
        ...config
      }
    );
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// HTTP PUT request
const put = async (url: string, data: object, config = {}) => {
  try {
    const response = await fetch(`${apiURL}${url}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
      ...config
    });
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// HTTP PATCH request
const patch = async (url: string, data = null, config = {}) => {
  try {
    const response = await fetch(`${apiURL}${url}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
      ...config
    });
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

const req = {
  get,
  post,
  delete: deleteRequest,
  put,
  patch
};

export default req;
