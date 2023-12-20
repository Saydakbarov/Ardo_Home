import { Box, Typography } from "@mui/material";
import React from "react";
import { BestSellerData } from "../../data";

import "./Style/ProductBox.scss";

export default function ProductBox() {
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
      {BestSellerData.map((v, i) => (
        <>
          <div>
            <article class="card">
              <header class="card__thumb">
                <img src={v.img} />
              </header>

              <div class="card__body">
                <h2 class="card__title">
                  <a href="#">{v.title}</a>
                </h2>
                <p class="card__description">{v.description}</p>
                <Typography
                  class="card__price"
                  sx={{ color: "red", fontSize: "20px" }}
                >
                  Price: {v.price} $
                </Typography>
              </div>
            </article>
          </div>
        </>
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
