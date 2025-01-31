import type { FC } from 'react';
import { Plus as PlusIcon } from '@icons/Plus';
import { SearchInput } from '@components/SearchInput';
import { PrimaryRoundedLinkButton } from '@components/Buttons/PrimaryRoundedLinkButton';
import { SidebarToolbarArgs } from './types';

export const SidebarToolbar: FC<SidebarToolbarArgs> = ({
  inputValue,
  onInputChange,
}) => {
  return (
    <div className="w-full flex items-center">
      <SearchInput value={inputValue} onChange={onInputChange} />
      <div className="ml-2">
        <PrimaryRoundedLinkButton to="/contact/new">
          <span className="mr-2">
            <PlusIcon />
          </span>
          New
        </PrimaryRoundedLinkButton>
      </div>
    </div>
  );
};
