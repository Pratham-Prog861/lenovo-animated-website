"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

export default function LenovoScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 39]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 1; i <= 40; i++) {
        const img = new Image();
        const src = `/lenovo/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
        img.src = src;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; 
        });
        loadedImages.push(img);
      }
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  const renderFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || images.length === 0) return;

      const img = images[Math.round(index)];
      if (!img) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    [images]
  );

  useEffect(() => {
    if (isLoaded && images.length > 0) {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      renderFrame(0);
    }
  }, [isLoaded, images, renderFrame]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderFrame(frameIndex.get());
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images, frameIndex, renderFrame]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      renderFrame(latest);
    }
  });

  return (
    <div ref={containerRef} className="h-[400vh] relative bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50">
            Loading Experience...
          </div>
        )}
        <canvas ref={canvasRef} className="w-full h-full object-cover" />

        <OverlayText scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function OverlayText({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  const x2 = useTransform(scrollYProgress, [0.2, 0.3], [-50, 0]);

  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const x3 = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const scale4 = useTransform(scrollYProgress, [0.8, 1], [0.9, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90">
          ENGINEERED
          <br />
          FOR POWER.
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute left-10 md:left-20 max-w-xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
          Precision-crafted
          <br />
          thermal architecture.
        </h2>
        <p className="text-xl text-white/60">
          Advanced cooling systems ensure peak performance under heavy loads.
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, x: x3 }}
        className="absolute right-10 md:right-20 max-w-xl text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
          Every component
          <br />
          optimized.
        </h2>
        <p className="text-xl text-white/60">
          From GPU to hinge, nothing is left to chance.
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity4, scale: scale4 }}
        className="absolute text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6">
          Built to reassemble
          <br />
          dominance.
        </h2>
        <div className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors cursor-pointer pointer-events-auto">
          Experience LOQ
        </div>
      </motion.div>
    </div>
  );
}
