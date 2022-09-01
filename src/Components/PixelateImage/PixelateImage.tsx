export const PixelateImage = (
  imageDataURL: string,
  pixelationFactor: number
): string => {
  const image = new Image();
  image.src = imageDataURL;

  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
  const originalWidth: number = image.width;
  const originalHeight: number = image.height;
  const canvasWidth = originalWidth;
  const canvasHeight = originalHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  context?.drawImage(image, 0, 0, originalWidth, originalHeight);
  const originalImageData: Uint8ClampedArray | undefined =
    context?.getImageData(0, 0, originalWidth, originalHeight).data;
  if (pixelationFactor !== 0) {
    for (let y = 0; y < originalHeight; y += pixelationFactor) {
      for (let x = 0; x < originalWidth; x += pixelationFactor) {
        const pixelIndexPosition = (x + y * originalWidth) * 4;

        if (context && originalImageData) {
          context.fillStyle = `rgba(
            ${originalImageData[pixelIndexPosition]},
            ${originalImageData[pixelIndexPosition + 1]},
            ${originalImageData[pixelIndexPosition + 2]},
            ${originalImageData[pixelIndexPosition + 3]}
          )`;
          context.fillRect(x, y, pixelationFactor, pixelationFactor);
        }
      }
    }
  }

  return canvas.toDataURL();
};
