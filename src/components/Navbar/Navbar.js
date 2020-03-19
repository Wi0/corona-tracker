import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => (
  <Navbar bg="dark" variant="dark" style={{ zIndex: "1000" }}>
    <Navbar.Brand href="#home">Coronavirus country tracker</Navbar.Brand>
  </Navbar>
);

export default Nav;
