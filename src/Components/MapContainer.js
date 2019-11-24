import React from "react";
import { MapStyles } from "../stylesheets/style";

const MapContainer = ({isPage}) => {
  return (
    <MapStyles>
      <div
        id="map-container-google-8"
        className={`z-depth-2-half map-container"}`}
      >
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
          width="100%"
          height={isPage ? "300px" : null}
        ></iframe>
      </div>
    </MapStyles>
  );
};

export default MapContainer;
