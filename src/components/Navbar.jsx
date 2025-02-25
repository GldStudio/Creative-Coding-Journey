import { useEffect, useState } from "react";

export default function Navbar() {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const pixelSize = 10;
    const container = document.querySelector(".pixelated-background");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Calculate the number of pixels needed
    const numberOfPixelsX = Math.ceil(containerWidth / pixelSize);
    const numberOfPixelsY = Math.ceil(containerHeight / pixelSize);
    const totalPixels = numberOfPixelsX * numberOfPixelsY;

    // Generate pixel data
    const newPixels = Array.from({ length: totalPixels }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
    }));

    setPixels(newPixels);
  }, []);

  return (
    <header>
      <nav>
        <img src="src/assets/logo.png" alt="logo" className="logo" />

        <div className="pixelated-background">
          {pixels.map((pixel) => (
            <div
              key={pixel.id}
              className="pixel"
              style={{ animationDelay: `${pixel.delay}s` }}
            ></div>
          ))}
        </div>
      </nav>
    </header>
  );
}
