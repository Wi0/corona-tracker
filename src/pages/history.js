import React, { useState, useEffect } from "react"
import SpinnerIcon from "../components/Spinner/Spinner"
import Container from "react-bootstrap/Container"
import { getHistoryData } from "../client/client"
import Search from "../components/Controls/Search"
// import classes from "./History.module.css"
import SearchCountryAuto from "../components/Controls/SearchCountryAuto"
import LineGraph from "../components/Chart/LineGraph"
import Layout from "../components/Layout/Layout"

function History(props) {
  const [historyData, setHistoryData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (selectedCountry) {
      setLoading(true)
      getHistoryData(selectedCountry).then(res => {
        setHistoryData(res.data)
        setLoading(false)
      })
    }
  }, [selectedCountry])

  const countrySelectHandler = country => {
    let countryFormatted = country
      .toLowerCase()
      .split(" ")
      .join("-")
    setSelectedCountry(countryFormatted)
  }

  const controlsHandler = event => {
    const dataCopy = [...historyData]
    if (event === 1) {
      dataCopy.sort((a, b) => b.cases - a.cases)
    }
    if (event === 2) {
      dataCopy.sort((a, b) => b.deaths - a.deaths)
    }
    if (event === 3) {
      dataCopy.sort((a, b) => b.recovered - a.recovered)
    }
    if (event === 4) {
      dataCopy.sort((a, b) => b.deaths / b.cases - a.deaths / a.cases)
    }
    if (event === 5) {
      dataCopy.sort((a, b) => b.todayCases - a.todayCases)
    }
    if (event === 6) {
      dataCopy.sort((a, b) => b.todayDeaths - a.todayDeaths)
    }
    if (event === 7) {
      dataCopy.sort((a, b) => b.critical - a.critical)
    }
    if (event === 8) {
      dataCopy.sort((a, b) => b.casesPerOneMillion - a.casesPerOneMillion)
    }

    setHistoryData(dataCopy)
  }

  const searchHandler = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <Layout>
      <Container className="justify-content-md-center">
        <SearchCountryAuto selectCountry={countrySelectHandler} />
      </Container>
      <Container
        fluid="true"
        style={{ height: "600px", paddingBottom: "200px" }}
        className="justify-content-md-center"
      >
        {!loading && historyData.length > 0 ? (
          <LineGraph data={historyData} deletedCountry="" />
        ) : loading ? (
          <SpinnerIcon />
        ) : null}
      </Container>
    </Layout>
  )
}

export default History
