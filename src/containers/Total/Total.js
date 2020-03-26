import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "../../components/Spinner/Spinner";
import { getTotalData } from "../../client/client";
import classes from "./Total.module.css";

const Total = () => {
  const [totalData, setTotalData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTotalData().then(res => {
      setTotalData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container className={classes.TotalContainer}>
      {!loading ? (
        <div>
          <h2>Total deaths: {totalData.deaths}</h2>
          <h2>Total cases: {totalData.cases}</h2>
        </div>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Total;
