import { ButtonHTMLAttributes } from 'react';

export interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
