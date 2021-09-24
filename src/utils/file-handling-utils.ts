export const filterFilesByValidExtensions = (
  files: DataTransferItemList,
  fileExtensions: string[]
) => {
  const allFiles = Array.from(files)
    .map((item) => item.getAsFile())
    .filter((file) => !!file) as File[];
  return allFiles.filter((file) => {
    const ext = file.name.split(".").pop()?.toLocaleLowerCase();
    return ext ? fileExtensions.includes(ext) : false;
  });
};
