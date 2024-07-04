import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  APIProvider,
  Marker,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../App";
import Autocomplete from "./Autocomplete";
import BookingCard from "./BookingCard";
import BookingContext from "./BookingContext";
import ClearIcon from "@mui/icons-material/Clear";
import { Clear } from "@mui/icons-material";
import PetsIcon from "@mui/icons-material/Pets";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import WarningIcon from "@mui/icons-material/Warning";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Address = () => {
  const [page, setPage] = useState(1);
  const [loc, setLoc] = useContext(LocationContext);
  const [selected, setSelected] = useState(false);
  const [service, setService] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState(new Date().toISOString());
  const [booking, setBooking] = useState({
    img: "sedan1",
    package: "suv",
    serviceSelected: true,
    petHair: false,
    seatShampoo: false,
    bioHazard: false,
    quantity: 1,
  });
  const [expand, setExpand] = useState(false);
  const onSelect = (data) => {
    setSelected(true);
    const lat = data.geometry.location.lat();
    const lng = data.geometry.location.lng();
    setBooking({ ...booking, address: data.formatted_address });
    setLoc({ lat, lng });
  };
  useEffect(() => {
    if (!booking.package) {
      return;
    }
    if (booking.package == "sedan") {
      setBooking({
        ...booking,
        img: "https://ik.imagekit.io/haroon2003/Mint/sedan1.webp?updatedAt=1719000478495",
      });
    }
    if (booking.package == "suv") {
      setBooking({
        ...booking,
        img: "https://ik.imagekit.io/haroon2003/Mint/suv2.webp?updatedAt=1719000478128",
      });
    }
    if (booking.package == "suv+") {
      setBooking({
        ...booking,
        img: "https://ik.imagekit.io/haroon2003/Mint/suv1.webp?updatedAt=1719000478031",
      });
    }
  }, [booking.package]);

  useEffect(() => {
    console.log("activated");
    let theDate = new Date(date);
    let month = theDate.getMonth();
    month = month + 1;
    month = month.toString();
    month = month.padStart(2, "0");
    let day = theDate.getDate();
    day = day.toString();
    day = day.padStart(2, "0");
    const year = theDate.getFullYear();
    const dateString = `${year}-${month}-${day}`;
    console.log(dateString);

    fetch("http://localhost:3000/api/v1/booking?date=" + dateString, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [date]);

  return (
    <BookingContext.Provider value={[booking, setBooking]}>
      <APIProvider apiKey={import.meta.env.VITE_MAPS} libraries={["places"]}>
        <Stack
          sx={{ height: "80vh" }}
          spacing={0}
          justifyContent="center"
          alignItems="center"
          position="relative"
          overflow="hidden"
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            width="25rem"
            padding={2}
            position="absolute"
            top={0}
            zIndex={1}
            sx={{
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              borderRadius: 5,
            }}
          >
            <Typography variant="h4" textAlign={"center"} fontWeight="bold">
              Lets Book!
            </Typography>
            <Autocomplete onPlaceSelect={onSelect} />
            <Button
              variant="contained"
              disabled={!selected}
              sx={{
                backgroundColor: "#97e1b0",
                width: "18.5rem",
                ":hover": {
                  backgroundColor: "#76b38a",
                },
              }}
              fullWidth
              onClick={() => setService(true)}
            >
              Next
            </Button>
          </Stack>
          <Map
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "25%",
            }}
            center={loc}
            zoom={selected ? 17 : 12}
            disableDefaultUI={true}
            mapId="b7c8ef13619a9a41"
          >
            {selected ? (
              <AdvancedMarker position={loc} background={"#1d192e"}>
                <Pin
                  background={"#97e1b0"}
                  borderColor={"#97e1b0"}
                  glyphColor={"#1d192e"}
                ></Pin>
              </AdvancedMarker>
            ) : null}
          </Map>
          <Stack
            sx={{
              height: "80vh",
              width: { xs: "100%", lg: "40%" },
              background: "white",
              zIndex: 1,
              position: "absolute",
              top: 0,
              right: service ? 0 : "-100%",

              transition: "all 1s ease-in-out",
              justifyContent: "center",
              alignContent: "center",
            }}
            direction="column"
            gap={1}
          >
            <Typography variant="h4" textAlign={"center"} fontWeight="bold">
              Select a Service
            </Typography>
            <Stack
              direction="row"
              width="100%"
              flexWrap="wrap"
              gap={1}
              margin={0}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                sx={{ position: "absolute", top: 0, left: 0 }}
                onClick={() => {
                  setService(false);
                }}
              >
                <ClearIcon></ClearIcon>
              </IconButton>
              <BookingCard
                img="https://ik.imagekit.io/haroon2003/Mint/sedan1.webp?updatedAt=1719000478495"
                title="$149"
                text="Sedan"
                pkg="Sedan"
              ></BookingCard>
              <BookingCard
                img="https://ik.imagekit.io/haroon2003/Mint/suv2.webp?updatedAt=1719000478128"
                title="$199"
                text="SUV"
                pkg="SUV"
              ></BookingCard>
              <BookingCard
                img="https://ik.imagekit.io/haroon2003/Mint/suv1.webp?updatedAt=1719000478031"
                title="$240"
                text="7+ Seat SUV"
                pkg="SUV+"
              ></BookingCard>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "80vh",

              width: { xs: "100%", lg: "40%" },
              background: "white",
              zIndex: 1,
              position: "absolute",
              right: 0,
              bottom: booking.serviceSelected ? 0 : "-100%",

              transition: "all 1s ease-in-out",
              alignContent: "center",
              padding: 2,
              overflow: "scroll",
            }}
            direction="column"
            gap={1}
          >
            <IconButton
              sx={{ position: "absolute", top: 0, left: 0 }}
              onClick={() => {
                setBooking({ ...booking, serviceSelected: false });
              }}
            >
              <ClearIcon></ClearIcon>
            </IconButton>
            <Typography variant="h5" textAlign="center">
              Full Detail
            </Typography>
            <img
              style={{ objectFit: "contain", height: 150 }}
              src={booking.img}
              alt="green iguana"
            />

            <Typography variant="body2">
              {expand ? <ExpandedText /> : <UnexpandedText />}
            </Typography>

            <button
              style={{ width: "fit-content" }}
              onClick={() => setExpand(!expand)}
            >
              {expand ? (
                <Typography
                  variant="p"
                  fontSize={10}
                  sx={{ alignSelf: "center", marginTop: 2 }}
                >
                  Show Less
                </Typography>
              ) : (
                <Typography
                  variant="p"
                  fontSize={10}
                  sx={{ alignSelf: "center", marginTop: 2 }}
                >
                  Show More
                </Typography>
              )}
            </button>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                alignItems: "center",
              }}
            >
              <Stack direction="row" gap={0.5} sx={{ margin: "20px 0" }}>
                <PetsIcon
                  color="primary"
                  sx={{ alignSelf: "center", fontSize: 30 }}
                />
                <Stack direction="column">
                  <Typography>Full Detail</Typography>
                  <Typography color="#999">{`$${booking.price}`}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
                <Button
                  color="error"
                  onClick={() => {
                    if (booking.quantity == 1) {
                      return;
                    }
                    setBooking({ ...booking, quantity: booking.quantity - 1 });
                  }}
                >
                  -
                </Button>
                <Typography variant="p">{`${booking.quantity}`}</Typography>
                <Button
                  color="primary"
                  onClick={() =>
                    setBooking({ ...booking, quantity: booking.quantity + 1 })
                  }
                >
                  +
                </Button>
              </Stack>
            </Stack>
            <hr />
            <Typography variant="p">Add Ons</Typography>
            <hr />
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                alignItems: "center",
              }}
            >
              <Stack direction="row" gap={0.5}>
                <PetsIcon
                  color="primary"
                  sx={{ alignSelf: "center", fontSize: 30 }}
                />
                <Stack direction="column">
                  <Typography>Pet Hair</Typography>
                  <Typography color="#999">$29.99</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
                <Button
                  color="primary"
                  variant={booking.petHair ? "contained" : "outlined"}
                  onClick={() =>
                    setBooking({ ...booking, petHair: !booking.petHair })
                  }
                >
                  Yes
                </Button>
                <Button
                  color="error"
                  variant={booking.petHair ? "outlined" : "contained"}
                  onClick={() =>
                    setBooking({ ...booking, petHair: !booking.petHair })
                  }
                >
                  No
                </Button>
              </Stack>
            </Stack>
            <hr />
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                alignItems: "center",
              }}
            >
              <Stack direction="row" gap={0.5}>
                <AirlineSeatReclineNormalIcon
                  color="primary"
                  sx={{ alignSelf: "center", fontSize: 30 }}
                />
                <Stack direction="column">
                  <Typography>Seat Shampoo</Typography>
                  <Typography color="#999">$49.99</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
                <Button
                  color="primary"
                  variant={booking.seatShampoo ? "contained" : "outlined"}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      seatShampoo: !booking.seatShampoo,
                    })
                  }
                >
                  Yes
                </Button>
                <Button
                  color="error"
                  variant={booking.seatShampoo ? "outlined" : "contained"}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      seatShampoo: !booking.seatShampoo,
                    })
                  }
                >
                  No
                </Button>
              </Stack>
            </Stack>
            <hr />
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                alignItems: "center",
              }}
            >
              <Stack direction="row" gap={0.5}>
                <WarningIcon
                  color="primary"
                  sx={{ alignSelf: "center", fontSize: 30 }}
                />
                <Stack direction="column">
                  <Typography>BioHazard</Typography>
                  <Typography color="#999">$49.99</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
                <Button
                  color="primary"
                  variant={booking.bioHazard ? "contained" : "outlined"}
                  onClick={() =>
                    setBooking({ ...booking, bioHazard: !booking.bioHazard })
                  }
                >
                  Yes
                </Button>
                <Button
                  color="error"
                  variant={booking.bioHazard ? "outlined" : "contained"}
                  onClick={() =>
                    setBooking({ ...booking, bioHazard: !booking.bioHazard })
                  }
                >
                  No
                </Button>
              </Stack>
            </Stack>
            <hr />
            <Button
              fullWidth
              variant="contained"
              sx={{ marginTop: 2 }}
              onClick={() => {
                setShowCalender(true);
              }}
            >
              Next
            </Button>
          </Stack>
          <Stack
            sx={{
              height: "80vh",
              width: { xs: "100%", lg: "40%" },
              background: "white",
              zIndex: 1,
              position: "absolute",
              top: 0,
              right: showCalender ? 0 : "-100%",
              transition: "all 1s ease-in-out",
              padding: 2,
              alignContent: "center",
            }}
            direction="column"
            gap={1}
          >
            <IconButton
              sx={{ position: "absolute", top: 0, left: 0 }}
              onClick={() => {
                setShowCalender(false);
              }}
            >
              <ClearIcon></ClearIcon>
            </IconButton>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Select a Date and Time
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                onChange={(data) => setDate(data.$d.toISOString())}
                value={dayjs(date)}
              />
            </LocalizationProvider>
          </Stack>
        </Stack>
      </APIProvider>
    </BookingContext.Provider>
  );
};
const ExpandedText = () => {
  return (
    <Typography variant="body2">
      Our Full Mobile Car Detail Includes:
      <br />- Comprehensive Interior Vacuum
      <br />- Interior Windows Cleaned
      <br />- Interior Mirrors Cleaned
      <br />- Interior Trim Wiped & Dressed
      <br />- Boot Vacuum
      <br />- Steering Column & Dash Detail
      <br />- Crack & Crevice Detail
      <br />- Door & Boot Jamb Clean
      <br />- Leather Seat Condition
      <br /> +
      <br /> - Exterior Windows Cleaned
      <br />- Exterior Windows Cleaned
      <br />- Exterior Mirrors Cleaned
      <br />- Exterior Trim Wiped & Dressed
      <br />- Exterior Washed
      <br />- Exterior Waxed
      <br />
      <br />- We come to your home or work
    </Typography>
  );
};
const UnexpandedText = () => {
  return (
    <Typography variant="body2">
      Our Full Mobile Car Detail Includes:
      <br />- Comprehensive Interior Vacuum...
    </Typography>
  );
};

export default Address;
