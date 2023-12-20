import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
import ProductBox from "./ProductBox";

export default function ProductContainer() {
  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <Box className="globalContainer" sx={{}}>
        <Grid
          container
          gap={3}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            lg={2}
            md={2}
            sm={10}
            xs={11}
            sx={{
              p: 2,
              border: "1px solid black",
              borderRadius: "10px 0px 10px 0px",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Category
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {CategoryData.map((v, i) => (
                  <Typography
                    sx={{ cursor: "pointer", mt: 1, fontSize: "17px" }}
                  >
                    {v}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Brand
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel control={<Checkbox />} label="Ardo_Home" />
              </Box>
            </Box>
          </Grid>

          <Grid
            lg={8.9}
            md={8.9}
            sm={11}
            xs={11}
            sx={{
              border: "1px solid black",
              borderRadius: "10px 0px 10px 0px",
              p: 2,
            }}
          >
            <TextField
              fullWidth
              id="standard-basic"
              label="Search...."
              variant="standard"
            />
            <ProductBox />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
