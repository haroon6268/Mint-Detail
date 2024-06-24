import { Box, Stack, TextField, Typography, Button } from "@mui/material";
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

const Address = () => {
  const [loc, setLoc] = useContext(LocationContext);
  const [selected, setSelected] = useState(false);
  const [service, setService] = useState(false);
  const onSelect = (data) => {
    setSelected(true);
    // console.log(data.geometry.location.lat());
    const lat = data.geometry.location.lat();
    const lng = data.geometry.location.lng();
    setLoc({ lat, lng });
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS} libraries={["places"]}>
      <Stack
        sx={{ height: "80vh" }}
        spacing={0}
        justifyContent="center"
        alignItems="center"
        position="relative"
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
            width: "100%",
            background: "white",
            zIndex: 1,
            position: "absolute",
            top: 0,
            right: service ? 0 : "-100%",
            transition: "all 1s ease-in-out",
            justifyContent: "center",
            alignContent: "center",
            gap: 1,
          }}
          direction="row"
          flexWrap="wrap"
          spacing
        >
          <Typography variant="h4" textAlign={"center"} fontWeight="bold">
            Select a Service
          </Typography>
          <BookingCard
            img="https://ik.imagekit.io/haroon2003/Mint/sedan1.webp?updatedAt=1719000478495"
            title="$149"
            text="Sedan"
          ></BookingCard>
          <BookingCard
            img="https://ik.imagekit.io/haroon2003/Mint/suv2.webp?updatedAt=1719000478128"
            title="$199"
            text="SUV"
          ></BookingCard>
          <BookingCard
            img="https://ik.imagekit.io/haroon2003/Mint/suv1.webp?updatedAt=1719000478031"
            title="$240"
            text="7+ Seat SUV"
          ></BookingCard>
        </Stack>
      </Stack>
    </APIProvider>
  );
};

export default Address;
