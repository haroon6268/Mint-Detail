import { Box, Stack, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";

const Hygiene = ({ title, text, img, reverse }) => {
  if (reverse) {
    return (
      <Stack
        direction={{ lg: "row", xs: "column-reverse" }}
        sx={{
          padding: 1,
          marginTop: 1,
          justifyContent: "center",
          alignItems: { lg: "center" },
          minHeight: "700px",
        }}
        spacing={3}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              height: { lg: "500px", xs: "300px" },
              width: { lg: "500px", xs: "300px" },
            }}
          >
            <img
              src={img}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: "2rem",
              }}
            ></img>
          </Box>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Stack
            sx={{
              justifyContent: "center",
            }}
            direction={{ xs: "column" }}
            spacing={2}
            width={{ lg: "600px" }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#1d192e"
              textAlign="left"
            >
              {title}
            </Typography>

            <Typography variant="p" color="333" textAlign="left">
              {text}
            </Typography>
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
        </motion.div>
      </Stack>
    );
  }
  return (
    <Stack
      direction={{ lg: "row", xs: "column" }}
      sx={{
        padding: 1,
        marginTop: 1,
        justifyContent: "center",
        alignItems: { lg: "center" },
        minHeight: "700px",
      }}
      spacing={3}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Stack
          sx={{
            justifyContent: "center",
          }}
          direction={{ xs: "column" }}
          spacing={2}
          width={{ lg: "600px" }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="#1d192e"
            textAlign="left"
          >
            {title}
          </Typography>
          <Typography variant="p" color="333" textAlign="left">
            {text}
          </Typography>
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
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            height: { lg: "500px", xs: "300px" },
            width: { lg: "500px", xs: "300px" },
          }}
        >
          <img
            src={img}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              borderRadius: "2rem",
            }}
          ></img>
        </Box>
      </motion.div>
    </Stack>
  );
};

export default Hygiene;
