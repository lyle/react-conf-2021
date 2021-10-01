import { FC, useCallback, useState, useEffect, ReactElement } from "react";

type PasteMessageProps = {
  handleImage: (image: HTMLImageElement) => void;
};
export const PasteMessage: FC<PasteMessageProps> = ({ handleImage }) => {
  const [errorMessage, setErrorMessage] = useState<ReactElement>();

  useEffect(() => {
    const pasteListener = function (event: ClipboardEvent) {
      const firstFile = event.clipboardData?.files?.item(0);
      if (firstFile) {
        const image = new Image();
        image.onload = () => {
          handleImage(image);
        };
        image.src = URL.createObjectURL(firstFile);
      }
    };
    document.addEventListener("paste", pasteListener);
    return () => {
      document.removeEventListener("paste", pasteListener);
    };
  }, [handleImage]);

  const getImage = useCallback(() => {
    if (!navigator.clipboard) {
      setErrorMessage(
        <div>
          Sorry, your browser does not support this feature.
          <div>But you can just Paste.</div>
        </div>
      );
      return;
    } else {
      setErrorMessage(undefined);
    }

    navigator.clipboard.read().then((clipboardItems: ClipboardItem[]) => {
      const clipboardItem = clipboardItems.find((item) =>
        item.types.includes("image/png")
      );
      if (clipboardItem) {
        clipboardItem.getType("image/png").then((blob) => {
          const image = new Image();
          image.onload = () => {
            handleImage(image);
          };
          image.src = URL.createObjectURL(blob);
        });
      }
    });
  }, [handleImage]);
  return (
    <div className={`paste-message`} onClick={getImage}>
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div>image from clipboard</div>
      )}
    </div>
  );
};
