import React, { useState, useEffect } from "react";
import CardContainer from "../../components/card/Card";
import SpinnerIcon from "../../components/Spinner/Spinner";
import Controls from "../../components/Controls/Controls";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getCountryData } from "../../client/client";

function Countries(props) {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    <>
      <Container style={{ textAlign: "center", padding: "10px 0" }}>
        <Controls controlsHandler={controlsHandler} />
      </Container>
      <Container fluid="true" style={{ margin: "0 40px 0 80px" }}>
        <Row className="justify-content-md-center">
          {!loading && countryData ? (
            countryData.map(
              ({
                country,
                deaths,
                cases,
                recovered,
                critical,
                casesPerOneMillion,
                todayDeaths,
                todayCases
              }) => (
                <Col sm={3} key={country}>
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
                    critical={critical}
                    casesPerOneMillion={casesPerOneMillion}
                    todayDeaths={todayDeaths}
                    todayCases={todayCases}
                    selection={props.selection}
                  />
                </Col>
              )
            )
          ) : loading ? (
            <SpinnerIcon />
          ) : null}
        </Row>
      </Container>
    </>
  );
}

export default Countries;
