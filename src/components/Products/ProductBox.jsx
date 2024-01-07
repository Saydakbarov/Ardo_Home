import { Box, Typography } from "@mui/material";
import React from "react";
import { BestSellerData } from "../../data";

import "./Style/ProductBox.scss";
import { Link } from "react-router-dom";

export default function ProductBox({data}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 3,
      }}
    >
      {data?.map((v, i) => (
          <div key={v?.product_id} >
            <article class="card">
              <header class="card__thumb">
                <img  src={v?.product_image_url?.[0]} />
              </header>

              <div class="card__body">
                <h2 class="card__title">
                  <Link to={"/single/" + v?.product_id}>{v?.product_title_uz}</Link>
                </h2>
                <p class="card__description">{v?.product_desc_uz}</p>
                <Typography
                  class="card__price"
                  sx={{ color: "red", fontSize: "20px" }}
                >
                  Price: {v?.product_price} $
                </Typography>
              </div>
            </article>
          </div>
      ))}
    </Box>
  );
}
{
  /* <Box
          sx={{
            position: "relative",
            width: "320px",

            ":hover": {
              background: "blue",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              color: "#fff !important",
              transform: "rotatex(0deg) rotatez(0deg)",
            },
          }}
          className="block"
        >
          <img
            style={{
              width: "100%",
              height: "340px",
              objectFit: "cover",
            }}
            src={v.img}
            alt=""
          />

          <Box sx={{ p: 1 }} className="productText">
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Decor
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "black",
              color: "#ffff",
              textAlign: "center",
              lineHeight: "50px",
              display: v.percentage === 0 ? "none" : "block",
              position: "absolute",
              top: "5%",
              left: "5%",
            }}
          >
            -{v.percentage}%
          </Box>
        </Box> */
}
