import React, { FC, useRef, useEffect } from "react";
import { drawCenter, ScaleType } from "../utils/image-scaling-utils";

interface ImageCanvasProps {
  image?: HTMLImageElement;
  widthTarget: number;
  heightTarget: number;
  scaleType: ScaleType;
}
export const ImageCanvas: FC<ImageCanvasProps> = ({
  image,
  widthTarget,
  heightTarget,
  scaleType,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (canvasRef.current && !canvasCtxRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
    }
    return () => {
      canvasRef.current = null;
      canvasCtxRef.current = null;
    };
  }, []);
  useEffect(() => {
    if (!canvasCtxRef.current || !image) {
      return;
    }
    canvasCtxRef.current.clearRect(0, 0, widthTarget, heightTarget);
    drawCenter({
      ctx: canvasCtxRef.current,
      image,
      heightTarget,
      widthTarget,
      coverageType: scaleType,
    });
  }, [image, heightTarget, widthTarget, scaleType]);
  return (
    <canvas
      className={"our-canvas"}
      width={widthTarget}
      height={heightTarget}
      ref={canvasRef}
    ></canvas>
  );
};
