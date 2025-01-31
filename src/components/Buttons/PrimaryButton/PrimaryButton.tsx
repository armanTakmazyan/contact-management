import type { FC } from 'react';
import clsx from 'clsx';
import type { PrimaryButtonProps } from './types';

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-500 cursor-pointer transition',
        className,
      )}
    >
      {children}
    </button>
  );
};
