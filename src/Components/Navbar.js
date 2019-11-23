import React, {useState} from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router} from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <MDBNavbar light color="white" expand="md">
        <MDBNavbarBrand>
          <strong>Трейд Енерго Ресурс</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">
                <strong>Головна</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/normbase">
                <strong>Нормативна База</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">
                    <strong>Споживачам</strong>
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/">Тарифи</MDBDropdownItem>
                  <MDBDropdownItem href="/">Архів тарифів</MDBDropdownItem>
                  <MDBDropdownItem href="/">
                    Комерційна пропозиція
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/">Договір</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
