import { Box, Grid, IconButton, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NewsPageProduct } from "../../data";
import { useNews } from "../../dataQuery/data.server";

export default function NewsProductCard({ lang }) {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const { data, isFetching } = useNews({ limit, offset });

  console.log(data);
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container justifyContent={"center"} gap={4}>
        {isFetching ? (
          <Typography
            style={{
              fontSize: "25px",
              display: "block",
              textAlign: "center",
              margin: "40px 0",
            }}
          >
            {"Загрузка..."}
          </Typography>
        ) : (
          NewsPageProduct?.map((v, i) => (
            <Grid item lg={2.5} md={3} sm={5} xs={10}>
              <Box>
                <Box
                  sx={{
                    p: 3,
                    backgroundImage: `url(${v.img})`,
                    height: "260px",
                    backgroundRepeat: "no-repeat",
                    borderTopRightRadius: "8px",
                    borderBottomLeftRadius: "8px",
                    backgroundSize: "100%",
                  }}
                ></Box>
                <Box>
                  <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
                    {/* {lang == "ru"
                    ? v.new_title_ru
                    : lang == "uz"
                    ? v.new_title_uz
                    : lang == "en"
                    ? v.new_title_en
                    : ""} */}
                    {v.title}
                  </Typography>
                  <Typography sx={{ mt: 2, fontSize: "14px" }}>
                    {/* {lang == "ru"
                    ? v.new_description_ru
                    : lang == "uz"
                    ? v.new_description_uz
                    : lang == "en"
                    ? v.new_description_en
                    : ""} */}
                    {v.desciption}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
