import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/ProductCard.scss";

import "swiper/css/pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../../redux/ProductReducer";
import { LastestNewsCardData } from "../../data";

export default function LastestNewsCard({data}) {
  const [hoverImg, setHoverImg] = useState();

  const [id, setId] = useState();

  const [hover, setHover] = useState(false);

  //   const dispatch = useDispatch();
  //   const getProductData = (v) => {
  //     dispatch(addProduct(v));
  //   };

  console.log(id);
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
                slidesPerView: 3,
                spaceBetween: 60,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            <Grid justifyContent={"center"}>
              {data.map((v, i) => (
                <Grid item key={i} sx={{ borderRadius: "6px" }}>
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
                          backgroundImage: `url(${v?.new_img})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          height: "340px",
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
                          {/* <Box
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
                          </Box> */}
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
                          </Box> */}
                      </Box>
                      <Box>
                        <Box sx={{ background: "#fff", borderRadius: "6px" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                            }}
                          >
                            <Typography
                              sx={{ fontSize: "18px", color: "black" }}
                            >
                              {v?.new_title_uz}
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
