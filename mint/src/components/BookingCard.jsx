import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContext } from "react";
import BookingContext from "./BookingContext";

const BookingCard = ({ img, title, text, pkg }) => {
  const [booking, setBooking] = useContext(BookingContext);
  return (
    <Card sx={{ minWidth: 170, maxWidth: 170, maxHeight: 250 }}>
      <CardActionArea
        onClick={() => {
          setBooking({
            ...booking,
            package: pkg,
            serviceSelected: true,
            price: parseInt(title.substring(1)),
          });
        }}
      >
        <CardMedia
          component="img"
          sx={{ objectFit: "contain", height: 100 }}
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
        {/* <Button
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
        </Button> */}
      </CardActions>
    </Card>
  );
};
export default BookingCard;
