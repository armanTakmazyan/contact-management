import { FC } from 'react';
import clsx from 'clsx';
import { File as FileIcon } from '@icons/File';
import { inputBaseClass } from './constants';
import type { FormInputProps } from './types';

export const FormInput: FC<FormInputProps> = ({
  field,
  label,
  placeholder = '',
  type = 'text',
  className,
}) => {
  return (
    <div className={className}>
      <label htmlFor={field.name} className="text-gray-400 text-sm block">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          className={inputBaseClass}
          placeholder={placeholder}
        />
      ) : type === 'file' ? (
        <div
          className={clsx(inputBaseClass, 'flex items-center justify-center')}
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
            accept="image/*"
            id={field.name}
            name={field.name}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                field.setValue(file);
              }
            }}
            className="hidden"
          />
        </div>
      ) : (
        <input
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          className={inputBaseClass}
          placeholder={placeholder}
          type={type}
        />
      )}
      {field.state.meta.errors.length ? (
        <p className="text-red-500 text-sm mt-1">
          {field.state.meta.errors.join(', ')}
        </p>
      ) : null}
    </div>
  );
};
