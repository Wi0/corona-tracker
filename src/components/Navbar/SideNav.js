import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const styles = {
  open: {
    position: "absolute",
    top: 55,
    left: 0,
    width: "300px",
    height: "100%",
    padding: "10px",
    backgroundColor: "lightgray",
    zIndex: "500",
    transition: "0.3s ease"
  },
  closed: {
    position: "absolute",
    top: 55,
    left: 0,
    width: "300px",
    height: "100%",
    padding: "10px",
    backgroundColor: "lightgray",
    zIndex: "500",
    transform: "translateX(-250px)",
    transition: "0.3s ease"
  },
  button: {
    marginBottom: "10px",
    float: "right"
  }
};

const SideNav = props => {
  const [open, setOpen] = useState(true);

  const sideNavHandler = () => {
    setOpen(!open);
  };

  const list = [
    "Cases",
    "Deaths",
    "Recoveries",
    "Death Rate",
    "New Cases Today",
    "Deaths Today",
    "Critical Condition",
    "Cases Per Million People"
  ];
  return (
    <div style={open ? styles.open : styles.closed}>
      <button style={styles.button} onClick={sideNavHandler}>
        <FontAwesomeIcon icon={faSlidersH} />
      </button>
      {open ? (
        <Card style={{ width: "100%" }}>
          <Card.Header>Options</Card.Header>
          <ListGroup>
            {list.map((option, i) => (
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
    </div>
  );
};

export default SideNav;
