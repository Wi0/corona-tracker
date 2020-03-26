import React from "react";
import Card from "react-bootstrap/Card";

const CardContainer = props => {
  let deathRate = (props.deaths / props.cases) * 100;
  return (
    <>
      <Card
        bg={props.variant}
        text="light"
        style={{ width: "100%" }}
        className="justify-content-center"
      >
        <Card.Header as="h3">{props.title}</Card.Header>
        <Card.Body style={{ fontSize: "17px" }}>
          {props.selection[0] ? (
            <Card.Text>
              <strong>Cases: </strong>
              {props.cases}
            </Card.Text>
          ) : null}
          {props.selection[1] ? (
            <Card.Text>
              <strong>Deaths: </strong>
              {props.deaths}
            </Card.Text>
          ) : null}
          {props.selection[2] ? (
            <Card.Text>
              <strong>Recoveries: </strong>
              {props.recoveries}
            </Card.Text>
          ) : null}
          {props.selection[3] ? (
            <Card.Text>
              <strong>Death rate: </strong>
              {deathRate.toFixed(1)}%
            </Card.Text>
          ) : null}
          {props.selection[4] ? (
            <Card.Text>
              <strong>New cases today: </strong>
              {props.todayCases}{" "}
            </Card.Text>
          ) : null}
          {props.selection[5] ? (
            <Card.Text>
              <strong>Deaths today: </strong>
              {props.todayDeaths}{" "}
            </Card.Text>
          ) : null}
          {props.selection[6] ? (
            <Card.Text>
              <strong>Critical condition: </strong>
              {props.critical}{" "}
            </Card.Text>
          ) : null}
          {props.selection[7] ? (
            <Card.Text>
              <strong>Cases per million people: </strong>
              {props.casesPerOneMillion}
            </Card.Text>
          ) : null}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default CardContainer;
