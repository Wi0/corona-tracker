import React, { useState, useEffect } from "react";
import CardContainer from "./components/card/Card";
import SpinnerIcon from "./components/Spinner/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getCountryData, getTotalData } from "./client/client";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [totalData, setTotalData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTotalData().then(res => {
      console.log(res.data);
      setTotalData(res.data);
    });
    getCountryData().then(res => {
      console.log(res.data);
      setCountryData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <h1 style={{ textAlign: "center" }}>
          Total deaths: {totalData.deaths}
        </h1>
      </Container>
      <Container fluid="true">
        <Row className="justify-content-md-center">
          {!loading && countryData ? (
            countryData.map(({ country, deaths, cases, recovered }) => (
              <Col sm={3}>
                <CardContainer
                  variant={
                    cases > 10000
                      ? "danger"
                      : cases > 5000
                      ? "warning"
                      : "primary"
                  }
                  title={country}
                  deaths={deaths}
                  cases={cases}
                  recoveries={recovered}
                />
              </Col>
            ))
          ) : loading ? (
            <SpinnerIcon />
          ) : null}
        </Row>
      </Container>
    </div>
  );
}

export default App;
