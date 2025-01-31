import type { FC } from 'react';
import clsx from 'clsx';
import type { PrimaryButtonProps } from './types';

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        'px-4 py-2 text-sm font-medium rounded-lg transition',
        disabled
          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-500 cursor-pointer',
        className,
      )}
    >
      {children}
    </button>
  );
};
