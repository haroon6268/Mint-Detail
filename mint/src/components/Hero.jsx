import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import { X } from "@mui/icons-material";
const Hero = () => {
  const imgs = [
    "carousel1.png",
    "carousel2.png",
    "carousel4.png",
    "carousel5.png",
  ];
  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", lg: "90vh" },
        display: "flex",
        flexShrink: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "radial-gradient(125% 125% at 50% 0%, #1d192e 50%, #0d1b2a)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Stack
        spacing={6}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", lg: "row" }}
        maxWidth="1200px"
        marginTop={{ lg: 2, xs: 6 }}
      >
        <Stack spacing={2}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              color="white"
              variant="h2"
              textAlign="left"
              fontWeight="bold"
              overflow="hidden"
            >
              Mint Detail Makes Cars Shine
            </Typography>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography color="white" variant="h5" textAlign="left">
              Expert car detailing services at your convenience
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "10rem",
                backgroundColor: "#97e1b0",
                ":hover": {
                  backgroundColor: "#76b38a",
                },
                marginTop: 2,
              }}
            >
              Book Now
            </Button>
          </motion.div>
        </Stack>
        <Box maxWidth={{ xs: "90vw", lg: "50%" }} sx={{ overflowX: "auto" }}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Swiper
              spaceBetween={1}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={true}
            >
              {imgs.map((img, i) => {
                console.log(img);
                return (
                  <SwiperSlide
                    key={i}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      sx={{
                        height: { xs: "300px", lg: "500px" },
                        width: { xs: "300px", lg: "500px" },
                        borderRadius: "2rem",
                      }}
                    >
                      <img
                        src={`/src/assets/${img}`}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "2rem",
                          objectFit: "cover",
                        }}
                      ></img>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
