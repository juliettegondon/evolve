import React from "react";
import "./style.css";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="workout">Find a class:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="workout"
          list="workouts"
          type="text"
          className="form-control"
          placeholder="Search for a workout class"
          id="breed"
        />
        <datalist id="classes">
          {props.workouts.map(workout => (
            <option value={workout} key={workout} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
