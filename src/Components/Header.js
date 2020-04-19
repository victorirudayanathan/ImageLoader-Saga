import React from "react";
// import ImageGrid from "./ImageGrid";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {}
    };
  }
  componentDidMount() {
    const KEY = "?client_id=STKUhVc4fCPmEmzqitNVFgLDfLyUyTPVKxEtLfWEn8k";
    const URL = `https://api.unsplash.com/photos/`;
    fetch(`${URL}${KEY}&per_page=3&page=1`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("fetch call", data);
        this.setState({ images: data });
      });
  }
  render() {
    let { images } = this.state;
    console.log("render", images);
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
