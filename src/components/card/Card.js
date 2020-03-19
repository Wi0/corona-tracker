import React from "react";
import Card from "react-bootstrap/Card";

const CardContainer = props => {
  let deathRate = (props.deaths / props.cases) * 100;
  return (
    <>
      <Card
        bg={props.variant}
        text="light"
        // style={{ width: "18rem" }}
        className="justify-content-center"
      >
        <Card.Header as="h3">{props.title}</Card.Header>
        <Card.Body>
          {props.selection[0] ? (
            <Card.Text>Cases: {props.cases}</Card.Text>
          ) : null}
          {props.selection[1] ? (
            <Card.Text>Deaths: {props.deaths}</Card.Text>
          ) : null}
          {props.selection[2] ? (
            <Card.Text>Recoveries: {props.recoveries}</Card.Text>
          ) : null}
          {props.selection[3] ? (
            <Card.Text>Death rate: {deathRate.toFixed(1)}%</Card.Text>
          ) : null}
          {props.selection[4] ? (
            <Card.Text>New cases today: {props.todayCases} </Card.Text>
          ) : null}
          {props.selection[5] ? (
            <Card.Text>Deaths today: {props.todayDeaths} </Card.Text>
          ) : null}
          {props.selection[6] ? (
            <Card.Text>Critical condition: {props.critical} </Card.Text>
          ) : null}
          {props.selection[7] ? (
            <Card.Text>
              Cases per million people: {props.casesPerOneMillion}
            </Card.Text>
          ) : null}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default CardContainer;
