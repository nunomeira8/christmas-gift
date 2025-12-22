import { useEffect, useState } from "react";

export default function Slideshow({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={index === currentImage ? "active" : ""}
        />
      ))}
    </div>
  );
}
