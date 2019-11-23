import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import MapContainer from "./MapContainer"
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';
const Footer = () => {
  return (
    <MDBFooter
      color="unique-color"
      className="page-footer font-small pt-1 "
    >
      <MDBContainer className="mt-2 text-center text-md-left">
        <MDBRow className="mt-3 d-flex justify-content-between">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Трейд Енерго Ресурс</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos, qui ratione
              voluptatem sequi nesciunt.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="3" xl="3" className="mb-4">
          <h6 className="text-uppercase font-weight-bold">
              <strong>Як нас знайти?</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <MapContainer />
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Контакти</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> Київ, Україна
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> office@email.org.ua
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +38 0234 322-222
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" by "}
          <a href="Copyright"> Trade Energo Resource </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
