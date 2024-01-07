import { Box } from "@mui/material";
import React from "react";

export default function SingleImageBox({ data, setActiveImage }) {
  return (
    <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 3 }}>
      {data?.data?.product_image_url?.map((v, i) => (
        <Box key={v} sx={{ width: "90px", height: "90px", cursor: "pointer" }} onClick={() => setActiveImage(v)} >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
            src={v}
            alt=""
          />
        </Box>
      ))}
    </Box>
  );
}
