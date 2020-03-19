import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Nav = () => (
  <Navbar
    bg="dark"
    variant="dark"
    style={{
      zIndex: "1000",
      display: "flex",
      justifyContent: "space-between",
      position: "fixed",
      width: "100%"
    }}
  >
    <Navbar.Brand href="#home">Coronavirus Tracker</Navbar.Brand>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "180px",
        color: "white"
      }}
    >
      <h5 style={{ margin: "0px" }}>Created by: Wi0</h5>
      <a href="https://twitter.com/williamsxcode" style={{ fontSize: "24px" }}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </Navbar>
);

export default Nav;
