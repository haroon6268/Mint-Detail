import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
export default function ButtonAppBar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: 0,
          width: "100vw",
          zIndex: 3,
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: "#1d192e" }}>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <Stack direction="row">
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2, color: "#97e1b0" }}
                >
                  <MenuIcon />
                </IconButton>
                <img src="/src/assets/mint.png" style={{ height: "40px" }} />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  sx={{
                    width: "10rem",
                    backgroundColor: "#97e1b0",
                    ":hover": {
                      backgroundColor: "#76b38a",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </motion.div>
  );
}
