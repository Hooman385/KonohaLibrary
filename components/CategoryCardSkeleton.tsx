import { Skeleton, Stack } from "@mui/material";

const CategoryCardSkeleton = () => {
  return (
    <Stack
      sx={{
        width: "260px",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <Skeleton
        sx={{ borderRadius: 1 }}
        variant="rectangular"
        height="140px"
        animation="wave"
      />
      <Skeleton
        sx={{ borderRadius: 1 }}
        variant="text"
        height="30px"
        animation="wave"
      />
      <Skeleton
        sx={{ borderRadius: 1 }}
        variant="text"
        height="30px"
        animation="wave"
      />
      <Skeleton
        sx={{ borderRadius: 1 }}
        variant="text"
        height="30px"
        animation="wave"
      />
    </Stack>
  );
};

export default CategoryCardSkeleton;
