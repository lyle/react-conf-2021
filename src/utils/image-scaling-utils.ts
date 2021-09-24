interface CoverCenterProps {
  coverageType: ScaleType;
  ctx: CanvasRenderingContext2D;
  image: HTMLImageElement;
  heightTarget: number;
  widthTarget: number;
}
export enum ScaleType {
  COVER,
  FIT,
}
export const drawCenter = ({
  ctx,
  image,
  heightTarget,
  widthTarget,
  coverageType,
}: CoverCenterProps) => {
  const targetAspectRatio = widthTarget / heightTarget;
  const imageAspectRation = image.naturalWidth / image.naturalHeight;
  const imageMorePortrait = 0 > imageAspectRation - targetAspectRatio;
  let resizedWidth, resizedHeight, startX, startY;

  const shouldWidthMatch =
    coverageType === ScaleType.COVER ? imageMorePortrait : !imageMorePortrait;
  if (shouldWidthMatch) {
    resizedWidth = widthTarget;
    resizedHeight = widthTarget / imageAspectRation;
    startX = 0;
    startY = (heightTarget - resizedHeight) / 2;
  } else {
    resizedWidth = heightTarget * imageAspectRation;
    resizedHeight = heightTarget;
    startX = (widthTarget - resizedWidth) / 2;
    startY = 0;
  }
  ctx.drawImage(image, startX, startY, resizedWidth, resizedHeight);
};
