import { ChangeEventHandler } from 'react';

export interface SidebarToolbarArgs {
  inputValue: string;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}
