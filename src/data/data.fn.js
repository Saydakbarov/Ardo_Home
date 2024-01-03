import axios from "../utils/axios"


// ARDOHOME

// CATEGORIES

export const getHomeCategories = async () =>
  axios
    .get("furniture/categories")
    .then((res) => res.data)
    .catch((err) => err);

// SUBCATEGORIES

export const getHomeSubCategoriesById = async (id) => {
  try {
    const res = await axios.get("furniture/subcategories", {
      params: {
        categoryId: id,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHomeSubcategories = async () =>
  axios
    .get("furniture/subcategories")
    .then((res) => res.data)
    .catch((err) => err);

// SECONDSUBCATEGORIES

export const getHomeSecondsubcategories = async () =>
  axios
    .get("furniture/second-subcategories")
    .then((res) => res.data)
    .catch((err) => err);


// BRANDS

export const getHomeBrands = async ({ limit, offset }) => {
  return axios
    .get("furniture/brands/list", {
      params: {
        limit,
        offset,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
};


//  PRODUCTS

export const getHomeProducts = async ({ limit, offset }) =>
  axios
    .get("furniture/products/admin/list", {
      params: {
        limit,
        offset,
      },
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => res.data)
    .catch((err) => err);

export const postHomeFilteredProducts = async ({ params, body }) => {
  try {
    const res = await axios.post("furniture/products/list", body, {
      params,
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
};


// NEWS

export const getHomeNews = async ({ limit, offset }) => {
  return axios
    .get("furniture/news/list", {
      params: {
        limit,
        offset,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
};


// ARDOHOME
