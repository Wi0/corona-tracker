import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TimelineIcon from "@material-ui/icons/Timeline";
import PublicIcon from "@material-ui/icons/Public";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    zIndex: 1000,
    position: "fixed",
    bottom: 0,
    backgroundColor: "#344"
  }
});

export default function FooterBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        style={{ color: "#6bf" }}
        label="Country Data"
        icon={<PublicIcon />}
      />

      <BottomNavigationAction
        component={Link}
        to="/history"
        style={{ color: "#6bf" }}
        label="Timeline"
        icon={<TimelineIcon />}
      />

      {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  );
}
