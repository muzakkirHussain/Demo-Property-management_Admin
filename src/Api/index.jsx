const fetchProducts = async (token) => {
  const url = "https://dummyjson.com/products";
  return fetchDataWithToken(url, token);
};
const fetchPerfumes = async (token) => {
  const url = "https://dummyjson.com/perfumes";
  return fetchDataWithToken(url, token);
};

export { fetchProducts, fetchPerfumes };
