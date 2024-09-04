
const Gallery = () => {
  const gallery = [
    "src/image/img1.webp",
    "src/image/img2.jpg",
    "src/image/img3.jpg",
    "src/image//img4.jpg",
    "src/image//img7.jpg",
    "src/image//img8.jpg",
    "src/image//img5.jpg",
    "src/image//img6.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src="src/image/img1.webp" alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={"src/image/img3.jpg"} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={"src/image/img7 (1).jpg"} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;