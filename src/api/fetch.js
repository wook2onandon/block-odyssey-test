// export const fetchProduct = async () => {
//   const res = await fetch('https://dummyjson.com/products?limit=100');
//   const data = await res.json();
//   // console.log(data.products);
//   return data.products;
// };

export const fetchProduct = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=100');
  const data = await response.json();
  return data.products;
};
