import axios from 'axios';

export const makePostApiInvoke = async (
  url,
  headers,
  params,
  status = false,
) => {
  let result = null;
  let response = null;

  try {
    //let response = await axios.post(url, { params: params}, {headers:headers});
    if (headers == null) {
      response = await axios.post(url, params);
    } else {
      response = await axios.post(url, params, {headers: headers});
    }

    result = response.data;
  } catch (e) {
    if (e.message == 'Network Error') {
      return 'Network Error';
    }
    console.error(url, params, e);
  }
  return status ? {result, status: response?.status} : result;
};

export const makePatchApiInvoke = async (url, headers, params) => {
  let result = null;
  try {
    let response = null;
    if (headers == null) {
      response = await axios.patch(url, {headers: headers}, {params: params});
    } else {
      response = await axios.patch(url, params, {headers: headers});
    }

    result = response.data;
  } catch (e) {
    if (e.message == 'Network Error') {
      return 'Network Error';
    }
    console.log(22, e);
  }

  return result;
};

export const makeGetApiInvoke = async (url, headers, params) => {
  try {
    let response = await axios.get(url, {headers: headers, params: params});
    return response.data;
  } catch (e) {
    if (e.message == 'Network Error') {
      return 'Network Error';
    }
    console.error(url, e);
  }
  return false;
};

export const makeBearerTokenHeader = () => {
  try {
    return {
      'Content-Type': 'application/json'
    };
  } catch (e) {
    return null;
  }
};
