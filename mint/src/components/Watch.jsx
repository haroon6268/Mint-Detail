import { Box, Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Watch = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      minHeight="700px"
    >
      <Stack
        sx={{
          minHeight: "700px",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
        }}
        spacing={4}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          color="#1d192e"
        >
          Watch the <span style={{ color: "#97e1b0" }}>Mint</span> experience in
          Action!
        </Typography>
        <Box width={{ lg: "800px" }}>
          <video
            src="../assets/watch.mp4"
            style={{ height: "100%", width: "100%", overflow: "hidden" }}
            controls
          />
        </Box>
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
  );
};

export default Watch;
