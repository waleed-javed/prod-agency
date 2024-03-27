/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { defaultWaveColors } from "../../utilities/constants";
import { cn } from "../../utilities/utility";

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 170,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.6,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow-mo" | "slow" | "fast";
  waveOpacity?: number;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    canvas_context: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow-mo":
        return 0.0009;
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    canvas_context = canvas.getContext("2d");
    w = canvas_context.canvas.width = window.innerWidth;
    h = canvas_context.canvas.height = window.innerHeight + 200;
    canvas_context.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = canvas_context.canvas.width = window.innerWidth;
      h = canvas_context.canvas.height = window.innerHeight + 200;
      canvas_context.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? defaultWaveColors;

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      canvas_context.beginPath();
      canvas_context.lineWidth = waveWidth || 50;
      canvas_context.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        canvas_context.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      canvas_context.stroke();
      canvas_context.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    canvas_context.fillStyle = backgroundFill || "black";
    canvas_context.globalAlpha = waveOpacity || 0.5;
    canvas_context.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  });

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome"),
    );
  }, []);

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center",
        containerClassName,
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 30 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "relative inset-0 z-10 rounded-2xl border bg-opacity-5 bg-gradient-to-t from-transparent to-gray-50 px-16 pb-16 backdrop-blur-lg backdrop-filter",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default WavyBackground;
