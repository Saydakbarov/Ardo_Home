import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductBox from "../Products/ProductBox";
import { postHomeFilteredProducts } from "../../data/data.fn";

export default function BestSeller() {


  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const res = await postHomeFilteredProducts({params: {limit: 8, offset: 0}, body: {}})
      setData(res?.data ?? [])
    }
    fetchData()
  }, [])

  return (
    <Box sx={{ textAlign: "center", mt: 12 }} className="globalContainer">
      <Typography
        sx={{ fontSize: "34px", fontWeight: "600", textAlign: "center" }}
      >
        Our Products
      </Typography>

      <ProductBox data={data} />
    </Box>
  );
}
