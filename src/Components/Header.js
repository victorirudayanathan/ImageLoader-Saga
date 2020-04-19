import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Image Collections</h1>
        <span>Number of images to Load : </span>
        <select>
          <option>2</option>
          <option>4</option>
          <option>6</option>
          <option>8</option>
          <option>10</option>
        </select>
      </div>
    );
  }
}
