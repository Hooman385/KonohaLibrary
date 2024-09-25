"use client";

import { Box, Stack, Typography } from "@mui/material";

import { StatusAccordion } from "./StatusAccordion";
import { RanksAccordion } from "./RanksAccordion";
import { GendersAccordion } from "./GendersAccordion";
import { VillagesAccordion } from "./VillagesAccordion";

const CharactersSideBar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        position: "sticky",
        top: "80px",
        height: "calc(100dvh - 200px)",
        paddingRight: "10px",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "@supports (-webkit-sticky: sticky)": {
          position: "-webkit-sticky",
        },
      }}
    >
      <Stack
        sx={{
          borderRadius: "8px",
          width: "260px",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3, textAlign: "center" }}>
          Filter options
        </Typography>

        <StatusAccordion />
        <RanksAccordion />
        <GendersAccordion />
        <VillagesAccordion />
      </Stack>
    </Box>
  );
};

export default CharactersSideBar;
