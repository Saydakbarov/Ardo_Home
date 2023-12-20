import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/ProductCard.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { BestSellerData } from "../../data";

export default function ProductsCard() {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container justifyContent={"center"} gap={4}>
        <Grid item lg={11} md={11} sm={11} xs={11}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            <Grid justifyContent={"center"}>
              {BestSellerData.map((v, i) => (
                <Grid item key={v.id} sx={{ borderRadius: "6px" }}>
                  <SwiperSlide className="swiperSlideBox">
                    <Box
                      sx={{
                        boxShadow: "0px 5px 10px 0px gray",
                        borderRadius: "6px",
                      }}
                    >
                      <Box
                        component={"div"}
                        sx={{
                          p: 3,
                          backgroundImage: `url(${v.img})`,
                          backgroundPosition: "center",
                          backgroundSize: "100%",
                          height: "300px",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignitems: "center",
                          }}
                        >
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
                            }}
                          >
                            -{v.percentage}%
                          </Box>
                        </Box>
                        {/* <Box className="changeCard" sx={{ p: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "15px",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              fullWidth
                              variant="contained"
                              color="inherit"
                              //   onClick={() => {
                              //     getProductData(v);
                              //   }}
                            >
                              Add To Card
                            </Button>
                          </Box>
                        </Box>  */}
                      </Box>
                      <Box>
                        <Box sx={{ background: "#ffff", borderRadius: "6px" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 1,
                            }}
                          >
                            <Typography
                              sx={{ fontSize: "18px", color: "black" }}
                            >
                              Decor
                            </Typography>
                            {/* <Rating
                              name="simple-controlled"
                              value={ratingValue}
                              onChange={(event, newValue) => {
                                setRatingValue(newValue);
                              }}
                              sx={{ fontSize: "16px" }}
                            /> */}
                          </Box>

                          {/* <Box
                            sx={{ display: "flex", gap: "15px", mt: 1, p: 1 }}
                          >
                            <Typography
                              sx={{
                                color: "red",
                                display: v.percentage === 0 ? "none" : "block",
                              }}
                            >
                              $
                              {v.price -
                                Math.round((v.price * v.percentage) / 100)}
                              .00
                            </Typography>
                            <Typography
                              sx={{
                                color: v.percentage === 0 ? "red" : "gray",
                                textDecoration:
                                  v.percentage === 0 ? "none" : "line-through",
                              }}
                            >
                              ${v.price}.00
                            </Typography>
                          </Box> */}
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                </Grid>
              ))}
            </Grid>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
