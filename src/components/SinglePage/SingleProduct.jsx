import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import Video4 from "../../video/video4.mp4";
import SingleBox from "./SingleBox";
import SingleImageBox from "./SingleImageBox";

export default function SingleProduct({data}) {

  const [activeImage, setActiveImage] = useState("")


  useMemo(() => {
    if(data) {
      setActiveImage(data?.data?.product_image_url?.[0])
    }
  }, [data])

  return (
    <Box>
      <Grid container justifyContent={"center"} gap={4}>
        <Grid item lg={4}>
          <img src={activeImage} style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "6px" }} alt="" />
          {/* <video
            style={{ width: "100%", borderRadius: "6px" }}
            autoPlay
            muted
            loop
          >
            <source src={Video4} type="video/mp4" />
          </video> */}

          <SingleImageBox data={data}   setActiveImage={setActiveImage} />
        </Grid>
        <Grid item lg={5}>
          <Typography sx={{ fontSize: "50px", fontFamily: "Inter" }}>
            {data?.data?.product_title_uz}
          </Typography>

          <p dangerouslySetInnerHTML={{__html:  data?.data?.product_model_uz}} className="product_model">
          </p>

          {/* <SingleBox text={"Grammage m2"} title={"310 g/m² +/-5%"} />
          <SingleBox text={"Composition"} title={"100% Polyester"} />
          <SingleBox text={"Usable width"} title={"min. 140cm"} />
          <SingleBox text={"Martindale Test"} title={"30000-35000"} />
          <SingleBox text={"Tendency to pilling and peeling"} title={"4-5"} />
          <SingleBox
            text={"Fastness to rubbing dry"}
            title={"light-4-5 / medium-4-5 / dark-4-5"}
          />
          <SingleBox
            text={"Fastness to rubbing wet"}
            title={"light-4-5 / medium-4-5 / dark-4"}
          />
          <SingleBox
            text={"Thread displacement"}
            title={"3,0-3,6 mm WARP / 2,2-2,6 mm WEFT"}
          /> */}

          {/* <Button
            variant="outlined"
            sx={{ borderColor: "black", color: "black", mt: 1 }}
          >
            Buy Now
          </Button> */}
        </Grid>
      </Grid>
    </Box>
  );
}
