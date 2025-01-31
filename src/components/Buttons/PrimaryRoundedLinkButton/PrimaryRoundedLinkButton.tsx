import { forwardRef } from 'react';
import { createLink } from '@tanstack/react-router';
import clsx from 'clsx';
import { PrimaryRoundedLinkButtonProps } from './types';

const StyledLinkComponent = forwardRef<
  HTMLAnchorElement,
  PrimaryRoundedLinkButtonProps
>(({ className, disabled = false, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={clsx(
        'bg-blue-600 border border-blue-500 text-white rounded-full flex items-center justify-center py-2 px-5 text-sm font-medium transition',
        {
          'bg-blue-900 border-blue-800 text-gray-500 cursor-not-allowed opacity-50':
            disabled,
          'hover:bg-blue-500 active:bg-blue-400 focus:ring-2 focus:outline-none':
            !disabled,
        },
        className,
      )}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        }
      }}
      {...props}
    />
  );
});

export const PrimaryRoundedLinkButton = createLink(StyledLinkComponent);
