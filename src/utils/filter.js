export const searchFilter = (res, word, isCategory) => {
  if (!word) {
    return { productList: res };
  } else if (isCategory === 'all') {
    return {
      productList: res.filter((data) => {
        if (data.title.toLowerCase().includes(word.toLowerCase())) {
          return data.title.toLowerCase().includes(word.toLowerCase());
        } else if (data.brand.toLowerCase().includes(word.toLowerCase())) {
          return data.brand.toLowerCase().includes(word.toLowerCase());
        } else if (
          data.description.toLowerCase().includes(word.toLowerCase())
        ) {
          return data.description.toLowerCase().includes(word.toLowerCase());
        }
        return null;
      }),
    };
  } else if (isCategory === 'title') {
    return {
      productList: res.filter((data) => {
        return data.title.toLowerCase().includes(word.toLowerCase());
      }),
    };
  } else if (isCategory === 'brand') {
    return {
      productList: res.filter((data) => {
        return data.brand.toLowerCase().includes(word.toLowerCase());
      }),
    };
  } else if (isCategory === 'description') {
    return {
      productList: res.filter((data) => {
        return data.description.toLowerCase().includes(word.toLowerCase());
      }),
    };
  }
};
