import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import SingleMain from "../components/SinglePage/SingleMain";
import SingleProduct from "../components/SinglePage/SingleProduct";
import { useParams } from "react-router-dom";
import { useHomeSingleProduct } from "../data/data.service";

export default function SinglePage() {

  const {id} = useParams()


  const {data, isLoading} = useHomeSingleProduct(id)

  console.log(data, "sadasd");


  return (
    <Box>
      <HeaderMenu />
      <SingleMain />
      <SingleProduct data={data} />
      <Footer />
    </Box>
  );
}
