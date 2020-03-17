import React, { useState, useEffect } from "react";
import CardContainer from "./components/card/Card";
import SpinnerIcon from "./components/Spinner/Spinner";
import Nav from "./components/Navbar/Navbar";
import Controls from "./components/Controls/Controls";
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
      setTotalData(res.data);
    });
    getCountryData().then(res => {
      setCountryData(res.data);
      setLoading(false);
    });
  }, []);

  const controlsHandler = event => {
    const dataCopy = [...countryData];
    if (event === 1) {
      dataCopy.sort((a, b) => b.cases - a.cases);
    }
    if (event === 2) {
      dataCopy.sort((a, b) => b.deaths - a.deaths);
    }
    if (event === 3) {
      dataCopy.sort((a, b) => b.deaths / b.cases - a.deaths / a.cases);
    }

    setCountryData(dataCopy);
  };

  return (
    <div className="App">
      <Nav />
      <Container>
        <h1 style={{ textAlign: "center" }}>
          Total deaths: {totalData.deaths}
        </h1>
      </Container>
      <Container style={{ textAlign: "center", padding: "10px 0" }}>
        <Controls controlsHandler={controlsHandler} />
      </Container>
      <Container fluid="true" style={{ margin: "0 40px" }}>
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
