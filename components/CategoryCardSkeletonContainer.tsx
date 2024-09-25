import { Grid } from "@mui/material";
import React from "react";
import CategoryCardSkeleton from "./CategoryCardSkeleton";

const CategoryCardSkeletonContainer = ({ id }: { id: number }) => {
  return (
    <>
      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={3}
      >
        <CategoryCardSkeleton />
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <CategoryCardSkeleton />
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <CategoryCardSkeleton />
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <CategoryCardSkeleton />
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <CategoryCardSkeleton />
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <CategoryCardSkeleton />
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <CategoryCardSkeleton />
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <CategoryCardSkeleton />
      </Grid>
    </>
  );
};

export default CategoryCardSkeletonContainer;
