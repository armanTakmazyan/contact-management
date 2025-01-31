import { FC } from 'react';
import { SidebarToolbar } from '@/components/SidebarToolbar/SidebarToolbar';
import { ContactListContainer } from '@containers/ContactListContainer';

export const SidebarContainer: FC = () => {
  return (
    <div className="w-full h-full max-w-sm min-w-xs flex flex-col justify-start border-r border-gray-600 p-2">
      <SidebarToolbar />
      <div className="mt-3 pt-2 flex-1 border-t border-gray-600 overflow-hidden">
        <ContactListContainer />
      </div>
    </div>
  );
};
