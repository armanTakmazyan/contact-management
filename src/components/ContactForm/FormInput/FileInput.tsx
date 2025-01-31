import { type FC, useState, useRef } from 'react';
import clsx from 'clsx';
import { File as FileIcon } from '@icons/File';
import { INPUT_BASE_STYLES, FILE_INPUT_ACCEPTED_TYPES } from './constants';
import { FileInputProps } from './types';

export const FileInput: FC<FileInputProps> = ({
  field,
  acceptedTypes = FILE_INPUT_ACCEPTED_TYPES,
}) => {
  const [fileState, setFileState] = useState<
    | { type: 'idle' }
    | { type: 'error'; message: string }
    | {
        type: 'success';
        file: { name: string; size: number };
        previewUrl: string;
      }
  >({ type: 'idle' });

  const previousPreviewUrl = useRef<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Free memory from the previous preview URL
    if (previousPreviewUrl.current) {
      URL.revokeObjectURL(previousPreviewUrl.current);
      previousPreviewUrl.current = null;
    }

    if (!acceptedTypes.includes(file.type)) {
      setFileState({
        type: 'error',
        message: 'Invalid file type. Please upload a PNG or JPG.',
      });
      field.setValue(null);
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    previousPreviewUrl.current = previewUrl; // Store new preview URL

    setFileState({
      type: 'success',
      file: { name: file.name, size: file.size },
      previewUrl,
    });

    field.setValue(file);
  };

  return (
    <div className="space-y-2">
      <div
        className={clsx(INPUT_BASE_STYLES, 'flex items-center justify-center')}
      >
        <label
          htmlFor={field.name}
          className="block w-full text-white cursor-pointer flex items-center justify-center"
        >
          <FileIcon className="mr-2" />
          Upload File
        </label>
        <input
          type="file"
          accept={acceptedTypes.join(',')}
          id={field.name}
          name={field.name}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      {fileState.type === 'error' && (
        <p className="text-red-500 text-sm">{fileState.message}</p>
      )}
      {fileState.type === 'success' && (
        <div className="mt-2">
          <p className="text-gray-400 text-sm">
            File: {fileState.file.name} (
            {(fileState.file.size / 1024).toFixed(2)} KB)
          </p>
          <img
            src={fileState.previewUrl}
            alt="Preview"
            className="mt-2 max-w-xs max-h-40 rounded border"
          />
        </div>
      )}
    </div>
  );
};
