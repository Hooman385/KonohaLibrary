"use client";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";

import CategorySamples from "./CategorySamples";
import MyContainer from "./MyContainer";

const Hero = ({}) => {
  return (
    <MyContainer>
      <Stack
        sx={{
          height: { xs: "calc(100dvh - 56px)", sm: "calc(100dvh - 64px)" },
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          alignItems: { xs: "center", sm: "initial" },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          mb={1}
          sx={{
            fontSize: { xs: "24px", sm: "24px", md: "34px" },
            paddingX: 3,
            paddingTop: 10,
            color: "white",
            textAlign: { xs: "center", sm: "initial" },
          }}
        >
          Explore the World of Naruto Characters
          <br /> With Konoha Library
        </Typography>
        <Stack
          direction={"row-reverse"}
          sx={{
            position: "relative",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "relative",
              flex: 1,
              height: "500px",
            }}
          >
            <Image
              className="hero-img"
              src="/assets/images/hero.png"
              fill
              alt="hero bacckgorund image"
            />
          </Box>

          <Box
            sx={{
              // bgcolor: "rgba(255, 255, 255, 0.5)",
              // backdropFilter: "blur(5px)",
              // border: "solid 1px red",
              color: "white",
              paddingX: { xs: 0, sm: 3 },
              borderRadius: 3,
              height: "fit-content",
              flex: 2,
              marginTop: 5,
              textAlign: { xs: "center", sm: "initial" },
            }}
          >
            <CategorySamples />

            <Button
              component={NextLink}
              href="/categories"
              color="warning"
              variant="contained"
              size="large"
              sx={{ marginTop: 2 }}
            >
              Go to Categories
            </Button>
          </Box>
        </Stack>
      </Stack>
    </MyContainer>
  );
};

export default Hero;
