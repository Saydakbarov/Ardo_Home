import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CategoryData } from "../../data";
import ProductBox from "./ProductBox";

export default function ProductContainer({
  categories,
  subcategories,
  secondsubcategories,
  brands,
  category,
  setCategory,
  subcategory,
  setSubcategory,
  secondsubcategory,
  setSecondsubcategory,
  brand,
  setBrand,
  search,
  setSearch,
  setOffset,
  data,
  isLoading,
}) {
  const [offsetNum, setOffsetNum] = useState(1);
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
              <button
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  display: category ? "block" : "none",
                  border: "none",
                  background: "none",
                  marginBottom: "16px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (secondsubcategory) {
                    setSecondsubcategory(null);
                  } else if (subcategory) {
                    setSubcategory(null);
                  } else {
                    setCategory(null);
                  }
                }}
              >
                {"< Back"}
              </button>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                {!category
                  ? "Categories"
                  : !subcategory
                  ? categories?.data?.find((el) => el?.category_id == category)
                      ?.category_name_uz
                  : subcategories?.data?.find(
                      (el) => el?.sub_category_id == subcategory
                    )?.sub_category_name_uz}
              </Typography>

              <Box
                sx={{
                  display: !!category ? "none" : "flex",
                  flexDirection: "column",
                }}
              >
                {categories?.data?.map((v, i) => (
                  <Typography
                    onClick={() => setCategory(v?.category_id)}
                    sx={{ cursor: "pointer", mt: 1, fontSize: "17px" }}
                  >
                    {v?.category_name_uz}
                  </Typography>
                ))}
              </Box>
              <Box
                sx={{
                  display: !!subcategory ? "none" : "flex",
                  flexDirection: "column",
                }}
              >
                {subcategories?.data?.map((v, i) => (
                  <Typography
                    onClick={() => setSubcategory(v?.sub_category_id)}
                    sx={{ cursor: "pointer", mt: 1, fontSize: "17px" }}
                  >
                    {v?.sub_category_name_uz}
                  </Typography>
                ))}
              </Box>
              <Box
                sx={{
                  display: subcategory ? "flex" : "none",
                  flexDirection: "column",
                }}
              >
                {secondsubcategories?.data?.map((v, i) => (
                  <Typography
                    onClick={() =>
                      setSecondsubcategory(v?.second_sub_category_id)
                    }
                    sx={{
                      cursor: "pointer",
                      mt: 1,
                      fontSize: "17px",
                      textDecoration:
                        v?.second_sub_category_id == secondsubcategory
                          ? "underline"
                          : "none",
                    }}
                  >
                    {v?.second_sub_category_name_uz}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Brand
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {brands?.data?.map((item) => (
                  <FormControlLabel
                    key={item?.brand_id}
                    control={
                      <Checkbox
                        checked={brand?.includes(item?.brand_id)}
                        onChange={() => {
                          if (brand?.includes(item?.brand_id)) {
                            setBrand((prev) =>
                              prev?.filter((el) => el != item?.brand_id)
                            );
                          } else {
                            setBrand((prev) => [...prev, item?.brand_id]);
                          }
                        }}
                      />
                    }
                    label={item?.brand_name}
                  />
                ))}
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
              label="Search...."
              variant="standard"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {isLoading ? (
              <Typography sx={{ display: "block", textAlign: "center", mt: 3 }}>
                Loading...
              </Typography>
            ) : (
              <ProductBox data={data} />
            )}
            <Stack
              sx={{
                mx: "auto",
                width: "fit-content",
              }}
              mt={3}
              direction={"row"}
              spacing={2}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  setOffset((e) => e - 20);
                  setOffsetNum((e) => e - 1);
                }}
                disabled={offsetNum == 1}
                sx={{ transform: "rotate(180deg)" }}
              >
                <NavigateNextIcon />
              </Button>
              <Typography style={{ fontSize: "20px" }}>{offsetNum}</Typography>
              <Button
                variant="outlined"
                disabled={data?.length < 20}
                onClick={() => {
                  setOffset((e) => e + 20);
                  setOffsetNum((e) => e + 1);
                }}
              >
                <NavigateNextIcon />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
