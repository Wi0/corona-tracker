import React, { useState, useEffect } from "react";
import CardContainer from "../../components/card/Card";
import SpinnerIcon from "../../components/Spinner/Spinner";
import Controls from "../../components/Controls/Controls";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getCountryData } from "../../client/client";
import Search from "../../components/Controls/Search";
import classes from "./Countries.module.css";

function Countries(props) {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    getCountryData().then(res => {
      console.log(res);
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
      dataCopy.sort((a, b) => b.recovered - a.recovered);
    }
    if (event === 4) {
      dataCopy.sort((a, b) => b.deaths / b.cases - a.deaths / a.cases);
    }
    if (event === 5) {
      dataCopy.sort((a, b) => b.todayCases - a.todayCases);
    }
    if (event === 6) {
      dataCopy.sort((a, b) => b.todayDeaths - a.todayDeaths);
    }
    if (event === 7) {
      dataCopy.sort((a, b) => b.critical - a.critical);
    }
    if (event === 8) {
      dataCopy.sort((a, b) => b.casesPerOneMillion - a.casesPerOneMillion);
    }

    setCountryData(dataCopy);
  };

  const searchHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.Container}>
      <Container className={classes.ControlsContainer}>
        <Controls
          controlsHandler={controlsHandler}
          list={props.list}
          selection={props.selection}
        />
        <Search searchHandler={searchHandler} searchTerm={searchTerm} />
      </Container>
      <Container fluid="true" className={classes.CountriesContainer}>
        <Row className="justify-content-md-center">
          {!loading && countryData ? (
            countryData
              .filter(({ country }) =>
                country.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(
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
                  <Col md={3} key={country}>
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
    </div>
  );
}

export default Countries;
