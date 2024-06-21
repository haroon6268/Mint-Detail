import { Box, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box
      minHeight="200px"
      sx={{
        backgroundColor: "#1d192e",
        padding: 10,
        marginTop: 6,
      }}
    >
      <Stack direction="row">
        <Stack>
          <Typography variant="h6" color="white" fontWeight="bold">
            Contact
          </Typography>
          <Typography color="white" variant="p">
            <EmailIcon sx={{ color: "#97e1b0" }}></EmailIcon>
            support@mintdetailva.com
          </Typography>
          <Typography color="white" variant="p">
            <PhoneIcon sx={{ color: "#97e1b0" }}></PhoneIcon>
            (703) 634-3575
          </Typography>
          <Typography variant="p" color="white">
            <LocationOnIcon sx={{ color: "#97e1b0" }}></LocationOnIcon>
            D.C, MARYLAND & VIRGINIA
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
