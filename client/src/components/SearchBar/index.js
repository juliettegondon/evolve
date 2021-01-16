import React from "react";
import "./style.css";


function SearchBar(props) {
        return (
          <form className="search">
            <div className="form-group">
              <label htmlFor="video">Video Search:</label>
              <input
                value={props.search}
                onChange={props.handleInputChange}
                name="video"
                list="videos"
                type="text"
                className="form-control"
                placeholder="What kind of video do you want to see? "
                id="video"
              />
              <datalist id="videos">
                {props.videos.map(video => (
                  <option value={video} key={video} />
                ))}
              </datalist>
              <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                Search
              </button>
            </div>
          </form>
        );
      }
  

export default SearchBar;