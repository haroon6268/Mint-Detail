import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <Stack
      sx={{
        minHeight: { lg: "1200px", xs: "150vh" },
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
      spacing={6}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#1d192e"
          textAlign="center"
        >
          Complete Auto Detailing Package
        </Typography>
      </motion.div>
      <Stack direction={{ lg: "row" }} justifyContent="space-around">
        <Stack
          maxWidth={{ xs: "100%", lg: "40%" }}
          marginBottom={{ xs: 3, lg: 0 }}
          spacing={1}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5">Exterior</Typography>
            <ul style={{ listStyle: "disc", color: "text.secondary" }}>
              <li>
                Detailed cleaning of wheel faces, barrels, and wheel wells,
                ensuring every inch shines.
              </li>
              <li>
                Gentle foam bath with pH-neutral soap, lifting away dirt and
                grime without harming your vehicle’s finish.
              </li>
              <li>
                Hand wash with DI water rinse, providing a thorough cleanse that
                leaves your car sparkling.
              </li>
              <li>
                Premium microfiber towel dry and air blow to ensure a flawless,
                drip-free finish.
              </li>
              <li>
                Attention to detail with a wipe down of door jambs, trunk lid,
                and gas cap for a polished look inside and out.
              </li>
              <li>
                Exterior windows treated for streak-free clarity, enhancing
                visibility and aesthetics.
              </li>
              <li>
                Application of spray wax to protect and enhance your car’s
                paintwork, leaving a showroom-worthy shine.
              </li>
            </ul>
            <Box
              sx={{
                height: { lg: "500px", xs: "300px" },
                width: { lg: "500px", xs: "300px" },
              }}
            >
              <img
                src="/src/assets/after.png"
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

        <Stack maxWidth={{ xs: "100%", lg: "40%" }} spacing={1}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5">Interior</Typography>
            <ul style={{ listStyle: "disc", color: "#333" }}>
              <li>
                Deep cleaning with air blow techniques to target every single
                nook and cranny.
              </li>
              <li>
                A meticulous vacuuming session that covers seats, floor mats,
                floors, and trunk areas.
              </li>
              <li>
                Advanced interior brush and steam treatment, eliminating 99% of
                germs for a hygienic interior.
              </li>
              <li>
                Complete detailing of high-touch areas such as door panels,
                dashboard, steering wheel, cup holders, and console.
              </li>
              <li>
                Luxurious wipe down and conditioning of leather seats for a
                supple, refreshed feel.
              </li>
              <li>
                Thorough washing of rubber mats to remove dirt and grime
                buildup.
              </li>
              <li>
                Crystal-clear interior windows, ensuring streak-free visibility.
              </li>
              <li>
                AC vents steam cleaning to eliminate dust and allergens for a
                fresh cabin environment.
              </li>
            </ul>
            <Box
              sx={{
                height: { lg: "500px", xs: "300px" },
                width: { lg: "500px", xs: "300px" },
              }}
            >
              <img
                src="/src/assets/carousel6.png"
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
      </Stack>
    </Stack>
  );
};

export default Service;
