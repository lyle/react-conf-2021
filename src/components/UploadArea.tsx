import { FC, useCallback, useState, useEffect, useMemo } from "react";
import { filterFilesByValidExtensions } from "../utils/file-handling-utils";
const VALID_IMAGE_FILE_EXT = ["jpeg", "jpg", "png"];
type UploadAreaProps = {
  handleImage: (image: HTMLImageElement) => void;
};
export const UploadArea: FC<UploadAreaProps> = ({ handleImage }) => {
  const [focusMe, setFocusMe] = useState(false);
  const [tooManyFiles, setTooManyFiles] = useState(false);
  const [images, setImages] = useState<File[]>();
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setFocusMe(false);
      if (tooManyFiles) {
        setTooManyFiles(false);
        return;
      }
      if (event.dataTransfer.items) {
        setImages(
          filterFilesByValidExtensions(
            event.dataTransfer.items,
            VALID_IMAGE_FILE_EXT
          )
        );
      }
    },
    [tooManyFiles]
  );
  useEffect(() => {
    if (images && images.length) {
      const image = new Image();
      image.onload = () => {
        handleImage(image);
      };
      image.src = URL.createObjectURL(images[0]);
    }
  }, [handleImage, images]);
  const additionalClassName = useMemo(() => {
    return focusMe && (tooManyFiles ? "error" : "focused");
  }, [focusMe, tooManyFiles]);
  return (
    <div
      className={`drop-zone ${additionalClassName}`}
      onDragOver={(event: React.DragEvent<HTMLElement>) => {
        event.preventDefault();
      }}
      onDragEnter={(event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setFocusMe(true);
        if (event.dataTransfer.items) {
          setTooManyFiles(event.dataTransfer.items.length > 1);
        }
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setFocusMe(false);
        setTooManyFiles(false);
      }}
      onDrop={handleDrop}
    >
      {tooManyFiles ? "only one image please" : "drop an image here"}
    </div>
  );
};
