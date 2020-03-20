import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./SideNav.module.css";

const styles = {
  open: {
    transform: "translateX(0px)"
  },
  closed: {
    transform: "translateX(-250px)"
  },
  button: {
    marginBottom: "10px",
    float: "right"
  }
};

const SideNav = props => {
  const [open, setOpen] = useState(false);

  const sideNavHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.SideNav} style={open ? styles.open : styles.closed}>
      <button style={styles.button} onClick={sideNavHandler}>
        <FontAwesomeIcon icon={faSlidersH} />
      </button>
      {open ? (
        <Card style={{ width: "100%" }}>
          <Card.Header>Options</Card.Header>
          <ListGroup>
            {props.list.map((option, i) => (
              <ListGroup.Item key={i}>
                {option}
                <button
                  style={{ float: "right" }}
                  onClick={() => props.selectionHandler(props.selection[i], i)}
                >
                  {props.selection[i] ? (
                    <FontAwesomeIcon icon={faMinus} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ) : null}
      <p className={classes.Source}>
        All data from worldometers.info/coronavirus/
      </p>
    </div>
  );
};

export default SideNav;
