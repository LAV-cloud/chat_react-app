import { useState } from 'react';

export default function useFile(defaultValue = null) {
  const [file, setFile] = useState(defaultValue);

  function fileSizeHandler() {
    let sizeType = ['B', 'KB', 'MB', 'TB'],
      size = 0,
      fileSize = file ? file.size : 0;

    while (fileSize % 1024 === 0) {
      fileSize = fileSize / 1024;
      size++;
    }

    if (fileSize >= 1024) {
      fileSize = fileSize / 1024;
      size++;
    }
    return `${Math.round(fileSize)} ${sizeType[size]}`;
  }

  function fileHandler(files) {
    let file = files[0];

    if (file.type.replace(/\/.+/, '') === 'image') {
      setFile(file);
    }
  }

  const fileValue = file
    ? {
        // name: file.name,
        // type: file.type,
        img: URL.createObjectURL(file),
        // size: file.size,
        // sizeMod: fileSizeHandler(),
        file,
      }
    : null;

  return {
    bind: {
      onChange: (e) => fileHandler(e.target.files),
    },
    clear: () => {
      URL.revokeObjectURL(file);
      setFile(defaultValue);
    },
    value: () => fileValue,
  };
}
