import type { FC } from 'react';
import clsx from 'clsx';
import { Plus as PlusIcon } from '@icons/Plus';
import type { PrimaryRoundedButtonWithIconProps } from './types';

export const PrimaryRoundedButtonWithIcon: FC<
  PrimaryRoundedButtonWithIconProps
> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'bg-blue-600 border border-blue-500 text-white rounded-full inline-flex items-center justify-center py-2 px-5 text-sm font-medium hover:bg-blue-500 active:bg-blue-400 disabled:bg-blue-900 disabled:border-blue-800 disabled:text-gray-500',
        className,
      )}
    >
      <span className="mr-2">
        <PlusIcon />
      </span>
      New
    </button>
  );
};
