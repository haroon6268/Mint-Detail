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
import BookButton from "./BookButton";
import { Padding } from "@mui/icons-material";
export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        zIndex: 3,
        position: "sticky",
        top: "0",
      }}
    >
      <AppBar position="sticky" top={0} sx={{ backgroundColor: "#1d192e" }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center" justifyContent="center">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "#97e1b0" }}
              >
                <MenuIcon />
              </IconButton>
              <img
                src="https://ik.imagekit.io/haroon2003/Mint/mint.png?updatedAt=1719000477401"
                style={{ height: "40px" }}
              />
            </Stack>
            <BookButton margin={1} />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
