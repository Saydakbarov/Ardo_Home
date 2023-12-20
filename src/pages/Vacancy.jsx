import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import VacancyMain from "../components/vacancy/VacancyMain";
import VacancyForm from "../components/vacancy/VacancyForm";


export default function VacancyPage() {
  return (
    <Box>
      <HeaderMenu />
      <VacancyMain />
      <VacancyForm />
      <Footer />
    </Box>
  );
}
