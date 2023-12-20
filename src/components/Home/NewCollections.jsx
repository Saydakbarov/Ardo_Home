import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { NewCollectionData } from "../../data";

import "./styles/NewsCollection.scss";
import { Add, Remove } from "@mui/icons-material";

export default function NewCollections() {
  const [id, setId] = useState();

  const [limit, setLimit] = useState(4);

  const [close, setClose] = useState(false);

  console.log(limit);

  return (
    <Box sx={{ mt: 8 }} className="globalContainer">
      <Typography
        sx={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
      >
        New Collections
      </Typography>

      <Grid container justifyContent={"center"} gap={4} mt={5}>
        {NewCollectionData?.slice(0, limit).map((v, i) => (
          <Grid
            item
            lg={2.5}
            md={2.5}
            sm={5.3}
            xs={10}
            key={v.id}
            sx={{
              boxShadow: "0px 5px 10px 0px gray",
              borderRadius: "6px",
            }}
            className="newsCollection"
          >
            <Box
              component={"div"}
              sx={{
                height: { xs: "300px", sm: "400px", md: "500px" },
                position: "relative",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={v.img}
                alt=""
                className="newsCollectionImg"
              />
              <Box
                sx={{
                  p: 2,
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {v.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center" }}>
        {!close ? (
          <Button
            endIcon={<Add />}
            variant="outlined"
            sx={{ mt: 4 }}
            onClick={() => {
              setLimit((prev) => prev + 4);
              if (limit === NewCollectionData.length - 4) {
                setClose(true);
              }
            }}
          >
            подробнее
          </Button>
        ) : (
          <Button
            endIcon={<Remove />}
            variant="outlined"
            sx={{ mt: 4 }}
            onClick={() => {
              setLimit((prev) => prev - 4);

              if (limit === 8) {
                setClose(false);
              }
            }}
          >
            скрыть
          </Button>
        )}
      </Box>
    </Box>
  );
}
