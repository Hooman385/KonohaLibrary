"use client";
import { IconButton, Stack, Typography, Link } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Footer = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        padding: 2,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(255, 152, 0, 0.8)",
        // marginTop: "auto",
      }}
    >
      <Stack sx={{ color: "white" }}>
        <Typography
          variant="body1"
          sx={{ textShadow: "1px 1px 2px black", fontWeight: "500" }}
        >
          Code by{" "}
          <Link
            underline="hover"
            color="inherit"
            href="https://github.com/Hooman385"
            target="_blank"
          >
            <strong>Hooman</strong>
          </Link>
        </Typography>
        {/* <Typography variant="body2">
          API by{" "}
          <Link
            underline="hover"
            color="inherit"
            href="https://narutodb.xyz/"
            target="_blank"
          >
            <strong>NarutoDB</strong>
          </Link>
        </Typography> */}
      </Stack>
      <IconButton
        onClick={() => window?.scrollTo(0, 0)}
        sx={{
          bgcolor: "warning.main",
          color: "white",
          "&:hover": { bgcolor: "warning.dark" },
        }}
      >
        <ArrowDropUpIcon />
      </IconButton>
    </Stack>
  );
};

export default Footer;
