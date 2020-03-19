import React, { useState, useEffect } from "react";
import Nav from "./components/Navbar/Navbar";
import Countries from "./containers/Countries/Countries";
import Container from "react-bootstrap/Container";
import { getTotalData } from "./client/client";
import SideNav from "./components/Navbar/SideNav";

function App() {
  const [totalData, setTotalData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ]);

  useEffect(() => {
    setLoading(true);
    getTotalData().then(res => {
      setTotalData(res.data);
      setLoading(false);
    });
  }, []);

  const selectionHandler = (select, i) => {
    setSelection({ ...selection, [i]: !select });
  };

  return (
    <div className="App">
      <Nav />
      <SideNav selectionHandler={selectionHandler} selection={selection} />
      <Container>
        <h1 style={{ textAlign: "center" }}>
          Total deaths: {totalData.deaths}
        </h1>
        <h1 style={{ textAlign: "center" }}>Total cases: {totalData.cases}</h1>
      </Container>
      <Countries selection={selection} />
    </div>
  );
}

export default App;
