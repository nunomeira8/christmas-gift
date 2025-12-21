import { useEffect, useState } from "react";

export default function Slideshow({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slideshow">
      <img src={images[currentImage]} alt="" />
    </div>
  );
}
