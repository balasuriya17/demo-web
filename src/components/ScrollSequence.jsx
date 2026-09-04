import { useEffect, useRef } from "react";

function ScrollSequence({ frameCount, children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    const images = [];
    let loaded = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();

      const frameNumber = String(i).padStart(4, "0");
      
      img.src = `${import.meta.env.BASE_URL}Frames/frame-${frameNumber}.png`;
      
      img.onload = () => {
        loaded++;

        if (i === 1 || loaded === frameCount) drawFrame(0);
      };

      images.push(img);
    }

    function drawFrame(index) {
      const image = images[index];

      if (!image || !image.complete) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      );

      context.clearRect(0, 0, width, height);

      const scale = Math.max(
        width / image.width,
        height / image.height
      );

      const imageWidth = image.width * scale;
      const imageHeight = image.height * scale;

      const x = (width - imageWidth) / 2;
      const y = (height - imageHeight) / 2;

      context.drawImage(
        image,
        x,
        y,
        imageWidth,
        imageHeight
      );
    }

    let animationFrame;

    function handleScroll() {
      const section = canvas.parentElement;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      // Calculate scroll progress from 0 to 1
      const progress = Math.min(
        Math.max(-rect.top / scrollDistance, 0),
        1
      );

      // Convert progress into frame number
      const frameIndex = Math.floor(
        progress * (frameCount - 1)
      );

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => drawFrame(frameIndex));
    }

    function handleResize() {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, [frameCount]);

  return (
    <section className="scroll-sequence">
      <canvas ref={canvasRef}></canvas>
      {children}
    </section>
  );
}

export default ScrollSequence;
