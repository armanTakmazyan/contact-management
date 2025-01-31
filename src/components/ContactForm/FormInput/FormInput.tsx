import { FC } from 'react';
import { FileInput } from './FileInput';
import { INPUT_BASE_STYLES } from './constants';
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
      <label htmlFor={field.name} className="text-gray-400 text-sm block mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          className={INPUT_BASE_STYLES}
          placeholder={placeholder}
        />
      ) : type === 'file' ? (
        <FileInput field={field} />
      ) : (
        <input
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          className={INPUT_BASE_STYLES}
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
