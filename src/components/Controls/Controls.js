import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Controls({ controlsHandler, list, selection }) {
  return (
    <ToggleButtonGroup
      style={{ display: "flex", flexWrap: "wrap" }}
      type="radio"
      name="options"
      defaultValue={1}
      onChange={controlsHandler}
    >
      {list.map((btn, i) => {
        if (selection[i]) {
          return (
            <ToggleButton value={i + 1} style={{ margin: "5px 5px 5px 0" }}>
              {btn}
            </ToggleButton>
          );
        }
      })}
    </ToggleButtonGroup>
  );
}

export default Controls;
