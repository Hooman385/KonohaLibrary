"use client";
import { Box, Grid, Stack, TextField, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";
import CategoryCard from "../../../components/CategoryCard";
import CategoriesSearchBox from "./CategoriesSearchBox";
import CategoryCardSkeletonContainer from "../../../components/CategoryCardSkeletonContainer";
import { categories } from "../../../categories";
import SearchBox from "@/components/SearchBox";
import NextLink from "next/link";

const Categories = () => {
  const framerContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const framerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Stack
      gap={10}
      sx={{
        paddingY: 10,
        width: { lg: "1200px" },
        maxWidth: "1280px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      {/* <CategoriesSearchBox /> */}
      {/* <SearchBox /> */}
      <Typography variant="h2" sx={{ fontWeight: "400" }}>
        All categories provided by NarutoDB
      </Typography>
      <Grid
        variants={framerContainer}
        initial="hidden"
        animate="visible"
        component={motion.div}
        container
        // columnSpacing={10}
        rowSpacing={4}
        justifyContent="start"
      >
        {categories.map((item, index) => (
          <Grid
            item
            key={index}
            component={motion.div}
            variants={framerItem}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href={item.href}
              component={NextLink}
              underline="none"
              color="inherit"
            >
              <CategoryCard
                image={`/assets/images/category-images/${item.name}.jpg`}
                title={`${
                  item.name.substring(0, 1).toUpperCase() +
                  item.name.slice(1).split("-").join(" ")
                } `}
                desc={item.desc}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Categories;
