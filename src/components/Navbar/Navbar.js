import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import classes from "./Navbar.module.css";

const Nav = () => (
  <Navbar
    bg="dark"
    variant="dark"
    className={classes.Nav}
    style={{ position: "fixed", justifyContent: "space-between" }}
  >
    <Navbar.Brand href="#home">Coronavirus Tracker</Navbar.Brand>
    <div className={classes.LinkContainer}>
      <h5>Created by: Wi0</h5>
      <a href="https://twitter.com/williamsxcode">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </Navbar>
);

export default Nav;
