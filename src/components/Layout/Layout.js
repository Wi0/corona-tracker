import React, { useState, useEffect } from "react"
import Nav from "../../components/Navbar/Navbar"
import SideNav from "../../components/Navbar/SideNav"
import CookieBanner from "../../components/CookieBanner/CookieBanner"
import ReactGA from "react-ga"
import FooterBar from "../../components/Footer/Footer"
import "../../style/global.css"

function initializeReactGA() {
  ReactGA.initialize("UA-154888215-3")
  ReactGA.pageview("/homepage")
}

initializeReactGA()

function Layout({ children }) {
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
    <>
      <Nav />
      <SideNav
        selectionHandler={selectionHandler}
        selection={selection}
        list={list}
      />
      {children}
      <FooterBar />
      {!cookieSeen ? <CookieBanner cookieHandler={cookieHandler} /> : null}
    </>
  )
}

export default Layout
