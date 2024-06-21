import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Stack minHeight="700px" padding={1}>
        <Typography
          variant="h3"
          color="#1d192e"
          fontWeight="bold"
          textAlign="center"
        >
          Mobile Car Detail FAQ'S
        </Typography>
        <Stack
          direction={{ lg: "row" }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Box
            sx={{
              height: { lg: "500px", xs: "300px" },
              width: { lg: "500px", xs: "300px" },
            }}
          >
            <img
              src="https://ik.imagekit.io/haroon2003/Mint/van.png?updatedAt=1719000478219"
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
                borderRadius: "2rem",
              }}
            ></img>
          </Box>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Accordion
              sx={{
                backgroundColor: "#1d192e",
                color: "white",
                width: { xs: "60%", lg: "30rem" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                What areas do you serve?
              </AccordionSummary>
              <AccordionDetails>We serve DC, MD, VA.</AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
              </AccordionActions>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#1d192e",
                color: "white",
                width: { xs: "60%", lg: "30rem" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                Do you detail all brands of vehicles?
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! We specialize in detailing all brands of vehicles,
                from Toyota, Honda, Ford, and RV to exotic car detailing brands
                as well such as Porsche, BMW, Mercedes-Benz, Audi, and more.
                Check our detailing price list and book online in less than 3
                minutes.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
              </AccordionActions>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#1d192e",
                color: "white",
                width: { xs: "60%", lg: "30rem" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                Do you offer any guarantees or warranties on your services?
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! We stand behind the quality of our work and offer a
                satisfaction guarantee on all our services. If you’re not
                completely satisfied, please let us know, and we’ll work with
                you to make it right.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
              </AccordionActions>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#1d192e",
                color: "white",
                width: { xs: "60%", lg: "30rem" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                What payment methods do you accept?
              </AccordionSummary>
              <AccordionDetails>
                We offer convenient cashless payment options via credit/debit
                cards or Apple Pay.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
              </AccordionActions>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#1d192e",
                color: "white",
                width: { xs: "60%", lg: "30rem" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                Do you support any charities ?
              </AccordionSummary>
              <AccordionDetails>
                Yes! We donate 10% of our gross revenue towards VLAS, a
                nonprofit law firm established in 1977 to provide free civil
                legal services to eligible low-income residents in 20 counties
                and six cities in Central, Southside, and Western Tidewater
                Virginia.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
              </AccordionActions>
            </Accordion>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default Faq;
