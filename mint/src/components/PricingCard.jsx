import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const PricingCard = ({ img, title, text }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140px"
          sx={{ objectFit: "contain", height: 130 }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#1d192e">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            width: "7rem",
            backgroundColor: "#97e1b0",
            ":hover": {
              backgroundColor: "#76b38a",
            },
          }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};
export default PricingCard;
