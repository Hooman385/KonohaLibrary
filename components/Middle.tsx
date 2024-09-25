import { Box, Button, Stack, Typography, Link } from "@mui/material";
import MyContainer from "./MyContainer";

const Middle = () => {
  return (
    <MyContainer>
      <Stack
        sx={{
          height: { xs: "calc(100dvh - 56px)", sm: "calc(100dvh - 64px)" },
          position: "relative",
          backgroundImage: "url('/assets/images/bg7.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1280px", margin: "30px auto" }}>
          <Stack
            spacing={3}
            alignItems="center"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.7 )",
              backdropFilter: "blur(4px)",
              padding: 3,
              borderRadius: 3,
              maxHeight: "500px",
              marginTop: "50px",
              textAlign: "center",
            }}
          >
            <Box
              src="/assets/images/naruto-laptop.png"
              sx={{
                width: { xs: "150px", sm: "200px" },
                height: { xs: "150px", sm: "200px" },
                objectFit: "cover",
              }}
              alt="naruto looking at his laptop"
              component={"img"}
            />

            <Typography
              variant="h3"
              mb={1}
              sx={{ fontSize: { xs: "24px", sm: "28px", md: "48px" } }}
            >
              Powered by NarutoDB
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                padding: { xs: 1, md: 3 },
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
              }}
            >
              NarutoDB API provides a comprehensive database of all the
              Characters, Clans, Villages, Kekkeigenkai, Tailed Beasts, Teams,
              Akatsuki, and Kara members from the most awesome anime and manga
              series, Naruto.
            </Typography>
            <Button color="warning" size="medium" variant="contained">
              <Link
                underline="hover"
                color="inherit"
                href="https://narutodb.xyz/"
                target="_blank"
              >
                Learn more about them
              </Link>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </MyContainer>
  );
};

export default Middle;
