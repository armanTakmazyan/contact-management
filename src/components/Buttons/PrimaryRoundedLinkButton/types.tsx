import type { AnchorHTMLAttributes } from 'react';

export type PrimaryRoundedLinkButtonProps =
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    disabled?: boolean;
  };
