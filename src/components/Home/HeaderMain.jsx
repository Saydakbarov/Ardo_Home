import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import "./styles/HeaderMain.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./styles/ProductCard.scss";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { HeaderCarousel } from "../../data";
export default function HeaderMain() {
  return (
    <Box sx={{ }}>
      <Box className="globalContainer">
        <Grid
          container
          justifyContent={{ xs: "center", sm: "center", md: "center" }}
          sx={{ p: 2 }}
        >
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
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
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 60,
                },
                1500: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              style={{ paddingBottom: "50px" }}
            >
              {HeaderCarousel.map((v, i) => (
                <SwiperSlide>
                  <Box
                    sx={{
                      textAlign: "center",
                      backgroundImage: `linear-gradient(to bottom, #00000054, #00000054) , url(${v.img}) `,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "600px",
                      pt: 10,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "28px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {v.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {v.text}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
