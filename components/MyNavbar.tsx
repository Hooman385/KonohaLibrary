"use client";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbar from "./MobileNavbar";
import { Naruto } from "@/app/fonts";

// Main navbar component

const MyNavbar = () => {
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  const drawerWidth = 240;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
    { name: "Categories", path: "/categories" },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [container, setContainer] = useState<HTMLElement | undefined>(
    undefined
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setContainer(document.body);
  }, []);
  return (
    <AppBar
      position="sticky"
      elevation={1}
      component={"nav"}
      sx={{
        // bgcolor: (theme) => theme.palette.narutoOrange?.main,
        bgcolor: "rgba(255, 152, 0, 0.8)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0px auto",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link underline="none" color="inherit" href="/" component={NextLink}>
            <Stack
              spacing={2}
              direction={"row"}
              sx={{ alignItems: "center", cursor: "pointer" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Box
                component={"img"}
                src="/assets/images/logo.png
            "
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  height: "50px",
                  transition: "all 0.3s ease-in-out",

                  // transform: isHovered
                  //   ? "translateX(-3px) translateY(-2px)"
                  //   : "none",
                  boxShadow: isHovered
                    ? "3px 3px 1px rgba(0, 0, 0, 0.6)"
                    : "none",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--font-naruto)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",

                  // transform: isHovered
                  //   ? "translateX(-3px) translateY(-2px)"
                  //   : "none",
                  textShadow: isHovered
                    ? "3px 3px 1px rgba(0, 0, 0, 0.6)"
                    : "1px 1px 2px black",
                }}
              >
                Konoha Library
              </Typography>
            </Stack>
          </Link>
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            spacing={2}
            direction={"row"}
          >
            {navLinks.map((item) => (
              <Button
                // underline="hover"
                color="inherit"
                key={item.name}
                href={item.path}
                component={NextLink}
                size="large"
                sx={{
                  // color: "#f5f5f5",
                  textShadow: "1px 1px 5px #404040",
                  fontWeight: "500",
                }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <MobileNavbar
            container={container}
            drawerWidth={drawerWidth}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            navLinks={navLinks}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
