import { Plus as PlusIcon } from '@icons/Plus';
import { SearchInput } from '@components/SearchInput';
import { PrimaryRoundedLinkButton } from '@components/Buttons/PrimaryRoundedLinkButton';

export const SidebarToolbar = () => {
  return (
    <div className="w-full flex items-center">
      <SearchInput />
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
