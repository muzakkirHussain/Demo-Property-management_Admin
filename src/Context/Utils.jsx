const fetchDataWithToken = async (url, params = {}) => {
  const token = "TestToken";
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
const mutateData = async (url, method, payload) => {
  const token = "TestToken";
  const response = await fetch(url, {
    method: method.toUpperCase(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data;
};

export { fetchDataWithToken, mutateData };
