import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookButton = ({ margin }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      sx={{
        width: "10rem",
        backgroundColor: "#97e1b0",
        ":hover": {
          backgroundColor: "#76b38a",
        },
        marginTop: margin,
      }}
      onClick={() => navigate("/book")}
    >
      Book Now
    </Button>
  );
};

export default BookButton;
