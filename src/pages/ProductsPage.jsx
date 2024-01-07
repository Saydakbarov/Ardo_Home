import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import ProductMain from "../components/Products/ProductMain";
import ProductContainer from "../components/Products/ProductContainer";
import { postHomeFilteredProducts } from "../data/data.fn";
import {
  useHomeBrands,
  useHomeCategories,
  useHomeSecondsubcategories,
  useHomeSubCategoriesById,
} from "../data/data.service";

export default function ProductsPage() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [secondsubcategory, setSecondsubcategory] = useState(null);
  const [brand, setBrand] = useState([]);
  const [search, setSearch] = useState("");

  const { data: categories } = useHomeCategories();
  const { data: subcategories } = useHomeSubCategoriesById(category);
  const { data: secondsubcategories } = useHomeSecondsubcategories(subcategory);
  const { data: brands } = useHomeBrands({ limit: 100, offset: 0 });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await postHomeFilteredProducts({
        params: { limit: 20, offset },
        body: {
          ...(category && { category_id: category }),
          ...(subcategory && { sub_category_id: subcategory }),
          ...(secondsubcategory && { second_sub_category_id: secondsubcategory }),
          search_uz: search,
          brand_id: brand,
        },
      });

      setData(res?.data ?? []);
      setIsLoading(false)
    };
    fetchData();
  }, [category, subcategory, secondsubcategory, search, brand, offset]);

  return (
    <Box>
      <HeaderMenu />
      <ProductMain />
      <ProductContainer
        categories={categories}
        subcategories={subcategories}
        secondsubcategories={secondsubcategories}
        brands={brands}
        category={category}
        setCategory={setCategory}
        subcategory={subcategory}
        setSubcategory={setSubcategory}
        secondsubcategory={secondsubcategory}
        setSecondsubcategory={setSecondsubcategory}
        brand={brand}
        setBrand={setBrand}
        search={search}
        setSearch={setSearch}
        setOffset={setOffset}
        data={data}
        isLoading={isLoading}
      />
      <Footer />
    </Box>
  );
}
