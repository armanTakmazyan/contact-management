import { FC } from 'react';
import { Plus as PlusIcon } from '@icons/Plus';
import { SearchInput } from '@components/SearchInput';
import { PrimaryRoundedLinkButton } from '@/components/Buttons/PrimaryRoundedLinkButton';
import { ContactList } from '@components/ContactList';

const contacts = [
  { id: '1', name: 'Dennis Beatty' },
  { id: '2', name: 'Greg Brimble' },
  { id: '3', name: 'Ryan Dahl' },
  { id: '4', name: 'Sarah Dayan' },
  { id: '5', name: 'Ceora Ford' },
  { id: '6', name: 'Anthony Frehner' },
  { id: '7', name: 'Arisa Fukuzaki' },
  { id: '8', name: 'Michael Jackson' },
];

export const Sidebar: FC = () => {
  return (
    <div className="w-full h-full max-w-sm min-w-xs flex flex-col justify-start border-r border-gray-600 p-2">
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
      <div className="mt-2 pt-2 flex-1 border-t border-gray-600 overflow-hidden">
        <ContactList contacts={contacts} className="h-full" />
      </div>
    </div>
  );
};
