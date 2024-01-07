import { useQuery } from "@tanstack/react-query";
import {
  getHomeBrands,
  getHomeCategories,
  getHomeNews,
  getHomeProducts,
  getHomeSecondsubcategories,
  getHomeSingleProduct,
  getHomeSubCategoriesById,
  getHomeSubcategories,
  getTexNumbers,
  getTexPartners,
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
    queryKey: ["home/subcategoriesById", id],
    enabled: !!id
  });

//  SECONDSUBCATEGORIES

export const useHomeSecondsubcategories = (id = "") =>
  useQuery({
    queryFn: () => getHomeSecondsubcategories(id),
    queryKey: ["home/secondsubcategories", id],
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


  export const useHomeSingleProduct = (id) => useQuery({
    queryFn: () => getHomeSingleProduct(id),
    queryKey: [`home/products/${id}`],
    enabled: !!id
  })

// ARDOHOME

export const useTexPartners = () =>
  useQuery({ queryFn: getTexPartners, queryKey: ["tex/partners"] });

export const useTexNumbers = () =>
  useQuery({ queryFn: getTexNumbers, queryKey: ["tex/numbers"] });
