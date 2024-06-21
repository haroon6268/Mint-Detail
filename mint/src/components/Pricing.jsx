import { Box, Stack, Typography } from "@mui/material";
import PricingCard from "./PricingCard";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <Stack
      direction={{ lg: "row" }}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "1500px", lg: "600px" },
        padding: 1,
      }}
      spacing={6}
      rowGap={6}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Stack>
          <Typography variant="h3" color="#1d192e" fontWeight="bold">
            Auto Detailing Prices
          </Typography>
          <Typography variant="h6" color="#333" fontWeight="bold">
            We Come To You With Our Own Water & Electricity
          </Typography>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Stack direction={{ lg: "row" }} spacing={4} rowGap={4}>
          <PricingCard
            img="/src/assets/sedan1.webp"
            title="$149"
            text="Exterior & Interior Detail for sedan. Book Online in less than 3 minutes!
No Pre-payment Required"
          ></PricingCard>
          <PricingCard
            img="/src/assets/suv1.webp"
            title="$199"
            text="Exterior & Interior Detail for 5-Seat SUVs. Book Online in less than 3 minutes!

          No Pre-payment Required"
          ></PricingCard>
          <PricingCard
            img="/src/assets/suv2.webp"
            title="$240"
            text="Exterior & Interior Detail for 7-Seat SUVs. Book Online in less than 3 minutes!

          No Pre-payment Required."
          ></PricingCard>
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default Pricing;
