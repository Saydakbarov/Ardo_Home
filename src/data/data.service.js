import {
  getHomeBrands,
  getHomeCategories,
  getHomeNews,
  getHomeProducts,
  getHomeSecondsubcategories,
  getHomeSubCategoriesById,
  getHomeSubcategories,
} from "./data.fn";

// ARDOHOME

// CATEGORIES

export const useHomeCategories = () =>
  useQuery({ queryFn: getHomeCategories, queryKey: ["home/categories"] });

//  SUBCATEGORIES

export const useHomeSubcategories = () =>
  useQuery({ queryFn: getHomeSubcategories, queryKey: ["home/subcategories"] });

export const useHomeSubCategoriesById = (id) =>
  useQuery({
    queryFn: () => getHomeSubCategoriesById(id),
    queryKey: ["home/subcategoriesById"],
  });

//  SECONDSUBCATEGORIES

export const useHomeSecondsubcategories = () =>
  useQuery({
    queryFn: getHomeSecondsubcategories,
    queryKey: ["home/secondsubcategories"],
  });

//  BRANDS

export const useHomeBrands = (params) =>
  useQuery({ queryFn: () => getHomeBrands(params), queryKey: ["home/brands"] });

//  NEWS

export const useHomeNews = (params) =>
  useQuery({ queryFn: () => getHomeNews(params), queryKey: ["home/news"] });

//  PRODUCTS

export const useHomeProducts = (params) =>
  useQuery({
    queryFn: () => getHomeProducts(params),
    queryKey: ["home/products"],
  });

// ARDOHOME
