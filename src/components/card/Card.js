import React from "react";
import Card from "react-bootstrap/Card";

const CardContainer = props => {
  return (
    <>
      <Card
        bg={props.variant}
        text="light"
        // style={{ width: "18rem" }}
        className="justify-content-center"
      >
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>Cases: {props.cases}</Card.Text>
          <Card.Text>Deaths: {props.deaths}</Card.Text>
          <Card.Text>Recoveries: {props.recoveries}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default CardContainer;
