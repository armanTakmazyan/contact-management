import { type FC, type ChangeEventHandler, useState } from 'react';
import { SidebarToolbar } from '@/components/SidebarToolbar/SidebarToolbar';
import { ContactListContainer } from '@containers/ContactListContainer';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';

export const SidebarContainer: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedInputValue = useDebouncedValue(inputValue, 400);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full h-full max-w-sm min-w-xs flex flex-col justify-start border-r border-gray-600 p-2">
      <SidebarToolbar inputValue={inputValue} onInputChange={onInputChange} />
      <div className="mt-3 pt-2 flex-1 border-t border-gray-600 overflow-hidden">
        <ContactListContainer searchQuery={debouncedInputValue} />
      </div>
    </div>
  );
};
