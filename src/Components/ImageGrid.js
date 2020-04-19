import React from "react";

export default function ImageGrid(props) {
  console.log("ImageGrid", props);
  let { images } = props;

  return (
    <section className="grid">
      {images.map(image => (
        <div key={image.id}>
          <img src={image.urls.small} alt={image.user.username} />
        </div>
      ))}
    </section>
  );
}
