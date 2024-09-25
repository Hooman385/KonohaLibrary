import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import NextLink from "next/link";

type PropTypes = {
  container: HTMLElement | undefined;
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  navLinks: { name: string; path: string }[];
};

const MobileNavbar = ({
  container,
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  navLinks,
}: PropTypes) => {
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
    <Drawer
      anchor="right"
      variant="temporary"
      container={container}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Stack onClick={handleDrawerToggle} spacing={2} sx={{ padding: "10px" }}>
        <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
          <Box
            component={"img"}
            src="/assets/images/logo.png
                  "
            sx={{ height: "50px", width: "50px" }}
          ></Box>
          <Typography variant="h6">NarutoDB</Typography>
        </Stack>
        <Divider />
        <motion.div
          variants={framerContainer}
          initial="hidden"
          animate={mobileOpen && "visible"}
        >
          <List>
            {navLinks.map((item) => (
              <motion.div key={item.name} variants={framerItem}>
                <Link color="inherit" underline="none" component={NextLink} href={item.path}>
                  <ListItem disableGutters disablePadding>
                    <ListItemButton sx={{ borderRadius: "7px" }}>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </motion.div>
            ))}
          </List>
        </motion.div>
      </Stack>
    </Drawer>
  );
};

export default MobileNavbar;
