import React, { useState, useEffect } from "react"
import Countries from "../containers/Countries/Countries"
import Total from "../containers/Total/Total"
import CookieBanner from "../components/CookieBanner/CookieBanner"
import ReactGA from "react-ga"
import FooterBar from "../components/Footer/Footer"
import Layout from "../components/Layout/Layout"

function initializeReactGA() {
  ReactGA.initialize("UA-154888215-3")
  ReactGA.pageview("/homepage")
}

initializeReactGA()

function IndexPage() {
  const [selection, setSelection] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ])
  const [cookieSeen, setCookieSeen] = useState(false)

  useEffect(() => {
    console.log(Countries)
    if (window.localStorage.getItem("cookie") === "seen") {
      setCookieSeen(true)
    }
  }, [])

  const selectionHandler = (select, i) => {
    setSelection({ ...selection, [i]: !select })
  }

  const cookieHandler = () => {
    window.localStorage.setItem("cookie", "seen")
  }

  const list = [
    "Cases",
    "Deaths",
    "Recoveries",
    "Death Rate",
    "New Cases Today",
    "Deaths Today",
    "Critical Condition",
    "Cases Per Million People",
  ]

  return (
    <Layout>
      <Total />
      <Countries selection={selection} list={list} />
    </Layout>
  )
}

export default IndexPage
