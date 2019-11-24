import React from "react";
import MapContainer from "../Components/MapContainer";
const Contacts = () => {
  return (
    <div className="p-4">
      <div className="text-center ">
      <h4 className="text-uppercase text-center font-weight-bold">
        <strong>Наші дані</strong>
      </h4>
      <h3>
        <i className="fa fa-home mr-3" /> Київ, Україна
      </h3>
      <h3>
        <i className="fa fa-envelope mr-3" /> office@email.org.ua
      </h3>
      <h3>
        <i className="fa fa-phone mr-3" /> +38 0234 322-222
      </h3>
      </div>
      <hr></hr>
      <h4 className="text-uppercase text-center font-weight-bold">
        <strong>Як нас знайти?</strong>
      </h4>
      <MapContainer isPage />
    </div>
  );
};

export default Contacts;
