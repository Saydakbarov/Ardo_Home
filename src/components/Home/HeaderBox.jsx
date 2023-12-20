import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderBoxData } from "../../data";
import { Link } from "react-router-dom";

export default function HeaderBox() {
  return (
    <Box sx={{ mt: 8 }} className="globalContainer">
      <Grid container justifyContent={"center"} gap={2}>
        {HeaderBoxData.map((v, i) => (
          <Grid
            lg={3.9}
            md={5}
            sm={5}
            xs={10}
            key={v.id}
            item
            sx={{
              p: 2,
              display: "flex",
              background: "#F0F0F0",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "140px" }}>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={v.img}
                alt=""
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold", mt: 5 }}>
                {v.title}
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  color: "gray",
                  borderBottom: "1px solid red",
                }}
              >
                Show More
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
