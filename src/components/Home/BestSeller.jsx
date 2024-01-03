import { Box, Typography } from "@mui/material";
import React from "react";
import ProductBox from "../Products/ProductBox";

export default function BestSeller() {
  return (
    <Box sx={{ textAlign: "center", mt: 12 }} className="globalContainer">
      <Typography
        sx={{ fontSize: "34px", fontWeight: "600", textAlign: "center" }}
      >
        Our Products
      </Typography>

      <ProductBox />
    </Box>
  );
}
