import { ButtonHTMLAttributes } from 'react';

export interface DangerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
