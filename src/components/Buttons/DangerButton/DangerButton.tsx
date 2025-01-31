import type { FC } from 'react';
import clsx from 'clsx';
import type { DangerButtonProps } from './types';

export const DangerButton: FC<DangerButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-500 cursor-pointer transition',
        className,
      )}
    >
      {children}
    </button>
  );
};
