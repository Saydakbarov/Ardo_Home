import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import ProductMain from "../components/Products/ProductMain";
import ProductContainer from "../components/Products/ProductContainer";

export default function ProductsPage() {
  return (
    <Box>
      <HeaderMenu />
      <ProductMain />
      <ProductContainer />
      <Footer />
    </Box>
  );
}
