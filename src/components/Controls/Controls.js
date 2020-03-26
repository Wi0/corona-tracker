import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import classes from "./Controls.module.css";

function Controls({ controlsHandler, list, selection }) {
  return (
    <ToggleButtonGroup
      className={classes.ButtonGroup}
      type="radio"
      name="options"
      defaultValue={1}
      onChange={controlsHandler}
    >
      {list.map((btn, i) => {
        if (selection[i]) {
          return (
            <ToggleButton
              size="sm"
              key={btn}
              value={i + 1}
              className={classes.Button}
            >
              {btn}
            </ToggleButton>
          );
        } else {
          return null;
        }
      })}
    </ToggleButtonGroup>
  );
}

export default Controls;
