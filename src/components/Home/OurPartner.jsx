import { Box, Container, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Home/styles/Partner.scss";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { PartnerData } from "../../data";
import { useTexPartners } from "../../data/data.service";
export default function OurPartner() {


  const {data, isLoading} = useTexPartners()

  return (
    <Box sx={{ mt: 8, background: "#E1ECEF", p: 3 }}>
      <Typography
        sx={{
          fontSize: "34px",
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
        }}
      >
        Our Partners
      </Typography>

      <Container sx={{ mt: 4 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          // style={{ marginTop: "50px" }}
        >
          {data?.data?.map((v, i) => (
            <SwiperSlide
              key={v?.partner_id}
              style={{
                width: "140px",
                height: "100px",
                padding: "10px 20px",
                background: "white",
                textAlign: "center",
                lineHeight: "140px",
              }}
            >
              <img style={{ width: "100px" }} src={v?.partner_image_link} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
