import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search(props) {
  return (
    <InputGroup
      onChange={props.searchHandler}
      className="mb-3"
      style={{ margin: "20px auto", width: "80%" }}
    >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">
          Search Country
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Search Country"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
}

export default Search;
