import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import NewsMain from "../components/News/NewsMain";
import NewsProducts from "../components/News/NewsProducts";
import { useHomeNews } from "../data/data.service";

export default function NewsPage() {

  const {data, isLoading} = useHomeNews({limit: 100, offset: 0})

  return (
    <Box>
      <HeaderMenu />
      <NewsMain />
      <NewsProducts isLoading={isLoading} data={data?.data ?? []} />
      <Footer />
    </Box>
  );
}
