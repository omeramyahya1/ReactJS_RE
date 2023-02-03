import * as images from "./";

const pics = [];

for (let x in images) {
  console.log(x);
  pics.push(
    <div key={x} className="image-gallery-item">
      <img src={images[x]}></img>
    </div>
  );
}

function ImageGallery() {
  return (
    <>
      <div className="image-gallery">{pics}</div>
    </>
  );
}

export default ImageGallery;
