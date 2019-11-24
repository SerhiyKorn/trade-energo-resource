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
import { NavStyles } from "../stylesheets/style";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <NavStyles>
      <MDBNavbar light color="white" expand="lg" className="p-4">
        <MDBNavbarBrand>
          <h2 className="h2-responsive">Трейд Енерго Ресурс</h2>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav>
            <MDBNavItem>
              <MDBNavLink to="/">
                <h4 className="h4-responsive mt-1">Головна</h4>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/normbase">
                <h4 className="h4-responsive mt-1">Нормативна База</h4>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">
                    <h4 className="h4-responsive mt-1">Споживачам</h4>
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
            <MDBNavItem>
              <MDBNavLink to="/contacts">
                <h4 className="h4-responsive mt-1">Контакти</h4>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </NavStyles>
  );
};

export default Navbar;
