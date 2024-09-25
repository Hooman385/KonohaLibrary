import { Grid, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import CategorySlide from "./CategorySlide";
import { categorySamples } from "@/categories";
import NextLink from "next/link";

const CategorySamples = () => {
  const [clientWidth, setClientWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setClientWidth(document.documentElement.clientWidth);

    const handleResize = () => {
      setClientWidth(document.documentElement.clientWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <>
      {clientWidth && clientWidth > 600 && (
        <motion.div
          variants={framerContainer}
          initial="hidden"
          animate="visible"
        >
          <Grid
            container
            columnSpacing={1}
            sx={{
              overflow: "hidden",
            }}
          >
            {categorySamples.map((item) => (
              <Grid
                item
                component={motion.div}
                variants={framerItem}
                key={item.name}
                sm={12}
                md={6}
                lg={4}
                sx={{
                  "&:nth-child(2)": {
                    xs: { display: "none" },
                    md: { display: "block" },
                  },
                  "&:nth-child(3)": {
                    xs: { display: "none" },
                    lg: { display: "block" },
                  },
                }}
              >
                <Link component={NextLink} href={item.href} underline="none">
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
        </motion.div>
      )}
      {clientWidth && clientWidth <= 600 && <CategorySlide />}
    </>
  );
};

export default CategorySamples;
