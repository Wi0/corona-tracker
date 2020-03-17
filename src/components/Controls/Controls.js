import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Controls({ controlsHandler }) {
  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      defaultValue={1}
      onChange={controlsHandler}
    >
      <ToggleButton value={1}>Cases</ToggleButton>
      <ToggleButton value={2}>Deaths</ToggleButton>
      <ToggleButton value={3}>Death Rate %</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Controls;
