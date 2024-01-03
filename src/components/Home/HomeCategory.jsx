import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import ArdoHomeLogo from "../../ArdoHomeLogo.png";

import { Link } from "react-router-dom";

export default function HomeCategory() {
  return (
    <Box sx={{ mt: 14 }} className="globalContainer">
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100px",
            cursor: "pointer",
          }}
          src={ArdoHomeLogo}
          alt=""
        />
        <Typography sx={{ fontSize: "34px", color: "gold" }}>
          Products
        </Typography>
      </Box>

      <Grid container justifyContent={"center"} sx={{ mt: 8 }} gap={5}>
        {/* <Grid item lg={2} md={4} sm={5.5} xs={10} sx={{ height: "auto" }}>
          <Box
            sx={{
              background: "linear-gradient( #DCE9EC, #E8F0F3)",
              height: { xs: "200px", sm: "100%", md: "93%", lg: "93%" },
              p: 2,
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
            }}
          >
      
      
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src="https://emaks.com.tr/index-slider/as4.png"
              alt=""
            />
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              background: "linear-gradient( #DCE9EC, #E8F0F3)",
              height: "200px",
              p: 2,
              borderRadius: "3px",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.linkpicture.com/q/2-removebg-preview_19.png"
              alt=""
              style={{
                width: "280px",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              background: "linear-gradient( #DCE9EC, #E8F0F3)",
              height: "200px",
              mt: 3,
              p: 2,
              borderRadius: "3px",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.linkpicture.com/q/3-removebg-preview_15.png"
              alt=""
              style={{
                width: "280px",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              background: "linear-gradient( #DCE9EC, #E8F0F3)",
              height: "200px",
              p: 2,
              borderRadius: "3px",
              textAlign: "center",
            }}
          >
            <img
              src="https://emaks.com.tr/index-slider/as3.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              background: "linear-gradient( #DCE9EC, #E8F0F3)",
              height: "200px",
              p: 2,
              borderRadius: "3px",
              textAlign: "center",
              mt: 3,
            }}
          >
            <img
              src="https://www.linkpicture.com/q/4-removebg-preview_7.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              background: "linear-gradient( #DCE9EC, #E8F0F3)",
              height: { xs: "200px", sm: "100%", md: "93%", lg: "93%" },
              p: 2,
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
            }}
          >
          
          
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src="https://emaks.com.tr/index-slider/as5.png"
              alt=""
            />
          </Box>
        </Grid> */}

        <Grid item lg={4} sx={{ borderRadius: "5px", background: "black" }}>
          <img
            style={{ width: "100%", borderRadius: "5px", height: "70%" }}
            src="https://store-furniture-online.oml.ru/thumb/2/kjNG90SsX0ksiYj_D5WW8g/1023r590/d/55211410_2.jpg"
            alt=""
          />
          <Box sx={{ p: 4 }}>
            <Typography sx={{ fontSize: "34px", color: "#ffff" }}>
              Скидка на мебель!
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "#ffff", mt: 2 }}>
              Только до середины октября скидки до 10% на всю мягкую мебель!
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          lg={6}
          sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}
        >
          <Box sx={{ width: "330px", borderRadius: "4px" }}>
            <img
              style={{ width: "100%", borderRadius: "4px" }}
              src="https://store-furniture-online.oml.ru/thumb/2/b86sZ9tt1hvCjYSUl-wsng/600c390/d/55217814_2.jpg"
              alt=""
            />
            <Link style={{ color: "#CAB19A" }}>
              Расставляем мебель в спальне красиво и удобно
            </Link>
            <Typography sx={{ mt: 2, color: "gray" }}>
              При расстановке мебели в спальной комнате стоит учитывать...
            </Typography>
          </Box>
          <Box sx={{ width: "330px", borderRadius: "4px" }}>
            <img
              style={{ width: "100%", borderRadius: "4px" }}
              src="https://store-furniture-online.oml.ru/thumb/2/b86sZ9tt1hvCjYSUl-wsng/600c390/d/55217814_2.jpg"
              alt=""
            />
            <Link style={{ color: "#CAB19A" }}>
              Расставляем мебель в спальне красиво и удобно
            </Link>
            <Typography sx={{ mt: 2, color: "gray" }}>
              При расстановке мебели в спальной комнате стоит учитывать...
            </Typography>
          </Box>
          <Box sx={{ width: "330px", borderRadius: "4px" }}>
            <img
              style={{ width: "100%", borderRadius: "4px" }}
              src="https://store-furniture-online.oml.ru/thumb/2/b86sZ9tt1hvCjYSUl-wsng/600c390/d/55217814_2.jpg"
              alt=""
            />
            <Link style={{ color: "#CAB19A" }}>
              Расставляем мебель в спальне красиво и удобно
            </Link>
            <Typography sx={{ mt: 2, color: "gray" }}>
              При расстановке мебели в спальной комнате стоит учитывать...
            </Typography>
          </Box>
          <Box sx={{ width: "330px", borderRadius: "4px" }}>
            <img
              style={{ width: "100%", borderRadius: "4px" }}
              src="https://store-furniture-online.oml.ru/thumb/2/b86sZ9tt1hvCjYSUl-wsng/600c390/d/55217814_2.jpg"
              alt=""
            />
            <Link style={{ color: "#CAB19A" }}>
              Расставляем мебель в спальне красиво и удобно
            </Link>
            <Typography sx={{ mt: 2, color: "gray" }}>
              При расстановке мебели в спальной комнате стоит учитывать...
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "end" }}>
        <Button variant="outlined" sx={{ mt: 4, mr: 12 }}>
          <Link
            to="https://ardotex.uz/"
            target="blank"
            style={{ textDecoration: "none", color: "blue" }}
          >
            подробнее
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
